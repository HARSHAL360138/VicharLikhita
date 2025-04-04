// const errorHandler = (err, req, res, next) => {
//     res.status(500).json({ error: err.message || 'Server Error' });
// };

// module.exports = errorHandler;



const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
  };
  
  module.exports = errorHandler;
  