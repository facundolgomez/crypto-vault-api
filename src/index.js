import express from "express";
import { PORT } from "./config.js";
import cryptoRoutes from "../routes/cryptos.routes.js";
import { sequelize } from "./db.js";
import "../src/models/Crypto.js";
const app = express();

try {
  app.listen(PORT);
  app.use(express.json());
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });
  app.use(cryptoRoutes);

  await sequelize.sync();
  console.log("Servidor escuchando en el puerto", PORT);
} catch (error) {
  console.log("Hubo un error en la inicializacion");
}
