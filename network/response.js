exports.success = (req, res, data, message) => {
  res.status(200).send({
    s: 1,
    data: data,
    mensaje: message,
  });
};

exports.error = (req, res, estatus, message) => {
  res.status(estatus).send({
    s: 0,
    data: "",
    mensaje: message,
  });
};
