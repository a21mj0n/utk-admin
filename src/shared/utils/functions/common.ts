import { type MessageRenderMessage, NAlert, NIcon } from "naive-ui"
import { Component, h } from "vue"
import { CircleCheckIcon, CircleXIcon } from "lucide-vue-next"
import { i18n } from "@/app/plugins"
import { MASK_PATTERN_MAP, MASK_TOKENS } from "#shared/utils/constants"
import { Mask } from "maska"

export const renderMessage: MessageRenderMessage = props => {
	const { t } = i18n.global

	return h(
		NAlert,
		{
			class: "n-message-alert",
			type: props.type === "success" ? "success" : "error",
			closable: true,
			bordered: false,
			onClose: props.onClose,
			title: props.type === "success" ? t("common.success") : t("common.error")
		},
		{
			default: () => props.content,
			icon: () =>
				props.type === "success"
					? h(CircleCheckIcon, { style: { color: "var(--text-white)" } })
					: h(CircleXIcon, { style: { color: "var(--text-white)" } })
		}
	)
}

export const noSideSpace = (value: string) => !/ /g.test(value)
export const noFrontSpace = (value: string) => !value || !!value.trimStart()

export const renderEmptyCell = (value: any) => {
	const { t } = i18n.global

	return (
		value ||
		h("div", {
			italic: true,
			style: { color: "var(--grey-300)" },
			innerHTML: t("common.noData")
		})
	)
}

export const renderIcon = (icon: Component) => () =>
	h(NIcon, null, {
		default: () => h(icon)
	})

export const snakeToCamelCase = (str: string | null): string | null => {
	if (str == null) {
		return str
	}
	return str.toLowerCase().replace(/([-_][a-z])/g, group => group.toUpperCase().replace("-", "").replace("_", ""))
}

export const clearMask = (value: string, pattern: string, prefix: string = "") => {
	const mask = MASK_PATTERN_MAP[pattern]

	if (!mask) {
		return value
	}

	const maskOptions = {
		mask,
		eager: true,
		tokens: MASK_TOKENS
	}

	const maskaObj = new Mask(maskOptions)
	const newValue = maskaObj.unmasked(value)

	return prefix + newValue
}

export const setMask = (value: string, pattern: string, prefix: string = "") => {
	const mask = MASK_PATTERN_MAP[pattern]

	if (!value) {
		return value
	}
	if (!mask) {
		return value
	}

	const maskOptions = {
		mask,
		eager: true,
		tokens: MASK_TOKENS
	}

	const maskaObj = new Mask(maskOptions)
	const newValue = maskaObj.masked(value)

	return prefix + newValue
}

export const replaceSpecialCharacters = (str: string) => str.replace(/[^a-zA-Z0-9]/g, "_")
