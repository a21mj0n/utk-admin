import { normalizeCrudName } from "./index.js"

export const servicesTemplate = crudName => {
	const { kebabCasedCrudName, pascalCasedCrudName } = normalizeCrudName(crudName)

	return `import { BaseService } from "../base"
import { I${pascalCasedCrudName}, I${pascalCasedCrudName}CreateDto, I${pascalCasedCrudName}UpdateDto } from "./${kebabCasedCrudName}.types"

class ${pascalCasedCrudName}Service extends BaseService {
\tconstructor() {
\t\tsuper()
\t\tthis.modelName = "${kebabCasedCrudName}"
\t}

\tasync fetch${pascalCasedCrudName}(id: number): Promise<I${pascalCasedCrudName}> {
\t\tconst ${kebabCasedCrudName} = await this.fetchOne<I${pascalCasedCrudName}>(id)

\t\treturn ${kebabCasedCrudName}.data
\t}

\tasync fetch${pascalCasedCrudName}List(): Promise<I${pascalCasedCrudName}[]> {
\t\tconst ${kebabCasedCrudName}List = await this.fetchAll<I${pascalCasedCrudName}>()

\t\treturn ${kebabCasedCrudName}List.data
\t}

\tasync create${pascalCasedCrudName}(create${pascalCasedCrudName}Dto: I${pascalCasedCrudName}CreateDto) {
\t\tconst response = await this.create(create${pascalCasedCrudName}Dto)
\t\tconsole.log(response)
\t\treturn "${pascalCasedCrudName} successfully created!"
\t}

\tasync update${pascalCasedCrudName}(id: number, update${pascalCasedCrudName}Dto: I${pascalCasedCrudName}UpdateDto) {
\t\tconst response = await this.update(id, update${pascalCasedCrudName}Dto)
\t\tconsole.log(response)
\t\treturn "${pascalCasedCrudName} successfully updated!"
\t}

\tasync delete${pascalCasedCrudName}(id: number) {
\t\tawait this.delete(id)
\t\treturn "${pascalCasedCrudName} successfully deleted!"
\t}
}

export default new ${pascalCasedCrudName}Service()
`
}
