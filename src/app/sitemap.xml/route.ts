import { getAllPostPaths } from '@/lib/cms';
import { createSitemapUrlSet } from '@/lib/sitemap';

export const GET = async (): Promise<Response> => {
  const blogPostPaths = await getAllPostPaths();
  const sitemap = createSitemapUrlSet(blogPostPaths);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'text/xml'
    }
  });
};
