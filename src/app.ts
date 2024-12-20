import "dotenv/config";

import express, { Application } from "express";
import routes from "./routes";
import cors from "cors";

import "./database";

class App {
	public server: Application;

	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(cors());
		this.server.use(express.json());
	}

	routes() {
		this.server.use("/users", routes);
	}
}

export default new App().server;
