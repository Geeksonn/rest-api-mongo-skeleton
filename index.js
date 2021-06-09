import * as mongodb from 'mongodb';
import dotenv from 'dotenv';

import server from './server.js';
import PostsDAO from './dao/postsDAO.js';

const port = 3001;
const MongoClient = mongodb.default.MongoClient;
dotenv.config();

/*

MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    })
    .then(async client => {
        await PostsDAO.connect(client);

        server.listen(port, () => {
            console.log('Server is running on port ' + port);        
        })
    });
    */

server.listen(port, () => {
    console.log('Server is running on port ' + port);
})