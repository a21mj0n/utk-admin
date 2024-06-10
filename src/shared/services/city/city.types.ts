export interface ICity {
	id: number
	name: string
	district: IDistrict[]
}

export interface IDistrict {
	id: number
	name: string
}
