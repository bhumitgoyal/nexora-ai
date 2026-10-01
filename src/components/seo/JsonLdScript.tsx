/**
 * Renders a JSON-LD <script>. `<` is escaped so a string coming from the
 * deployments/reviews feeds can never close the script tag early.
 */
export function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
