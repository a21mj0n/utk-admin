import { GlobalThemeOverrides } from "naive-ui"
import { commonOverrides } from "./common-overrides"

export const lightThemeOverrides: GlobalThemeOverrides = {
	...commonOverrides,
	common: {
		borderRadius: "1.2rem",
		primaryColor: "#2563EB",
		primaryColorHover: "rgba(37, 99, 235, 0.9)",
		primaryColorSuppl: "#2563EB",
		primaryColorPressed: "#2563EB"
	},
	Layout: {
		color: "var(--grey-50)"
	}
}
