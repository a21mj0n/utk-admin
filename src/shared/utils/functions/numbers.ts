export const currencyFormat = (number: number | string, fraction: number = 0) => {
	if (!number) {
		return "0.00"
	}
	if (typeof number === "string") {
		number = Number(number)
	}

	return Intl.NumberFormat("en-EN", {
		minimumFractionDigits: fraction,
		maximumFractionDigits: fraction
	})
		.format(number)
		.replaceAll(",", " ")
}

export const phoneFormatter = (phoneNumber: string): string | undefined => {
	if (!phoneNumber) {
		return
	}

	if (phoneNumber.toString().length != 12) {
		return phoneNumber
	}
	const x = phoneNumber
		.toString()
		.replace(/\D/g, "")
		.match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/)
	if (!x) {
		return phoneNumber
	}
	return `+${x[1]} (${x[2]}) ${x[3]}-${x[4]}-${x[5]}`
}

export const convertNumberToSymbol = (str: string, matches: number[]) => {
	let count = 0
	return str.replace(/\d/g, (d: any) => (matches.includes(++count) ? "*" : d))
}

export const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value)

export const onlyAllowDecimal = (value: string) => !value || /^(\d+|\d{1,2})$/.test(value)
