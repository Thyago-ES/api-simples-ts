import { Router } from "express";
import UsersController from "./app/controllers/UsersController";

const routes = Router();

routes.get("/", UsersController.list);

routes.post("/", UsersController.create);

routes.delete("/:id", UsersController.delete);

export default routes;
