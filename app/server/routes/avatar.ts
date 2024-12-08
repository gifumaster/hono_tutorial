import { Hono } from "hono";
import { z } from "zod";

const avatar = new Hono();

interface Avatars {
	id: number;
	avatarName: string;
	avatarId: string;
	imageUrl: string;
}

const fakeAvatars: Avatars[] = [
	{
		id: 1,
		avatarName: "john_doe",
		avatarId: "550e8400-e29b-41d4-a716-446655440000",
		imageUrl: "https://example.com/john_doe.png",
	},
	{
		id: 2,
		avatarName: "jane_doe",
		avatarId: "550e8400-e29b-41d4-a716-446655440001",
		imageUrl: "https://example.com/jane_doe.png",
	},
	{
		id: 3,
		avatarName: "alice",
		avatarId: "550e8400-e29b-41d4-a716-446655440002",
		imageUrl: "https://example.com/alice.png",
	},
	{
		id: 4,
		avatarName: "bob",
		avatarId: "550e8400-e29b-41d4-a716-446655440003",
		imageUrl: "https://example.com/bob.png",
	},
	{
		id: 5,
		avatarName: "charlie",
		avatarId: "550e8400-e29b-41d4-a716-446655440004",
		imageUrl: "https://example.com/charlie.png",
	},
];
const idSchema = z.string().uuid();

avatar.get("/", async (c) => {
	return c.json(fakeAvatars);
});

avatar.get("/:avatarId", async (c) => {
	const id = c.req.param("avatarId");
	try {
		idSchema.parse(id);
	} catch (e) {
		return c.text("Invalid ID", 400);
	}

	const avatar = fakeAvatars.find((a) => a.avatarId === id);
	if (!avatar) {
		return c.text("Avatar not found", 404);
	}

	return c.json(avatar);
});

export default avatar;
