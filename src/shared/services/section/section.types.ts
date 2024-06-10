export interface ISection {
	id: number
}

export interface ISectionCreateDto {}

export interface ISectionUpdateDto extends Partial<ISectionCreateDto> {}
