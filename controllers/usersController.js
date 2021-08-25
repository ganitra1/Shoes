const express = require("express");
const router = express.Router();
const Users = require('../models').User;
const Shoes = require("../models").Shoes;

router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});
// GET LOGIN
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

//POST LOGIN
router.post("/login", async (req, res) => {
  console.log(req.body);
  let user = await Users.findOne({
    where:{
      username:req.body.username,
      password:req.body.password
    }
  
  })
 if (user){
  res.redirect(`/shoes`);
 }
 else {
   res.redirect(`/users/login`);
 }
});

// POST - CREATE NEW USER FROM SIGNUP
router.post("/", async (req, res) => {
  console.log(req.body);
  const newUser= await Users.create(req.body);
  
  console.log(" NEWUSER", newUser)
  res.redirect(`/shoes`);
});


router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});
router.get("/", (req, res) => {
  Users.findAll().then((users) => {
    res.render("./users/index.ejs", {
      users: users,
    });
  });
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
      Users.findByPk(id, {
      include: [
        {
          model: Shoes,
          attibutes: ["id", "name"],
        },
      ],
    }).then((user) => {
      console.log(user);
      res.render("users/show.ejs", { user });
    });
  })
 
  

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const results = await User.update(req.body, {
    where: { id },
    returning: true,
  });

  res.redirect(`/users/${results[1][0].id}`);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await User.destroy({ where: { id } });
  res.redirect("/users");
});

module.exports = router;