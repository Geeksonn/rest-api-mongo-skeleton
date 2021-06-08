import PostsDAO from '../dao/postsDAO.js';

export default class PostsController {
    static async getAllPosts(req, res, next) {
        const postsList = await PostsDAO.getAllPosts();
        const response = {
            posts: postsList
        };

        res.json(response);
    }

    /*
    static async getPostsBetweenDates(req, res, next) {
        const startDate = req.query.startDate == "" ? new Date("01/01/1970") : new Date(req.query.startDate);
        const endDate = req.query.endDate == "" ? Date.now() : new Date(req.query.endDate);


    }
    */
}