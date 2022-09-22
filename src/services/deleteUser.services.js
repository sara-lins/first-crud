import users from "../database";

const deleteUserServices = (id) => {
  const userIndex = users.findIndex((elem) => elem.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users.splice(userIndex, 1);

  return "Usuário excluído";
};

export default deleteUserServices;
