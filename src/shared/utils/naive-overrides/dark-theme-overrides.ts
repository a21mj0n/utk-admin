import { GlobalThemeOverrides } from "naive-ui"
import { commonOverrides } from "./common-overrides"

export const darkThemeOverrides: GlobalThemeOverrides = {
	...commonOverrides,
	common: {
		borderRadius: "1.2rem",
		primaryColor: "#3B82F6",
		primaryColorHover: "rgba(59, 130, 246, 0.9)",
		primaryColorPressed: "#3B82F6",
		primaryColorSuppl: "#3B82F6"
	}
}
