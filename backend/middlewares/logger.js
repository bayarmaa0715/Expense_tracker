const logger = () => {
  return (req, res, next) => {
    console.log(`${req.method}:${req.originalUrl}`); //GET:localhost
    next();
  };
};
module.exports = { logger };
