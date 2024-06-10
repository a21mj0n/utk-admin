import { IPermission } from "../permission"
import { IDepartment } from "../department"

export interface IRole {
	id: number
	name: {
		ru: string
		uz: string
	}
	permissions: IPermission[]
}

export interface IRoleCreateDto {
	name: {
		uz: string
		ru: string
	}
	description: {
		uz: string
		ru: string
	}
	permissions: IPermission["id"][]
	departments: IDepartment["id"][]
}

export interface IRoleUpdateDto extends Partial<IRoleCreateDto> {}
