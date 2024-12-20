import { DataTypes, Model, Sequelize } from "sequelize";

class User extends Model {
	static initModel(sequelize: Sequelize) {
		super.init(
			{
				name: {
					type: DataTypes.STRING,
					field: "nome",
				},
				email: DataTypes.STRING,
			},
			{
				sequelize,
				name: {
					singular: "user",
					plural: "users",
				},
			}
		);
	}
}

export default User;
