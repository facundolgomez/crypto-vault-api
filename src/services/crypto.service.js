import { Crypto } from "../models/Crypto.js";

export const findCryptos = async (req, res) => {
  const cryptos = await Crypto.findAll();
  res.json(cryptos);
};

export const findCrypto = async (req, res) => {
  const { id } = req.params;
  const crypto = await Crypto.findByPk(id);
  if (!crypto) {
    return res.status(404).send({ message: "Crypto no encontrada" });
  }
  res.json(crypto);
};

export const createCrypto = async (req, res) => {
  const { name, symbol, amount, value, image, description } = req.body;
  if (!name || !symbol) {
    return res
      .status(400)
      .send({ message: "Los campos nombre y simbolo son requeridos" });
  }
  const newCrypto = await Crypto.create({
    name,
    symbol,
    amount,
    value,
    image,
    description,
  });
  res.json(newCrypto);
};

export const updateCrypto = async (req, res) => {
  const { id } = req.params;
  const { name, symbol, amount, value, image, description } = req.body;
  if (!name || !symbol) {
    return res
      .status(400)
      .send({ message: "Los campos nombre y simbolo son requeridos" });
  }
  const crypto = await Crypto.findByPk(id);
  if (!crypto) {
    return res.status(404).send({ message: "Crypto no encontrada" });
  }

  await crypto.update({
    name,
    symbol,
    amount,
    value,
    image,
    description,
  });
  res.json(crypto);
};

export const deleteCrypto = async (req, res) => {
  const { id } = req.params;
  const crypto = await Crypto.findByPk(id);
  if (!crypto) {
    return res.status(404).send({ message: "Crypto no encontrada" });
  }
  await crypto.destroy();
  res.send(`<h1>Borrando critpo con el id ${id}</h1>`);
};
