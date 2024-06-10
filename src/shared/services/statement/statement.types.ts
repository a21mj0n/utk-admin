import { IClient } from "../client"
import { IForwarder } from "../forwarder"

export interface IStatement {
	id: number
}

export interface IStatementCreateDto {
	type: StatementTypeEnum
	number: string
	sender_id: IClient["id"]
	send_station_id: number
	receiver_id: IClient["id"]
	receive_station_id: number
	contract_date: string // YYYY-MM-DD
	arrival_date: string // YYYY-MM-DD
	forwarders: Omit<IForwarder, "name">[]
	containers: [
		{
			type: string
			weight: number
			goods: [
				{
					hs_code: number
					gng: number
					tnved: number
					name: string
					description: string
					package_type_id: number
					quantity: number
					netto: number
					brutto: number
					total: number
				}
			]
			fillings: [
				{
					code: string
					quantity: number
				}
			]
		}
	]
}

export interface IStatementUpdateDto extends Partial<IStatementCreateDto> {}

export enum StatementTypeEnum {
	import = 1,
	export = 2,
	transit = 3
}
