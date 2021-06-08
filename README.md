# rest-api-mongo-skeleton
A simple skeleton for REST API with MongoDB.

This simple skeleton aims to provide a very basic server that retrieves, creates and deletes blog posts. The posts are simply constitued of a `title`, a `content` and a `date`.


# Steps 

## Init the server part

Install express and create a `server.js` source. To install express: 
`npm install express cors mongodb`
The `server.js` source should contain all configuration related to the server (e.g., use of middelwares).

## Init the DAO part

Then, create a `.env` file to setup the MongoDB URI and database.
Then, create a folder `dao` and, inside, a `postsDAO.js` file. 

## Controller & route part

Create a directory called `api` and, inside, create two sources: `posts.controller.js` and `posts.route.js`.
The first one, the `controller` will be responsible to have the logic of calling the right DAO methods and build the response. 
The second one, the `route` will be responsible to list all the HTTP methods and forwards them to the right Controller method. 

## Link the server part and the route

Now that the `route` file connects the HTTP methods to the right controller and the controller calls the DAO, we need to connect the server to the route. 
Inside `server.js`, add a line `server.use()` for each route we have. In our case, only the `posts` route. 

## Finish with index.js

Inside the main source, `index.js`, we need to connect to the MongoDB server and, if successful, inject the connections the the DAOs and start the server. 

## That's it !

That's it ! We have a server running and connected to MongoDB. 
To test it, go to http://localhost:3001/api/v1/posts