import { User } from '../models/User.model.js';

const registerUser = (name, email, password, activationToken) =>
  User.create({
    name,
    email,
    password,
    activationToken,
  });

const findUser = (email) => User.findOne({ where: { email } });

const findUserById = (id) => User.findByPk(id);

const updateNameService = async (id, name) => {
  const user = await findUserById(id);

  user.name = name;
  await user.save();

  return user;
};

const normilizeUser = (user) => ({
  userId: user.userId,
  email: user.email,
  name: user.name,
});

export const userServices = {
  registerUser,
  findUser,
  findUserById,
  updateNameService,
  normilizeUser,
};
