import path from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [TanStackRouterVite(), viteReact()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
