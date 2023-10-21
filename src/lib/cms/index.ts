interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export const getAllPosts = (): Promise<Post> => {
  try {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
  } catch (e) {
    throw e;
  }
}

