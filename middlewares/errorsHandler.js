// Middleware for catching and formatting errors
const errorsHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err.message });
};

module.exports = errorsHandler;