export interface ICenter {
	id: number
	name: {
		ru: string
		uz: string
	}
}

export interface ICenterCreateDto {}

export interface ICenterUpdateDto extends Partial<ICenterCreateDto> {}
