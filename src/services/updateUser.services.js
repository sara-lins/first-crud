import users from "../database";

const updateUserServices = (id, name, email) => {
  const userUpdate = {
    name,
    email,
    id,
  };
  const userIndex = users.findIndex((elem) => elem.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...userUpdate };

  return users[userIndex];
};

export default updateUserServices;
