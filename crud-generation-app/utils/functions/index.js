const clearAndUpper = text => text.replace(/-/, "").toUpperCase()

export const toKebabCase = string =>
	string
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/[\s_]+/g, "-")
		.toLowerCase()

export const toPascalCase = text => text.replace(/(^\w|-\w)/g, clearAndUpper)

export const normalizeCrudName = crudName => {
	const kebabCasedCrudName = toKebabCase(crudName)
	const pascalCasedCrudName = toPascalCase(crudName)
	const pluralKebabCasedCrudName = `${kebabCasedCrudName}s`

	return {
		kebabCasedCrudName,
		pascalCasedCrudName,
		pluralKebabCasedCrudName
	}
}

export * from "./make-routes.template.js"
export * from "./make-pages.template.js"
export * from "./make-services.template.js"
export * from "./make-services-type.template.js"
