import { NextFunction, Request, Response } from 'express';
import { CreateUpdatePostDto, Post } from '../types/post.types';
import { v4 as uuidv4 } from 'uuid';
import CustomError from '../types/error.types';
import { getPosts, addPost, updatePostsList, removePost } from '../data/post.data';

export async function getAllPosts(req: Request, res: Response, next: NextFunction) {
    try {
        const posts = getPosts();
        res.status(201).json({ posts, count: posts.length });
    } catch (error) {
        next(error);
    }
}

export async function createPost(req: Request, res: Response, next: NextFunction) {
    try {
        const postData: CreateUpdatePostDto = req.body;
        const newPost: Post = {
            id: uuidv4(),
            authorId: uuidv4(),
            ...postData,
        };
        addPost(newPost);

        const posts = getPosts();

        res.json({ post: newPost, posts, count: posts.length });
    } catch (error) {
        next(error);
    }
}

export async function getSinglePost(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const postFound = getPosts().find((post) => post.id === id);

        if (!postFound) {
            throw new CustomError(`Post with id ${id} not found`, 404);
        }

        res.status(200).json(postFound);
    } catch (error) {
        next(error);
    }
}

export async function updatePost(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const postData: CreateUpdatePostDto = req.body;
        const postFromDb = getPosts().find((post) => post.id === id);

        if (!postFromDb) {
            throw new CustomError(`Post with id ${id} not found`, 404);
        }

        const updatedPost: Post = {
            ...postFromDb,
            ...postData,
        };

        const newPostsList = getPosts().filter((post) => post.id !== id);
        const posts = updatePostsList(newPostsList, updatedPost);
        res.status(200).json({ post: updatedPost, posts });
    } catch (error) {
        next(error);
    }
}

export async function deletePost(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const postFound = getPosts().find((post) => post.id === id);
        if (!postFound) {
            throw new CustomError(`Post with id ${id} not found`, 404);
        }

        removePost(id);

        res.status(200).json({ message: 'Post successfully deleted' });
    } catch (error) {
        next(error);
    }
}

export async function functionTemplate(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
        next(error);
    }
}
