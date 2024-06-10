import { join } from "path"
import fs from "fs"
import { routesEnumTemplate, routesTemplate, toKebabCase } from "../utils/functions/index.js"

export const makeRoutes = crudName => {
	const routesFolder = join("src", "app", "routes")
	const kebabCasedCrudName = toKebabCase(crudName)

	fs.writeFile(join(routesFolder, `${kebabCasedCrudName}.routes.ts`), routesTemplate(crudName), () => {
		console.log(`${kebabCasedCrudName} routes created!`)
	})

	fs.writeFile(join(routesFolder, "types", `${kebabCasedCrudName}-routes.enum.ts`), routesEnumTemplate(crudName), () => {
		console.log(`${kebabCasedCrudName} enums created!`)
	})

	fs.appendFile(join(routesFolder, "types", "index.ts"), `export * from "./${kebabCasedCrudName}-routes.enum"\n`, () => {
		console.log(`${kebabCasedCrudName} types public api updated!`)
	})

	fs.appendFile(join(routesFolder, "index.ts"), `export * from "./${kebabCasedCrudName}.routes"\n`, err => {
		if (err) {
			console.log(err)
			return
		}

		console.log(`appended ${kebabCasedCrudName} crud to public api!`)
	})
}
