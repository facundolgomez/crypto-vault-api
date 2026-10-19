import { Router } from "express";
import {
  findCrypto,
  findCryptos,
  createCrypto,
  updateCrypto,
  deleteCrypto,
} from "../src/services/crypto.service.js";
import { verifyToken } from "../src/middlewares/verifyToken.js";
const router = Router();

router.get("/cryptos", verifyToken, findCryptos);
router.get("/cryptos/:id", verifyToken, findCrypto);
router.post("/cryptos", verifyToken, createCrypto);
router.put("/cryptos/:id", verifyToken, updateCrypto);
router.delete("/cryptos/:id", verifyToken, deleteCrypto);

export default router;
