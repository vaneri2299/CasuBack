const express = require("express");
const router = express.Router();
const response = require("../../network/response");

router.get("/", (req, res) => {
  response.success(req, res, "Exitoso");
});

router.post("/", (req, res) => {
  res.send("asdsa2");
});

module.exports = router;
