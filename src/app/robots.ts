import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/account", "/saved", "/auth/"],
      },
    ],
    sitemap: "https://promitly.com/sitemap.xml",
  };
}
