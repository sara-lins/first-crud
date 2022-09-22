import updateUserServices from "../services/updateUser.services";

const updateUserController = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const userUpdate = updateUserServices(id, name, email);

  return res.json(userUpdate);
};

export default updateUserController;
