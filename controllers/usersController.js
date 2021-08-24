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
router.post("/login", (req, res) => {
  console.log(req.body);
  let index = users.findIndex(
    (user) =>
      user.username === req.body.username && user.password === req.body.password
  );

  res.redirect(`/users/profile/${index}`);
});

// POST - CREATE NEW USER FROM SIGNUP
router.post("/", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.redirect(`/users/profile/${users.length - 1}`);
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

  if (req.users.id == req.params.id) {
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
  } else {
    res.redirect("/");
  }
});

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