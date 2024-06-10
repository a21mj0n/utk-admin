import { reactive } from "vue"
import { IMaskOptions } from "../utils/types/common"

export default function useMaskOptions() {
	const passportMaskOptions = reactive<IMaskOptions>({
		mask: "FF#######",
		eager: true,
		tokens: { F: { pattern: /[A-Z]/, transform: (chr: string) => chr.toUpperCase() } }
	})

	return {
		passportMaskOptions
	}
}
