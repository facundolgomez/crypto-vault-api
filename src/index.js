import express from "express";
import { PORT } from "./config.js";
import cryptoRoutes from "../routes/cryptos.routes.js";
import { sequelize } from "./db.js";
import "../src/models/Crypto.js";
const app = express();

try {
  app.listen(PORT);
  app.use(express.json());
  app.use(cryptoRoutes);

  await sequelize.sync();
  console.log("Servidor escuchando en el puerto", PORT);
} catch (error) {
  console.log("Hubo un error en la inicializacion");
}
