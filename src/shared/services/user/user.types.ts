import { IPermission } from "../permission"
import { IRole } from "../role"

export interface IUser {
	id: number
	surname: string
	name: string
	patronymic: string
	abbreviated: string
	phone: string
	email: string
	status: string
	created_at: string
	role: IRole
	permissions: IPermission[]
}

export interface IUserCreateDto {
	surname: string
	name: string
	patronymic: string
	phone: string
	email: string
	login: string
	password: string
	role_id: number | string | null
	department_id: number | null
}

export type TUserUpdateDto = Partial<IUserCreateDto>

export interface IMe extends IUser {}
