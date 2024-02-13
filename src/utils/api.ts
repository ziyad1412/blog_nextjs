export type Post = {
    id: number;
    user_id: number;
    title: string;
    body: string;
}

export type Comment = {
    post_id: number;
    id: number;
    name: string;
    email: string;
    body: string;
  };

  export type User = {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
};



const apiEndPoint = "https://gorest.co.in/public/v2";

export async function getPosts(page: number): Promise<Post[]>  {
    const res = await fetch(`${apiEndPoint}/posts?page=${page}`);
    return res.json();
  }

export async function getPost(postId: string): Promise<Post> {
    const res = await fetch(`${apiEndPoint}/posts/${postId}`);
    return res.json();
  }
  
  export async function getComments(postId: string): Promise<Comment[]> {
    const res = await fetch(
      `${apiEndPoint}/posts/${postId}/comments`
    );
    return res.json();
  }
  
  export async function getUser(user_id: number): Promise<User> {
    const res = await fetch(`${apiEndPoint}/users/${user_id}`);
    return res.json();
}

