import { connectToDatabase } from '../utils/mongodb.js';

export default class PostsDAO {
    static async connect(client) {
        this.posts = await client.db(process.env.MONGO_DB).collection('Post');
    }

    static async getAllPosts() {
        const { db } = await connectToDatabase();
        let cursor; 
        
        try {
            cursor = await db.collection('Post').find();
        }
        catch(error) {
            console.log('Error occured during `find` operation inside getAllPosts');
            return [];
        }

        return cursor.toArray();
    }
}