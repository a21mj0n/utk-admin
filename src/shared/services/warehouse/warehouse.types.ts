import { IBlock } from "../block"
import { ILogisticCenter } from "../logistic-center"

export interface IWarehouse {
	id: number
	name: string
	is_open: boolean
	center: string
	blocks: IBlock[]
}

export interface IWarehouseCreateDto {
	name: string
	is_open: boolean
	center_id: ILogisticCenter["id"]
}

export interface IWarehouseUpdateDto extends Partial<IWarehouseCreateDto> {}
