const auth = (req, res, next) => {
  console.log("Нэвтэрсэн хэрэглэгч шалгах");
  if (!req.headers.authorization) {
    res.status(401).json({ message: "Энэ үйлдэл хийхийг тулд нэвтэрнэ үү" });
  }
  next();
};
module.exports = auth;
