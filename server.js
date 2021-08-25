require('dotenv').config()
const express = require("express");
const app = express(); 
const methodOverride = require("method-override");

app.use(express.static("public"));

app.use(methodOverride("_method"));

// app.use((req, res, next) => {
//   let logStr = `${req.method} ${req.url}`;
//   if (Object.keys(req.body).length !== 0) {
//     logStr += ` -- DATA: ${JSON.stringify(req.body)}`;
//   }
//   console.log(logStr);
//   next();
// });
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("users/index.ejs");
  });
app.use("/shoes", require("./controllers/shoesController.js"));
app.use("/users", require("./controllers/usersController.js"));

app.listen(process.env.PORT,() => {
  console.log("I am listening");
});
