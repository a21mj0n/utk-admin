import { ICenter } from "../center"

export interface IDepartment {
	id: number
	name: string
	is_office: boolean
	center: ICenter
}

export interface IDepartmentCreateDto {
	name: string
	is_office: boolean
	center_id: number | null | string
}

export interface IDepartmentUpdateDto extends Partial<IDepartmentCreateDto> {}
