import { Page } from '../sitemap';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export const getAllPosts = async (): Promise<Post[]> => {
  try {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
  } catch (e) {
    throw e;
  }
}

export const getAllPostPaths = async (): Promise<Page[]> => {
  const blogPosts = await getAllPosts();
  return blogPosts.map((post) => ({
    slug: `/post/${post.id}`,
  }))
}