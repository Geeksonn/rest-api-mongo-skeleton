import express from 'express';
import cors from 'cors';

import posts from './api/posts.route.js';

const server = express();

server.use(cors());

server.use('/api/v1/posts', posts);

export default server;