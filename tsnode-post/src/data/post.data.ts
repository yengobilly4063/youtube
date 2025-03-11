import { Post } from '../types/post.types';
import { v4 as uuidv4 } from 'uuid';

export let posts: Post[] = [
    {
        id: uuidv4(),
        authorId: uuidv4(),
        content: 'Say hello xCodeBill, please like, subscribe and leave a comment',
        likes: 0,
        published: false,
        tags: ['boring', 'maybe'],
        title: 'Welcome to xCodeBill',
    },
];

export function getPosts() {
    return posts;
}

export function addPost(post: Post) {
    posts.push(post);
}

export function updatePostsList(newPosts: Post[], updatedpost: Post): Post[] {
    posts = [...newPosts, updatedpost];
    return posts;
}

export function removePost(postId: string): Post[] {
    posts = posts.filter((post) => post.id !== postId);
    return posts;
}
