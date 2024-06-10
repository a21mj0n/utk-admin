import type { MessageProviderProps } from "naive-ui"
import { createDiscreteApi } from "naive-ui"
import { useDark } from "@vueuse/core"
import { darkThemeOverrides, lightThemeOverrides } from "@/shared/utils/naive-overrides"

const messageProviderProps: MessageProviderProps = {
	placement: "top-right",
	duration: 6000
}

export const useDiscreteApi = () => {
	const isDark = useDark()

	const { message, loadingBar } = createDiscreteApi(["message", "loadingBar"], {
		messageProviderProps: messageProviderProps,
		configProviderProps: { themeOverrides: isDark.value ? darkThemeOverrides : lightThemeOverrides }
	})

	return {
		message,
		loadingBar
	}
}
