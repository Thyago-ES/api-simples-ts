import { Request, Response } from "express";

import User from "../models/User";
import userSchema from "../schemas/userSchema";

class UsersController {
	static async list(req: Request, res: Response) {
		try {
			const users = await User.findAll();

			res.status(200).json(users);
		} catch (error) {
			res.status(500).json({ message: "Erro ao listar usuários" });
		}
	}

	static async create(req: Request, res: Response) {
		const validateUser = userSchema.safeParse(req.body);

		if (!validateUser.success) {
			res.status(400).json({ message: validateUser.error.issues[0].message });
			return;
		}

		const { name, email } = validateUser.data;

		const existingUser = await User.findOne({ where: { email } });

		if (existingUser) {
			res.status(400).json({ message: "Email já cadastrado" });
			return;
		}

		try {
			const user = await User.create({ name, email });

			res.status(201).json({ message: "Usuário criado com sucesso", user });
		} catch (error) {
			res.status(500).json({ message: "Erro ao criar usuário" });
		}
	}

	static async delete(req: Request, res: Response) {
		const { id } = req.params as { id: string };

		const user = await User.findByPk(id);

		if (!user) {
			res.status(404).json({ message: "Usuário não encontrado" });
			return;
		}

		try {
			await user.destroy();

			res.status(200).json({ message: "Usuário deletado com sucesso" });
		} catch (error) {
			res.status(500).json({ message: "Erro ao deletar usuário" });
		}
	}
}

export default UsersController;
