import { BaseService } from "../base"
import { IWarehouse, IWarehouseCreateDto, IWarehouseUpdateDto } from "./warehouse.types"

class WarehouseService extends BaseService {
	constructor() {
		super()
		this.modelName = "warehouse"
	}

	async getWarehouse(id: number): Promise<IWarehouse> {
		const warehouse = await this.fetchOne<IWarehouse>(id)

		return warehouse.data
	}

	async getWarehouseList(): Promise<IWarehouse[]> {
		const warehouseList = await this.fetchAll<IWarehouse>()

		return warehouseList.data
	}

	async createWarehouse(createWarehouseDto: IWarehouseCreateDto) {
		const response = await this.create(createWarehouseDto)
		console.log(response)
		return "Warehouse successfully created!"
	}

	async updateWarehouse(id: number, updateWarehouseDto: IWarehouseUpdateDto) {
		const response = await this.update(id, updateWarehouseDto)
		console.log(response)
		return "Warehouse successfully updated!"
	}

	async deleteWarehouse(id: number) {
		await this.delete(id)
		return "Warehouse successfully deleted!"
	}
}

export default new WarehouseService()
