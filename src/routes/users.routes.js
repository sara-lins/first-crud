import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import readUserController from "../controllers/readUser.controller";
import updateUserController from "../controllers/updateUser.controller";

const route = Router();

route.post("", createUserController);
route.get("", readUserController);
route.put("/:id", updateUserController);
route.delete("/:id", deleteUserController);

export default route;
