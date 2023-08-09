//Create web server 
const express = require('express');
const commentController = require('./controllers/comment'); // Replace with the correct path to your comment controller module

// Create an instance of Express
const app = express();
const port = 3000; // Change this to the desired port number

// Define a route for handling GET requests to the root path
app.get('/', commentController.comment_list);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});