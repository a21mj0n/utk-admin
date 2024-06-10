import { Directive } from "vue"
import { MaskInput } from "maska"
import { INN_MASK, PASSPORT_MASK } from "#shared/utils/constants"

export const vPassportMask: Directive = {
	mounted(el) {
		const passportMaskOptions = {
			mask: PASSPORT_MASK,
			eager: true,
			tokens: { F: { pattern: /[A-Z]/, transform: (chr: string) => chr.toUpperCase() } }
		}
		const targetElement = el.querySelector("input")

		targetElement.maskInstance = new MaskInput(targetElement, passportMaskOptions)
	},
	beforeUnmount(el) {
		const targetElement = el.querySelector("input")
		targetElement.maskInstance.destroy()
	}
}

export const vInnMask: Directive = {
	mounted(el) {
		const innMaskOptions = {
			mask: INN_MASK,
			eager: true
		}
		const targetElement = el.querySelector("input")

		targetElement.maskInstance = new MaskInput(targetElement, innMaskOptions)
	},
	beforeUnmount(el) {
		const targetElement = el.querySelector("input")
		targetElement.maskInstance.destroy()
	}
}
