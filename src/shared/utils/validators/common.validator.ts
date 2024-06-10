import { i18n } from "@/app/plugins"
import type { FormItemRule } from "naive-ui"
import { clearEmptySpaces, clearPhoneSymbols } from "#shared/utils/functions"

export const validateRequired = (rule: FormItemRule, value: string) => {
	if (!value.length) {
		return Error(i18n.global.t("validation.required"))
	}
	return true
}

export const numberValidator = (rule: FormItemRule, value: number) => {
	if (value === null || value === undefined || clearEmptySpaces(value).length === 0) {
		return Error(i18n.global.t("validation.required"))
	}
	return true
}

export const accountValidator = (rule: FormItemRule, value: number) => {
	if (clearEmptySpaces(value).length === 0) {
		return Error(i18n.global.t("validation.required"))
	}
	if (clearEmptySpaces(value).length !== 20) {
		return Error(i18n.global.t("validation.requiredNumberLength", { length: 20 }))
	}
	return true
}

export const validateMinLength = (rule: FormItemRule, value: string) => {
	if (!value) {
		return Error(i18n.global.t("validation.required"))
	}

	const editedVal = value.replace(/ /g, "")

	if (rule.min && editedVal.length < rule.min) {
		return Error(i18n.global.t("validation.minLength", { length: rule.min }))
	}

	return true
}

export const validateMaxLength = (rule: FormItemRule, value: string) => {
	if (!value.length) {
		return Error(i18n.global.t("validation.required"))
	}
	return true
}

const isEmail = (email: string) =>
	String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)

export const validateEmail = (rule: FormItemRule, value: string) => {
	if (!value.length) {
		return Error(i18n.global.t("validation.required"))
	}

	if (isEmail(value)) {
		return true
	}

	return Error(i18n.global.t("validation.email"))
}

export const rulePhoneCheck = (rule: FormItemRule | any, value: string) => {
	const editedVal = value ? clearPhoneSymbols(value) : ""

	if (!editedVal.length) {
		return Error(i18n.global.t("validation.required"))
	}

	if (editedVal.length < rule.min) {
		return new Error(i18n.global.t("validation.checkPhone"))
	}
	return true
}

export const validatePassport = (rule: FormItemRule, value: string) => {
	const cleanedValue = value.replaceAll(" ", "")

	if (!cleanedValue.length) {
		return Error(i18n.global.t("validation.required"))
	}

	if (cleanedValue.length < 9) {
		return Error(i18n.global.t("validation.passport"))
	}

	return true
}

export const validatePinfl = (rule: FormItemRule, value: string) => {
	const cleanedValue = value.replaceAll(" ", "")

	if (!cleanedValue.length) {
		return new Error("Обязательное поле")
	}

	if (cleanedValue.length === 14) {
		return true
	}

	return new Error("Поле должно состоять из 14 цифр")
}

export const ruleCheckPhonePattern = (rule: FormItemRule, value: string) => {
	const NUMBER_LENGTH = 12
	const clearedPhoneNumber = value && value?.replace(/[+ ]/g, "")

	if (clearedPhoneNumber?.length === NUMBER_LENGTH || !value?.length) {
		return true
	}

	if (clearedPhoneNumber.length <= NUMBER_LENGTH) {
		return new Error(i18n.global.t("validation.invalidPhoneFormat"))
	}
	return true
}

export const decimalValidator = (rule: FormItemRule, value: string) => {
	const minPrice: number = 1000
	const digitsLength: number = 2

	if (!value) {
		return new Error(i18n.global.t("validation.required"))
	}

	if (value <= minPrice) {
		return new Error(i18n.global.t("validation.minPrice", { amount: minPrice }))
	}

	if (!value.includes(Number(value))) {
		return new Error(i18n.global.t("validation.amountString"))
	}

	if (value.includes(".")) {
		const digits: string = value.split(".")[1]

		if (digits.length < digitsLength) {
			return new Error(i18n.global.t("validation.minDigits", { count: digitsLength }))
		}

		if (digits.length > digitsLength) {
			return new Error(i18n.global.t("validation.maxDigits", { count: digitsLength }))
		}
	}
}
