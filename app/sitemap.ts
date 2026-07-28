import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/utils/site-url";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/mentoria/donos-de-negocios", changeFrequency: "monthly", priority: 0.9 },
  { path: "/mentoria/lojas-fisicas", changeFrequency: "monthly", priority: 0.9 },
  { path: "/consultoria/cultura", changeFrequency: "monthly", priority: 0.85 },
  {
    path: "/consultoria/planejamento-estrategico",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/consultoria/analise-plantas-pdv",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  { path: "/consultoria/performance-3ps", changeFrequency: "monthly", priority: 0.85 },
  { path: "/palestras", changeFrequency: "monthly", priority: 0.85 },
  { path: "/treinamentos", changeFrequency: "monthly", priority: 0.85 },
  { path: "/sobre", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contato/clientes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contato/parcerias", changeFrequency: "monthly", priority: 0.7 },
  { path: "/politica-de-privacidade", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: getAbsoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
  ];
}
