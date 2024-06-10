import { join } from "path"
import fs from "fs"
import { normalizeCrudName, servicesPublicApiTemplate, servicesTemplate, servicesTypeTemplate } from "../utils/functions/index.js"

export const makeServices = crudName => {
	const servicesFolder = join("src", "shared", "services")
	const { kebabCasedCrudName, pascalCasedCrudName } = normalizeCrudName(crudName)

	fs.mkdir(join(servicesFolder, kebabCasedCrudName), err => {
		if (err) {
			console.log(err)
			return
		}

		const folderPath = `${servicesFolder}/${kebabCasedCrudName}`

		fs.writeFile(join(folderPath, `${kebabCasedCrudName}.service.ts`), servicesTemplate(crudName), err => {
			if (err) {
				console.log(err)
				return
			}

			console.log(`${pascalCasedCrudName} service created!`)
		})

		fs.writeFile(join(folderPath, `${kebabCasedCrudName}.types.ts`), servicesTypeTemplate(crudName), err => {
			if (err) {
				console.log(err)
				return
			}

			console.log(`${pascalCasedCrudName} services type created!`)
		})

		fs.writeFile(join(folderPath, "index.ts"), servicesPublicApiTemplate(crudName), err => {
			if (err) {
				console.log(err)
				return
			}

			console.log(`${pascalCasedCrudName} public api created!`)
		})
	})
}
