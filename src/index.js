import express from "express";
import { PORT } from "./config.js";
import cryptoRoutes from "../routes/cryptos.routes.js";

const app = express();

app.listen(PORT);
app.use(cryptoRoutes);

console.log("Servidor escuchando en el puerto", PORT);
