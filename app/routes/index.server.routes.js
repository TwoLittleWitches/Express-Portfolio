var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Samantha Shirley" });
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/about-me", function (req, res, next) {
  res.render("about-me", { title: "About Me" });
});

router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

router.get("/contact-me", function (req, res, next) {
  res.render("contact-me", { title: "Contact Me" });
});

module.exports = router;
