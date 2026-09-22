import { sequelize } from "./db.js";
import { Crypto } from "./models/Crypto.js";

const cryptosData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    amount: 0.15,
    value: 9750,
    image:
      "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400",
    description:
      "La primera criptomoneda descentralizada, creada en 2009 por Satoshi Nakamoto.",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    amount: 1.8,
    value: 4500,
    image:
      "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
    description:
      "Plataforma descentralizada que permite ejecutar contratos inteligentes.",
  },
  {
    name: "Solana",
    symbol: "SOL",
    amount: 20,
    value: 1600,
    image:
      "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756",
    description:
      "Blockchain de alta velocidad conocida por sus bajas comisiones y rapidez.",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    amount: 1500,
    value: 900,
    image:
      "https://assets.coingecko.com/coins/images/975/standard/cardano.png?1696502090",
    description:
      "Blockchain basada en investigación académica, enfocada en sostenibilidad.",
  },
];

async function seed() {
  // Nos aseguramos de que la tabla exista antes de insertar datos
  await sequelize.sync();

  // Inserta todos los registros del array de una sola vez
  await Crypto.bulkCreate(cryptosData);

  console.log("Seed completado !");

  // Termina el proceso de Node (si no, el script queda colgado esperando)
  process.exit();
}

seed(); // Ejecutamos la función
