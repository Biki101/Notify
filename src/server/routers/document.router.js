const router = require("express").Router();
let Document = require("../model/document.model");

router.route("/").get((req, res) => {
  Document.find()
    .then((documents) => res.json(documents))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const file = req.body.file;

  const newDoc = new Document({
    title,
    file,
  });

  newDoc
    .save()
    .then(() => res.json("Document Uploaded"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Document.findByIdAndDelete(req.params.id)
    .then(() => res.json("Document deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
