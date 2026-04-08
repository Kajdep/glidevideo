import fs from "fs";
import path from "path";

const SITE_URL = "https://www.glidevideo.com";
const PAGES_DIR = path.resolve("pages");
const OUTPUT_FILE = path.resolve("static/sitemap.xml");

function getPageFiles(): string[] {
  return fs
    .readdirSync(PAGES_DIR)
    .filter((f) => f.endsWith(".tsx") && !f.endsWith(".pageLayout.tsx"));
}

function fileToRoute(filename: string): string {
  const name = filename.replace(/\.tsx$/, "");
  return name === "_index" ? "/" : `/${name}`;
}

function getLastMod(): string {
  return new Date().toISOString().split("T")[0];
}

function routePriority(route: string): string {
  if (route === "/") return "1.0";
  return "0.8";
}

function buildSitemap(): string {
  const files = getPageFiles();

  const urls = files
    .map((file) => {
      const route = fileToRoute(file);
      const lastmod = getLastMod();
      const priority = routePriority(route);

      return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

const xml = buildSitemap();
fs.writeFileSync(OUTPUT_FILE, xml, "utf-8");
console.log(`Sitemap written to ${OUTPUT_FILE}`);
