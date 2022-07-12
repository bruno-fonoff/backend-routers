const router = require("express").Router();
const data = require("../data");
const { v4: uuid } = require("uuid");
const { application } = require("express");

//CREATE

router.post("/create-user", (req, res) => {
  data.push({ ...req.body, id: uuid() });

  res.status(201).json({ message: "successfully created!", data: data });
});

//READ

router.get("/read-user", (req, res) => {
  res.status(200).json({ data });
});

router.get("/details-user/:id", (req, res) => {
  const { id } = req.params;
  const document = data.filter((currentDoc) => currentDoc.id === id);
  res.status(200).json(document[0]);
});

//UPDATE

router.put("/edit-user/:id", (req, res) => {
  const { id } = req.params;
  data.forEach((currentDoc, i) => {
    if (currentDoc.id === id) {
      data[i] = { ...req.body, id: currentDoc.id };
    }
  });
  const newDoc = data.filter((currentDoc) => currentDoc.id === id);
  res.status(200).json(newDoc[0]);
});

//DELETE

// router.delete();

module.exports = router;
