import { Sequelize } from "sequelize";
import config from "../config/database";
import User from "../app/models/User";

const models = [User];

class Database {
	public connection: Sequelize;

	constructor() {
		this.connection = new Sequelize(config);
		this.testingConnection();
		this.init();
	}

	async testingConnection() {
		try {
			await this.connection.authenticate();
			console.log("Conectado com o banco de dados");
		} catch (error) {
			console.error("Erro na conexão com o banco de dados: " + error);
		}
	}

	init() {
		models.forEach((model) => model.initModel(this.connection));
	}
}

export default new Database();
