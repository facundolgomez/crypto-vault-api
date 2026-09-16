import { Router } from "express";

const router = Router();

router.get("/cryptos", (req, res) => {
  res.send("Obteniendo criptos");
});

export default router;
