import express from 'express';
import {
    createPost,
    deletePost,
    getAllPosts,
    getSinglePost,
    updatePost,
} from '../services/post.service';

const router = express.Router();

router.get('/', getAllPosts);

router.post('/', createPost);

router.get('/:id', getSinglePost);

router.put('/:id', updatePost);

router.delete('/:id', deletePost);

export default router;
