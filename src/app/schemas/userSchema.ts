import { z } from "zod";

export default z.object({
	name: z
		.string()
		.min(2, { message: "O nome precisa ter, no mínimo, 2 caracteres!" })
		.max(50, { message: "O nome está ultrapassando 50 caracteres!" }),
	email: z
		.string()
		.email({ message: "Digite um email válido!" })
		.max(50, { message: "O email está ultrapassando 50 caracteres!" }),
});
