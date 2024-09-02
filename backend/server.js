const express = require("express");
const { logger } = require("./middlewares/logger");
const userRouter = require("./routes/user-route");
const categoryRouter = require("./routes/category-route");
const recordRouter = require("./routes/record-route");
const authRouter = require("./routes/auth-route");
const dotenv = require("dotenv"); //dotenv sangaa importoloj bn // npm i dotenv san suulgaj awaad port 8008 gesen dugaaraa nuudag san suulgaw Tgd backend dotoroo nuugdsan fil uusgene .env gesen nerte filoe uusgew. Ene nuugdmal file dotorh huwisagchiig dan tom usgeer bichne

dotenv.config(); // zaawal config bicij bj .env filaas huwsagchiig server.js ruu importloj bn gesn ug ym

const PORT = process.env.PORT; // process gedeg function n zuwhun node js ajilaj bgaa uyd daraaahiig ajiluulah function

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // express.json function n client aas irsen  json huseltiig object bolgood req ruu shiljuulne huselt ireh burt express json awaad app.get iin reg ruu hiine

app.use(logger());
// app.use((req, res, next) => {
//   console.log(`${req.method}:${req.originalUrl}`); //GET:localhost
//   next();
// });
app.use("/users", userRouter);
app.use("/categories", categoryRouter);

// app.get("/category", (req, res) => {
//   res.status(200).json({ data: "data" });
// });
// app.post("/category", (req, res) => {
//   res.status(200).json({ data: "data" });
// });
// app.put("/category", (req, res) => {
//   res.status(200).json({ data: "data" });
// app.delete("/category", (req, res) => {
//   res.status(200).json({ data: "data" });
// });
app.use("/records", recordRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server running at localhost:8008");
});
