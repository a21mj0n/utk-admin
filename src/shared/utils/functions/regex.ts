export const clearPhoneSymbols = (value: string): string => {
	if (!value) {
		return ""
	}
	return value.replace(/[+, ,(),-]/g, "")
}

export const clearEmptySpaces = (value: string | number): string => {
	if (!value && value !== 0) {
		return ""
	}
	return String(value).replace(/\s/g, "")
}

export const separateUrl = (oldUrl: string) => {
	const pattern = /\[(.*?)\]/g
	const match = oldUrl.match(pattern)
	const url = oldUrl.replace(pattern, "")
	const version = match ? match[0].replace(/\[|\]/g, "") : null

	return { url: url.replace("/", ""), version }
}
