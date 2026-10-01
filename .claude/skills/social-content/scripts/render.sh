#!/usr/bin/env bash
# Render Nuvero social slides to PNG with headless Chrome. No npm deps.
#
#   render.sh <deck-dir> [width] [height]
#
# Renders every slide-*.html in <deck-dir> to <deck-dir>/out/<name>.png and
# prints the resulting file list. Default canvas is Instagram portrait 1080x1350.
# Use 1080 1080 for square, 1080 1920 for stories/reels covers.
#
# Any `<!--ICONS-->` marker in a slide is replaced with the contents of
# assets/icons.svg before capture, so slide files stay short and still get the
# full Lucide sprite. (Chrome blocks cross-file <use href> over file://, which is
# why the sprite is injected rather than linked.)
set -euo pipefail

DIR="${1:?usage: render.sh <deck-dir> [width] [height]}"
W="${2:-1080}"
H="${3:-1350}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SPRITE="$(cd "$(dirname "${BASH_SOURCE[0]}")/../assets" && pwd)/icons.svg"

# Headless Chrome contends for the singleton lock on the default profile when the
# user's own Chrome is running — captures then hang for minutes or never finish.
# An isolated throwaway profile keeps each render at ~2s.
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

[ -x "$CHROME" ] || { echo "Google Chrome not found at $CHROME" >&2; exit 1; }
[ -f "$SPRITE" ] || { echo "icons.svg missing — run build-icons.mjs first" >&2; exit 1; }

DIR="$(cd "$DIR" && pwd)"
mkdir -p "$DIR/out"
shopt -s nullglob
FILES=("$DIR"/slide-*.html)
[ ${#FILES[@]} -gt 0 ] || { echo "no slide-*.html in $DIR" >&2; exit 1; }

for f in "${FILES[@]}"; do
  name="$(basename "${f%.html}")"
  src="$f"

  # Inject the sprite into a sibling temp file so relative CSS paths still resolve.
  if grep -q '<!--ICONS-->' "$f"; then
    src="$DIR/.$name.render.html"
    awk -v sprite="$SPRITE" '
      /<!--ICONS-->/ { close(sprite); while ((getline line < sprite) > 0) print line; close(sprite); next }
      { print }
    ' "$f" > "$src"
  fi

  # --virtual-time-budget lets the Google Fonts request settle before capture;
  # without it the first slide renders in a fallback face.
  #
  # headless=new writes the PNG and then frequently fails to exit, so waiting on
  # the process costs minutes per slide. Watch for the file to stop growing and
  # kill Chrome instead — the capture itself takes ~2s.
  out="$DIR/out/$name.png"
  rm -f "$out"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
            --user-data-dir="$PROFILE" --no-first-run --no-default-browser-check \
            --force-device-scale-factor=1 --virtual-time-budget=8000 \
            --window-size="$W,$H" \
            --screenshot="$out" "$src" >/dev/null 2>&1 &
  pid=$!
  for _ in $(seq 1 120); do          # 60s ceiling
    if [ -s "$out" ]; then
      a=$(stat -f%z "$out"); sleep 0.4; b=$(stat -f%z "$out")
      [ "$a" = "$b" ] && break        # size settled => capture complete
    fi
    sleep 0.5
  done
  kill "$pid" 2>/dev/null || true
  wait "$pid" 2>/dev/null || true

  [ "$src" = "$f" ] || rm -f "$src"
  [ -s "$out" ] || { echo "FAILED: $name" >&2; exit 1; }
  printf '  out/%s.png  %s\n' "$name" \
    "$(sips -g pixelWidth -g pixelHeight "$out" | awk '/pixel/{printf "%sx", $2}' | sed 's/x$//')"
done

echo "done → $DIR/out"
