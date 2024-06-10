import { normalizeCrudName } from "./index.js"

export const routesTemplate = crudName => {
	const { kebabCasedCrudName, pluralKebabCasedCrudName, pascalCasedCrudName } = normalizeCrudName(crudName)

	return `import { RouteRecordRaw } from "vue-router"
import { ${pascalCasedCrudName}RoutesEnum } from "./types"
import { AppLayoutsEnum } from "../../views/layouts/types"

export const ${crudName}Routes: RouteRecordRaw[] = [
\t{
\t\tpath: "/${pluralKebabCasedCrudName}",
\t\tname: ${pascalCasedCrudName}RoutesEnum.list,
\t\tmeta: {
\t\t\tlayout: AppLayoutsEnum.main,
\t\t\tpageTitle: ""
\t\t},
\t\tcomponent: () => import("#pages/${kebabCasedCrudName}/list/ui/${pascalCasedCrudName}ListPage.vue")
\t},
\t{
\t\tpath: "/${pluralKebabCasedCrudName}/create",
\t\tname: ${pascalCasedCrudName}RoutesEnum.create,
\t\tmeta: {
\t\t\tlayout: AppLayoutsEnum.main,
\t\t\tpageTitle: ""
\t\t},
\t\tcomponent: () => import("#pages/${kebabCasedCrudName}/create/ui/${pascalCasedCrudName}CreatePage.vue")
\t},
\t{
\t\tpath: "/${pluralKebabCasedCrudName}/edit/:id",
\t\tname: ${pascalCasedCrudName}RoutesEnum.edit,
\t\tmeta: {
\t\t\tlayout: AppLayoutsEnum.main,
\t\t\tpageTitle: ""
\t\t},
\t\tcomponent: () => import("#pages/${kebabCasedCrudName}/edit/ui/${pascalCasedCrudName}EditPage.vue")
\t}
]
`
}

export const routesEnumTemplate = crudName => {
	const { kebabCasedCrudName, pascalCasedCrudName } = normalizeCrudName(crudName)

	return `export enum ${pascalCasedCrudName}RoutesEnum {
\tlist = "${kebabCasedCrudName}.list",
\tcreate = "${kebabCasedCrudName}.create",
\tedit = "${kebabCasedCrudName}.edit"
}
`
}
