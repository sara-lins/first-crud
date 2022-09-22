import createUserServices from "../services/createUser.services";

const createUserController = (req, res) => {
  const { name, email } = req.body;

  const user = createUserServices(name, email);

  return res.status(201).json(user);
};

export default createUserController;
