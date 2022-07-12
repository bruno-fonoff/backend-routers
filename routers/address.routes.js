const router = require("express").Router();
const data = require("../data");
const { v4: uuid } = require("uuid");

//CREATE

router.post("/create-address", (req, res) => {
  data.push({ ...req.body, id: uuid() });

  res.status(201).json({ message: "successfully created!", data: data });
});

//READ

router.get("/read-address", (req, res) => {
  res.status(200).json({ data });
});

//READ details

router.get("/details-address/:id", (req, res) => {
  const { id } = req.params;
  const document = data.filter((currentDoc) => currentDoc.id === id);
  res.status(200).json(document[0]);
});

//UPDATE

router.put("/edit-address/:id", (req, res) => {
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

router.delete("/delete-address/:id", (req, res) => {
  const { id } = req.params;

  const doc = data.filter((currentDoc) => currentDoc.id === id);

  const index = data.indexOf(doc[0]);

  data.splice(index, 1);

  res
    .status(200)
    .json({ message: `ID: ${id} successfully deleted!`, data: data });
});

module.exports = router;
