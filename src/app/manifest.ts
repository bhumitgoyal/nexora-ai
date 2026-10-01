import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#FDF0D5",
    theme_color: "#FDF0D5",
    lang: "en",
    categories: ["business", "productivity"],
    icons: [
      // src/app/icon.png (512×512) is served at /icon.png by the file convention.
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
