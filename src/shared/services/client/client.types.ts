export interface IClient {
	id: number
	name: string
	registration_number: string
	tax_id: null | string
	address: string
	email: string
	phone: string
}

export interface IClientCreateDto {
	name: string
	registration_number: string
	tax_id: null | string
	address: string
	email: string
	phone: string
}

export interface IClientUpdateDto extends Partial<IClientCreateDto> {}
