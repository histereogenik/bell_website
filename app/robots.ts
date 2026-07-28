import type { MetadataRoute } from "next";
import { getAbsoluteUrl, getSiteUrl } from "@/utils/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/direto-ao-ponto", "/direto-ao-ponto/"],
      },
    ],
    sitemap: getAbsoluteUrl("/sitemap.xml"),
    host: getSiteUrl(),
  };
}
