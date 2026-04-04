import { defineConfig } from "@ruan-cat/vercel-deploy-tool";

export default defineConfig({
	vercelProjectName: process.env.VERCEL_PROJECT_NAME || "vercel-monorepo-test-1-zn20",
	vercelToken: process.env.VERCEL_TOKEN || "",
	vercelOrgId: process.env.VERCEL_ORG_ID || "",
	vercelProjectId: process.env.VERCEL_PROJECT_ID || "",
	vercelJsonPath: "./vercel.qj-en.json",
	deployTargets: [
		// 仇九rmmz项目
		{
			type: "userCommands",
			outputDirectory: "dist",
			targetCWD: "./apps/drill",
			url: [
				"qj-rmmz.ruancat6312.top",
				"qj-mz-plugins-24-12-2.ruancat6312.top",
			],
			userCommands: ["pnpm -C=./apps/drill build:qj-en"],
			watchPaths: [
				"apps/drill/**",
				"package.json",
				"pnpm-workspace.yaml",
				"tsconfig.base.json",
				"vercel-deploy-tool.config.ts",
				"vercel.qj-en.json",
			],
		},

		// 钻头项目
		// {
		// 	type: "userCommands",
		// 	outputDirectory: "dist/drill",
		// 	targetCWD: "./apps/drill",
		// 	url: [
		// 		"drill-mv.ruancat6312.top",
		// 	],
		// 	userCommands: ["pnpm -C=./apps/drill build:drill"],
		// },
	],
});
