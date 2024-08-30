const express = require("express");
const app = express();

module.exports = app;
//routing
//.get(),.put(), .post(), .patch() ,.delete()
// C --> Create , method: .post()
// R --> Read , method: .get()
// U --> Update , method: .patch(), .put()
// D --> Delete , method: .delete()

app.get("/", (request, response, next) => {
  //fetch home page data
  //response variable is used to send data to clients
  //response.json(); // used to send json content
  //response.end(); // used to end communication with client
  //response.send(); // used to send  content to user
  //response.render();// to render view to the user
  //response.download(); // used to send download to the user
  response.json({
    result: "Hello world",
    msg: "Success",
    meta: null,
  });
});
app.use("/", (req, res, next) => {
  // if "/" url is not sent then it always executes
  // // always executes
  // manipulate request
  // respond to client
  // next middleware
  req.aboutUsContent("data here");
  //next()
  // res.json(  // code wont go below this if we send res here
  //   {

  //   }
  // )
  //next();
});

//writing middle ware for repeating codes:
const checkLogin = (req, res, next) => {
  //check login
  let loggedIn = true;
  if (loggedIn) {
    next(); // calls the next scope
  } else {
    res.status(401).json({
      result: null,
      msg: "not logged in",
      meta: null,
    });
  }
};

app.post("/about", checkLogin, (request, response, next) => {
  let aboutUs = request.aboutUsContent;
  response.send("<h2>Hello there</h2>");
  // response.json({
  //   result: aboutUs,
  //   msg: "Success",
  //   meta: null,
  // });
});

//here first checkLogin will be called and if next() scope is called inside callLogin then callback of the passedchecklogin will be called.
// and if next() is not called and passed res.json() then the callback wont be called and we will get out of that route.
app.get("/user/details", (req, res, next) => {
  //login -- suppose we have to check login request check code in multiple route
});
app.get("/user/:userid", (req, res, next) => {
  //login -- suppose we have to write login request check code in multiple route
  //this we have to write login code for multiple times into multiple routes so in this case we write those logics/codes inside middleware as:
  let userId = req.params.userId;
  let query = req.query;
});
