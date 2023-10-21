/**
 * Update this with the domain of your site
 */
const Config = {
  domain: 'https://www.test.com'
}

export interface Page {
  slug: string,
}

export const createSitemapUrlSet = (pages: Page[]): string => {
  const urlSet = pages.map((page) => (
    `<url>
        <loc>${Config.domain}${page.slug}</loc>
      </url>`
  )).join('');

  return (
    `<urlset 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${urlSet}
      </urlset>`
  );
};
