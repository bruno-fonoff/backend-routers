const router = require("express").Router();
const data = require("../data");
const { v4: uuid } = require("uuid");

router.post("/create-user", (req, res) => {
  data.push({ ...req.body, id: uuid() });

  res.status(201).json({ message: "successfully created!", data: data });
});

module.exports = router;
