import { getAuthToken } from "../../infrastructure/external/vrchat/api";

interface LoginCredentials {
	userName: string;
	password: string;
}

export const loginUseCase = async (loginCredntials: LoginCredentials) => {
	try {
		// authToken取得
		const result = await getAuthToken(
			loginCredntials.userName,
			loginCredntials.password,
		);

		if (result) {
			return {
				success: true,
				result: result[0],
			};
		}
	} catch (error) {
		// Handle error
		// return { success: false, message: "An error occurred during login", error };
	}
};
