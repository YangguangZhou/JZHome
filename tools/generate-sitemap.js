const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const config = require("../sitemap.config");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "public", "sitemap.xml");
const today = new Date().toISOString().slice(0, 10);

const runGit = (args) => {
    try {
        return execFileSync("git", args, {
            cwd: root,
            encoding: "utf8",
            stdio: ["ignore", "pipe", "ignore"],
        }).trim();
    } catch {
        return "";
    }
};

const lastModified = (sources) => {
    const existingSources = sources.filter((source) =>
        fs.existsSync(path.join(root, source))
    );

    const hasWorkingChanges = existingSources.some((source) =>
        Boolean(runGit(["status", "--porcelain", "--", source]))
    );

    if (hasWorkingChanges) {
        return today;
    }

    const committedDates = existingSources
        .map((source) => runGit(["log", "-1", "--format=%cs", "--", source]))
        .filter(Boolean)
        .sort();

    return committedDates.at(-1) || today;
};

const escapeXml = (value) =>
    value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");

const urls = config.pages
    .map((page) => {
        const url = new URL(page.path, config.origin).toString();
        return [
            "  <url>",
            `    <loc>${escapeXml(url)}</loc>`,
            `    <lastmod>${lastModified(page.sources)}</lastmod>`,
            "  </url>",
        ].join("\n");
    })
    .join("\n");

const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
].join("\n");

fs.writeFileSync(output, sitemap);
console.log(`Generated ${path.relative(root, output)} with ${config.pages.length} URLs.`);
