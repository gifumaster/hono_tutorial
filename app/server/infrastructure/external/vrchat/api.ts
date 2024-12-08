const vrchat_api_url = "https://api.vrchat.cloud/api/1";



const CreateHeader = (additionalHeaders: { [key: string]: string } = {}) => {
	const headers = new Headers();
	headers.append("User-Agent", "VRChatAvatarChanger");

	for (const [key, value] of Object.entries(additionalHeaders)) {
		headers.append(key, value);
	}

	return headers;
};

async function getApiKey() {
	const endpoint = "/config";
	const url = vrchat_api_url + endpoint;

	const request = new Request(url, {
		headers: CreateHeader(),
	});

	const response = await fetch(request, { method: "GET" });
	const data = await response.json();

	return data.clientApiKey;
}

function extractAuthToken(cookieString: string) {
	// 'auth='の部分を探す
	const authIndex = cookieString.indexOf("auth=");

	if (authIndex === -1) {
		return null; // 'auth='が見つからない場合
	}

	// 'auth='の後ろの値を取得する
	const startIndex = authIndex + "auth=".length;
	const endIndex = cookieString.indexOf(";", startIndex);

	// ';'が見つからない場合、文字列の最後までを取る
	const authToken =
		endIndex === -1
			? cookieString.substring(startIndex)
			: cookieString.substring(startIndex, endIndex);

	return authToken;
}

export async function getAuthToken(username: string, password: string) {
	const endpoint = "/auth/user";

	const apiKey = await getApiKey();

	const url = `${vrchat_api_url}${endpoint}?apiKey=${apiKey}`;

	const response = await fetch(url, {
		method: "GET",
		headers: CreateHeader({
			Authorization: `Basic ${btoa(`${username}:${password}`)}`,
		}),
	});
	const cookies = response.headers.get("set-cookie");
	if (cookies) {
		const authToken = extractAuthToken(cookies);
		if (authToken) {
			//@ts-ignore
			return [authToken, cookies, response.twoFactorAuthEnabled];
		}
	}
	return null;
}
