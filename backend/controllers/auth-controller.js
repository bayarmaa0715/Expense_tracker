const sql = require("../config/db");
const bcrypt = require("bcrypt"); // brypt san suulgana ene n hereglegchees irsen passwordiig nuudag hash gargaj irne teheer hugjuulegch pass harah bolomjgui bolj baigaa ym
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data =
      await sql`INSERT INTO users(email,name,password) VALUES(${email},${name},${hashedPassword})`;
    res.status(200).json({ message: "success hashpaswword", data: data });
  } catch (error) {
    res.status(401).json({ message: "Client error" });
  }
};
const signIn = async (req, res) => {
  const { email, password } = req.body;
  const [user] = await sql`SELECT * FROM users WHERE email=${email}`;
  if (!user) {
    res.status(404).json({ message: "Burtgeltei hereglegch oldsongui" });
  } else {
    const isCheck = bcrypt.compareSync(password, user.password);
    if (!isCheck) {
      res
        .status(404)
        .json({ message: "Hereglegchiin email eswel nuuts ug buruu baina" });
    } else {
      const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
        expiresIn: "1h",
      }); //expiresIn neg tsagiin dotor ashiglah bolomjtoi
      res.status(200).json({ message: "success password", token: token });
    }
  }
};

module.exports = { signUp, signIn };
