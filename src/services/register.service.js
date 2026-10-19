import bcrypt from "bcrypt";
import { User } from "../models/User.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user) return res.status(400).send({ message: "Usuario existente" });

  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.json(newUser.id);
};
