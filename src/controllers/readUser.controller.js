import readUserServices from "../services/readUser.services";

const readUserController = (req, res) => {
  const users = readUserServices();

  return res.json(users);
};

export default readUserController;
