export const MASK_TOKENS = {
	F: { pattern: /[A-Z]/, transform: (chr: string) => chr.toUpperCase() },
	N: { pattern: /[А-Яа-яA-Za-z'`‘]/, multiple: true },
	D: { pattern: /[A-Za-z]/, multiple: true, transform: (chr: string) => chr.toUpperCase() },
	Z: { pattern: /[0-9]/, multiple: true }
}

export const PHONE_MASK = "+998 (##) ###-##-##"
export const PHONE_MASK_SHORT = "!+998 (##) ### ## ##"
export const PASSPORT_MASK = "FF#######"
export const PASSPORT_MASK_SPACED = "FF #######"
export const PINFL_MASK = "# ###### ### ### #"
export const CARD_MASK = "#### #### #### ####"
export const CARD_HIDDEN_MASK = "#### !*!*!*!* !*!*!*!* ####"
export const CARD_EXPIRATION_MASK = "##/##"
export const DATE_MASK = "##.##.####"
export const ONLY_CHARACTERS_MASK = "N"
export const ONLY_NUMBERS_MASK = "Z"
export const FULL_NAME_MASK = "N N N N"
export const PATRONYMIC_MASK = "N N"
export const CONTRACT_ID_MASK = "Z D"
export const INN_MASK = "#########"

type MASK_PATTERN_MAP_TYPE = {
	[key: string]: string
}

export const MASK_PATTERN_MAP: MASK_PATTERN_MAP_TYPE = {
	passport: PASSPORT_MASK,
	card: CARD_MASK,
	pinfl: PINFL_MASK,
	phone: PHONE_MASK,
	"card-hidden": CARD_HIDDEN_MASK,
	"card-expire": CARD_EXPIRATION_MASK,
	"passport-spaced": PASSPORT_MASK_SPACED,
	"phone-short": PHONE_MASK_SHORT,
	"only-chars": ONLY_CHARACTERS_MASK,
	patronymic: PATRONYMIC_MASK,
	"only-numbers": ONLY_NUMBERS_MASK,
	"full-name": FULL_NAME_MASK,
	"contract-id": CONTRACT_ID_MASK
}
