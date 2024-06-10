import { Directive } from "vue"
import { MaskInput } from "maska"
import { DATE_MASK } from "#shared/utils/constants"

export const vDateMask: Directive = {
	mounted(el) {
		const dateMaskOptions = {
			mask: DATE_MASK
		}
		const targetElement = el.querySelector("input")

		targetElement.maskInstance = new MaskInput(targetElement, dateMaskOptions)
	},
	beforeUnmount(el) {
		const targetElement = el.querySelector("input")
		targetElement.maskInstance.destroy()
	}
}
