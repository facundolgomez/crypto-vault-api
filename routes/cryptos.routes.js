import { Router } from "express";

const router = Router();

router.get("/cryptos", (req, res) => {
  res.send("Obteniendo criptos");
});

router.get("/cryptos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Obteniendo critpo con el id ${id}`);
});

router.post("/cryptos", (req, res) => {
  res.send("Creando cripto");
});
router.put("/cryptos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Actualizando critpo con el id ${id}`);
});

router.delete("/cryptos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Borrando critpo con el id ${id}`);
});
export default router;
