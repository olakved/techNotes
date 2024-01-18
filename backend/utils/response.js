const handleResponse = (res, status, message, data) => {
  return res.status(status).json({
    data,
    message,
  });
};

module.exports = handleResponse;
