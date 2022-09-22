import users from "../database";
import { v4 as uuidv4 } from "uuid";

const createUserServices = (name, email) => {
  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return "Email already is being used";
  }

  const newUser = {
    name,
    email,
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserServices;
