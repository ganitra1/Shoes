const express = require("express");
const router = express.Router();
const Shoes = require('../models').Shoes;
const User = require('../models').User;

router.get("/", (req, res) => {
    Shoes.findAll().then((shoes) => {
      res.render("index.ejs", {
        shoes: shoes,
      });
    });
  });

//put this above your show.ejs file
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

router.post("/", (req, res) => {
  Shoes.create(req.body).then((newShoes) =>{
  res.redirect("/shoes");
});
});

router.get("/:id", (req, res) => {
    Shoes.findByPk(req.params.id, {
        include : [{
            model:User,
            attributes: ['name']
        }],
        attributes: ['name','category','brand','color','heel_heigth','season']
    })
      

    .then(shoes => {
        res.render('show.ejs', {
            shoes: shoes
        });
    })
})

  router.get("/:id/edit", function (req, res) {
    Shoes.findByPk(req.params.id).then((shoes) => {
      res.render("edit.ejs", {
         shoes
      });
    });
  });

router.put("/:id", (req, res) => {
  
    Shoes.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      }).then((shoes) => {
        res.redirect("/shoes");
      });
    });

router.delete("/:id", (req, res) => {
    Shoes.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/shoes");
    });
  });

module.exports = router;