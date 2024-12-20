import "dotenv/config";

import { Options } from "sequelize";

export default {
	dialect: "postgres",
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	logging: false,
	define: {
		underscored: true,
		underscoredAll: true,
		timestamps: false,
	},
} as Options;
