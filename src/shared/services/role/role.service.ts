import { BaseService } from "../base"
import { IRole, IRoleCreateDto, IRoleUpdateDto } from "./role.types"
import { SelectOption } from "naive-ui"

class RoleService extends BaseService {
	constructor() {
		super()
		this.modelName = "role"
	}

	async getRole(id: number): Promise<IRole> {
		const role = await this.fetchOne<IRole>(id)

		return role.data
	}

	async getRoleList(): Promise<IRole[]> {
		const roleList = await this.fetchAll<IRole>()

		return roleList.data
	}

	async createRole(createRoleDto: IRoleCreateDto) {
		const response = await this.create(createRoleDto)
		console.log(response)
		return "Role successfully created!"
	}

	async updateRole(id: number, updateRoleDto: IRoleUpdateDto) {
		const response = await this.update(id, updateRoleDto)
		console.log(response)
		return "Role successfully updated!"
	}

	async deleteRole(id: number) {
		await this.delete(id)
		return "Role successfully deleted!"
	}

	async getRoleListForSelect(): Promise<SelectOption[]> {
		const result = await this.getRoleList()

		return result.map(role => ({
			label: role.name[this.$i18n.global.locale.value],
			value: String(role.id)
		}))
	}
}

export default new RoleService()
