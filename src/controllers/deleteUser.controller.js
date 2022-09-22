import deleteUserServices from "../services/deleteUser.services";

const deleteUserController = (req, res) => {
  const { id } = req.params;

  const deletedUser = deleteUserServices(id);

  return res.json(deletedUser);
};

export default deleteUserController;
