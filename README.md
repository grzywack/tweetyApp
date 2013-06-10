#Live application
1. Update the routes to accept 'socket' along with 'app' on requests.
2. [routes/index.js] In /tweet route, added function to call 'getStream'.
3. [routes/index.js] In /tweet route, set up io.on 'connection' and pass socket to callback.
4. [routes/index.js] In /tweet route, set up stream.on 'data' event and pass data to callback.
5. [routes/index.js] In /tweet route, emit a 'data' event upon receiving data back from io stream.
6. [routes/index.js] In /tweet route respond to requests with tweets.jade template.
7. Created a view to accept streaming data from the web server.
8. Added socket.io to app.js file.
9. Added socket.io to the client.