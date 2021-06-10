const router = require("express").Router();
let Admin = require("../model/admin..model");

router.route("/create").post((req, res) => {
  const username = req.body.username;
  const newAdmin = new Admin({
    username,
  });

  newAdmin
    .save()
    .then(() => res.json("Admin Created!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
