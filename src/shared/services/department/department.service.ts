import { BaseService } from "../base"
import { IDepartment, IDepartmentCreateDto, IDepartmentUpdateDto } from "./department.types"
import { SelectOption } from "naive-ui"

class DepartmentService extends BaseService {
	constructor() {
		super()
		this.modelName = "department"
	}

	async getDepartment(id: number): Promise<IDepartment> {
		const department = await this.fetchOne<IDepartment>(id)

		return department.data
	}

	async getDepartmentList(): Promise<IDepartment[]> {
		const departmentList = await this.fetchAll<IDepartment>()

		return departmentList.data
	}

	async createDepartment(createRoleDto: IDepartmentCreateDto) {
		const response = await this.create(createRoleDto)
		console.log(response)
		return "Department successfully created!"
	}

	async updateDepartment(id: number, updateRoleDto: IDepartmentUpdateDto) {
		const response = await this.update(id, updateRoleDto)
		console.log(response)
		return "Department successfully updated!"
	}

	async deleteDepartment(id: number) {
		await this.delete(id)
		return "Department successfully deleted!"
	}

	async getDepartmentListForSelect(): Promise<SelectOption[]> {
		const result = await this.getDepartmentList()

		return result.map(department => ({
			label: department.name,
			value: String(department.id)
		}))
	}
}

export default new DepartmentService()
