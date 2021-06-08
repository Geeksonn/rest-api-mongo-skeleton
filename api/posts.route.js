import { Router } from 'express';
import PostsController from './posts.controller.js';

const postsRouter = new Router();

postsRouter.route('/').get(PostsController.getAllPosts);

export default postsRouter;