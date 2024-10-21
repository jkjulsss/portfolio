import { MetadataRoute } from "next/types";

const BASE_URL = "https://beaudelaire.ca";

const pages: Array<{
  route: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}> = [
  { route: "/", priority: 1, changeFrequency: "weekly" },
  { route: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { route: "/work", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ route, priority, changeFrequency }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
