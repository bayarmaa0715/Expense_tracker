const express = require("express");
const { logger } = require("./middlewares/logger");
const userRouter = require("./routes/user-route");
const categoryRouter = require("./routes/category-route");
const recordRouter = require("./routes/record-route");
const authRouter = require("./routes/auth-route");
const dotenv = require("dotenv"); //dotenv sangaa importoloj bn // npm i dotenv san suulgaj awaad port 8008 gesen dugaaraa nuudag san suulgaw Tgd backend dotoroo nuugdsan fil uusgene .env gesen nerte filoe uusgew. Ene nuugdmal file dotorh huwisagchiig dan tom usgeer bichne

dotenv.config(); // zaawal config bicij bj .env filaas huwsagchiig process.env file hiij ugnu 

const PORT = process.env.PORT; // process gedeg function n zuwhun node js ajilaj bgaa uyd daraaahiig ajiluulah function,huwsagchiig server.js ruu importloj bn gesn ug ym

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

// _ gesen dooguur zuraas n ug huwsagchiig ashiglahgu gesen sanaa
// back end iin hamgiin anhnii folderiig root folder gene backend file n root folder
// folder dotoroo vercel.json file neegeerei
//
app.get("/", (_, res) => {
  res.send("Welcome EXPENSE TRACKER API");
});

app.listen(PORT, () => {
  console.log("Сервер аслаа гиииооорлл:8008", PORT);
});
