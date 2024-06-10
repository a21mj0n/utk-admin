import { GlobalThemeOverrides } from "naive-ui"

export const commonOverrides: GlobalThemeOverrides = {
	LoadingBar: {
		height: "3px"
	},
	Card: {
		borderRadius: "2rem"
	},
	Alert: {
		titleTextColorError: "var(--text-white)",
		contentTextColorError: "var(--text-white)",
		colorError: "var(--danger-500)",
		closeIconColorError: "var(--text-white)",
		closeIconColorHoverError: "var(--text-white)",
		closeColorHoverError: false,

		titleTextColorSuccess: "var(--text-white)",
		contentTextColorSuccess: "var(--text-white)",
		colorSuccess: "var(--success-500)",
		closeIconColorSuccess: "var(--text-white)",
		closeIconColorHoverSuccess: "var(--text-white)",
		closeColorHoverSuccess: false,

		titleTextColorInfo: "var(--text-white)",
		contentTextColorInfo: "var(--text-white)",
		colorInfo: "var(--brand-lightblue-600)",
		closeIconColorInfo: "var(--text-white)",
		closeIconColorHoverInfo: "var(--text-white)",
		closeColorHoverInfo: false,

		titleTextColorWarning: "var(--text-white)",
		contentTextColorWarning: "var(--text-white)",
		colorWarning: "var(--warning-500)",
		closeIconColorWarning: "var(--text-white)",
		closeIconColorHoverWarning: "var(--text-white)",
		closeColorHoverWarning: false,

		borderRadius: ".8rem"
	}
}
