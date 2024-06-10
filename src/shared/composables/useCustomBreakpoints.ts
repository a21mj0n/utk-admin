import { Ref } from "vue/dist/vue"
import { useBreakpoints } from "@vueuse/core"
import { BREAKPOINTS } from "../utils/constants"

export const useCustomBreakpoints = (): {
	readonly isMobile: Ref<boolean>
	readonly isTablet: Ref<boolean>
	readonly isLaptop: Ref<boolean>
	readonly isDesktop: Ref<boolean>
} => {
	const breakpoints = useBreakpoints(BREAKPOINTS)

	const isMobile = breakpoints.smaller("s")
	const isTablet = breakpoints.between("s", "l")
	const isLaptop = breakpoints.between("l", "xxl")
	const isDesktop = breakpoints.greater("xl")

	return {
		isMobile,
		isTablet,
		isLaptop,
		isDesktop
	}
}
