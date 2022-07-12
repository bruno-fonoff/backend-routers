const router = require("express").Router();
const data = require("../data");
const { v4: uuid } = require("uuid");

//CREATE

router.post("/create-user", (req, res) => {
  data.push({ ...req.body, id: uuid() });

  res.status(201).json({ message: "successfully created!", data: data });
});

//READ

router.get("/read-user", (req, res) => {
  res.status(200).json({ data });
});

//UPDATE

module.exports = router;
