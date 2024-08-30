// creating first server
//http package is require to create a server
const http = require("http");
const app = require("./src/config/express.config")
// const server = http.createServer((request, respose) => {
//   respose.end("Hello world")
// });

//mounting express to node server......

const server = http.createServer(app);

  // host the server in localhost:3005
//for deployment we must not send localhost
//port no is also not passed and taken from the environment.
server.listen('3005', 'localhost',(err) => {
  if(!err) {
    console.log("Server is running successfully in port 3005");
    console.log("press cltr+c to disconnet from the server");
    console.log("use url http://localhost:3005/ to browse to your server");

  }
})



