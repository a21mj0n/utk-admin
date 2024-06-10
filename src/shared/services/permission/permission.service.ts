import { SelectOption } from "naive-ui"
import { BaseService } from "../base"
import { IPermission } from "./permission.types"
import { IResponse } from "../../types"

class PermissionService extends BaseService {
	constructor() {
		super()
		this.modelName = "permissions"
	}

	async fetchPermissionList(): Promise<IPermission[]> {
		const { data: response } = await this.$axios.get<IResponse<IPermission[]>>("/list/permissions")

		return response.data
	}

	async fetchPermissionListForSelect(): Promise<SelectOption[]> {
		const result = await this.fetchPermissionList()

		return result.map(permission => ({
			label: permission.display_name[this.$i18n.global.locale.value],
			value: String(permission.id)
		}))
	}
}

export default new PermissionService()
