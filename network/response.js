exports.success = (req, res, message) => {
  res.status(200).send({
    s: 1,
    data: "",
    mensaje: message,
  });
};

exports.error = (req, res) => {
  //
};
