import { ConfigBase, presetMini } from "unocss"
import fontPreset from "./font.preset"
import { BREAKPOINTS } from "../../../shared/utils/constants/ui"

const normalizedBreakpoints = {}

Object.entries(BREAKPOINTS).forEach(([name, value]) =>
	Object.assign(normalizedBreakpoints, {
		[name]: `${value}px`
	})
)

export const unoCssConfig: ConfigBase = {
	presets: [presetMini(), fontPreset()],
	theme: {
		breakpoints: normalizedBreakpoints
	}
}
