import { join } from "path"
import fs from "fs"
import { normalizeCrudName, pagesTemplate, pageUseFileTemplate, toPascalCase } from "../utils/functions/index.js"
import { CRUD_TYPE } from "../utils/constants/index.js"

export const makePages = crudName => {
	const pagesFolder = join("src", "views", "pages")
	const { kebabCasedCrudName, pascalCasedCrudName } = normalizeCrudName(crudName)

	Object.values(CRUD_TYPE).forEach(type => {
		const folderPath = `${pagesFolder}/${crudName}/${type}`

		fs.mkdir(join(pagesFolder, kebabCasedCrudName, type, "ui"), { recursive: true }, err => {
			if (err) {
				console.log(err)
				return
			}

			fs.writeFile(
				join(folderPath, "ui", `${pascalCasedCrudName}${toPascalCase(type)}Page.vue`),
				pagesTemplate(crudName, type),
				err => {
					if (err) {
						console.log(err)
						return
					}

					console.log(`${kebabCasedCrudName} ${type} page created!`)
				}
			)

			fs.writeFile(join(folderPath, "ui", `usePage.ts`), pageUseFileTemplate(), err => {
				if (err) {
					console.log(err)
					return
				}

				console.log(`${kebabCasedCrudName} ${type} usePage file created!`)
			})
		})
	})
}
