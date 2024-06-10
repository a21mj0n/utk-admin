import { Directive } from "vue"
import { MaskInput } from "maska"
import { PHONE_MASK } from "#shared/utils/constants"

export const vPhoneMask: Directive = {
	mounted(el) {
		const targetElement = el.querySelector("input")

		targetElement.maskInstance = new MaskInput(targetElement, {
			mask: PHONE_MASK,
			eager: true
		})
	},
	beforeUnmount(el) {
		const targetElement = el.querySelector("input")
		targetElement.maskInstance.destroy()
	}
}
