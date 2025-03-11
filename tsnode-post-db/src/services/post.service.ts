import { NextFunction, Request, Response } from 'express';
import { CreateUpdatePostDto, Post } from '../types/post.types';
import { v4 as uuidv4 } from 'uuid';
import CustomError from '../types/error.types';
import { postRepostitory } from '../database/repositories';
import { PostEntity } from '../database/entities/post.entity';

export async function getAllPosts(req: Request, res: Response, next: NextFunction) {
    try {
        const posts = await postRepostitory.find();
        res.status(201).json({ posts, count: posts.length });
    } catch (error) {
        next(error);
    }
}

export async function createPost(req: Request, res: Response, next: NextFunction) {
    try {
        const postData: CreateUpdatePostDto = req.body;
        const newPostData = {
            authorId: uuidv4(),
            ...postData,
        };

        const createdPost = postRepostitory.create(newPostData);
        const savedPost = await postRepostitory.save(createdPost, { reload: true });

        const posts = await postRepostitory.find();

        res.json({ post: savedPost, posts, count: posts.length });
    } catch (error) {
        next(error);
    }
}

export async function getSinglePost(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const postFound = await findPostById(id);

        res.status(200).json(postFound);
    } catch (error) {
        next(error);
    }
}

export async function updatePost(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const postData: CreateUpdatePostDto = req.body;

        const postFound = await findPostById(id);

        const updatedPost: Post = {
            ...postFound,
            ...postData,
        };

        const post = await postRepostitory.save(updatedPost, { reload: true });
        const posts = await postRepostitory.find();

        res.status(200).json({ post, posts });
    } catch (error) {
        next(error);
    }
}

export async function deletePost(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;

        await findPostById(id);
        await postRepostitory.delete(id);

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

async function findPostById(postId: string): Promise<PostEntity> {
    const postFound = await postRepostitory.findOne({ where: { id: postId } });

    if (!postFound) {
        throw new CustomError(`Post with id ${postId} not found`);
    }

    return postFound;
}
