/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://acelords.space",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};

export default config;
