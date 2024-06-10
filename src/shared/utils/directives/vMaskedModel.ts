import { Directive } from "vue"
import { MASK_PATTERN_MAP, MASK_TOKENS } from "#shared/utils/constants"
import { Mask, MaskInput } from "maska"
import { clearEmptySpaces } from "#shared/utils/functions"

export const generateMaskOptions = (arg: string) => {
	const argMask = MASK_PATTERN_MAP[arg]
	return {
		mask: argMask,
		eager: true,
		tokens: MASK_TOKENS
	}
}

const handlePasteInput = (e: ClipboardEvent, el: HTMLInputElement) => {
	const clipboardText = e.clipboardData?.getData("text")
	const clipboardData = clearEmptySpaces(String(clipboardText))
	if (clipboardData?.length === 9) el.value = `998${clipboardData}`
}

export const vMaskedModel: Directive = {
	created(el) {
		const target = el.querySelector("input")

		target.addEventListener("paste", (e: ClipboardEvent) => handlePasteInput(e, target))
	},

	updated(el, binding) {
		const target = el.querySelector("input")
		const maska = new Mask(generateMaskOptions(binding.arg!))

		binding.value.unmasked = maska.unmasked(target.value)
		binding.value.masked = maska.masked(target.value)
	},

	mounted(el, binding) {
		const target = el.querySelector("input")
		target.maskInstance = new MaskInput(target, generateMaskOptions(binding.arg!))
	},

	beforeUnmount(el) {
		const target = el.querySelector("input")
		target.maskInstance.destroy()

		target.removeEventListener("paste", () => {})
	}
}
