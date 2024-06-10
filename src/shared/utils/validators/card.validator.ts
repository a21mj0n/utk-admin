import { i18n } from "@/app/plugins"
import type { FormItemRule } from "naive-ui"

export function validateCardExp(rule: FormItemRule, value: string) {
	if (!value.length) {
		return Error(i18n.global.t("validation.required"))
	}

	const cardExp: string[] = value.split("/")
	const currentYear: number = Number(new Date().getFullYear().toString().slice(-2))
	const currentYearPlusFive: number = currentYear + 5

	if (Number(cardExp[0]) <= 12 && Number(cardExp[1]) >= currentYear && Number(cardExp[1]) <= Number(currentYearPlusFive)) {
		return true
	}

	return Error(i18n.global.t("validation.invalidExp"))
}
