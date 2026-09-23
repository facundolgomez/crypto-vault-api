import { Router } from "express";
import {
  findCrypto,
  findCryptos,
  createCrypto,
  updateCrypto,
  deleteCrypto,
} from "../src/services/crypto.service.js";

const router = Router();

router.get("/cryptos", findCryptos);
router.get("/cryptos/:id", findCrypto);
router.post("/cryptos", createCrypto);
router.put("/cryptos/:id", updateCrypto);
router.delete("/cryptos/:id", deleteCrypto);

export default router;
