import { normalizeCrudName } from "./index.js"

export const servicesTypeTemplate = crudName => {
	const { pascalCasedCrudName } = normalizeCrudName(crudName)

	return `export interface I${pascalCasedCrudName} {
\tid: number
}

export interface I${pascalCasedCrudName}CreateDto {}

export interface I${pascalCasedCrudName}UpdateDto extends Partial<I${pascalCasedCrudName}CreateDto> {}
`
}

export const servicesPublicApiTemplate = crudName => {
	const { kebabCasedCrudName, pascalCasedCrudName } = normalizeCrudName(crudName)

	return `export { default as ${pascalCasedCrudName}Service } from "./${kebabCasedCrudName}.service"
export * from "./${kebabCasedCrudName}.types"
`
}
