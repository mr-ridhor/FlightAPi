const sendSuccess = (res, data) => {
    res.json(data);
  };
  
  const sendError = (res, statusCode, message) => {
    res.status(statusCode).json({ error: message });
  };
  
  module.exports = {
    sendSuccess,
    sendError,
  };
  