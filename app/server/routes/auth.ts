import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { loginUseCase } from "../feature/auth/loginUseCase";

const authRoutes = new Hono();

const loginSchema = z.object({
	userName: z.string().min(1, "Username is required"),
	password: z.string().min(1, "Password is required"),
});

authRoutes.post("/login", zValidator("json", loginSchema), async (c) => {
	const body = await c.req.json();
	const result = loginSchema.safeParse(body);

	if (!result.success) {
		return c.json(
			{ message: "Validation failed", errors: result.error.errors },
			400,
		);
	}

	const loginResult = await loginUseCase(result.data);
	// Handle login logic here
	return c.json({ message: "Login successful", result: loginResult?.result });
});

export default authRoutes;
