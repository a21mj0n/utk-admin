export enum AppLayoutsEnum {
	auth = "auth",
	empty = "empty",
	main = "main"
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
	auth: "AuthLayout",
	empty: "EmptyLayout",
	main: "MainLayout"
}
