import { BaseService } from "../base"
import { IClient, IClientCreateDto, IClientUpdateDto } from "./client.types"
import { phoneFormatter } from "../../utils/functions"

class ClientService extends BaseService {
	constructor() {
		super()
		this.modelName = "client"
	}

	async fetchClient(id: number): Promise<IClient> {
		const client = await this.fetchOne<IClient>(id)

		return client.data
	}

	async fetchClientFormatted(id: number): Promise<IClient> {
		const result = await this.fetchClient(id)

		return {
			...result,
			phone: phoneFormatter(result.phone) as string,
			tax_id: String(result.tax_id)
		}
	}

	async fetchClientList(): Promise<IClient[]> {
		const clientList = await this.fetchAll<IClient>()

		return clientList.data
	}

	async createClient(createClientDto: IClientCreateDto) {
		const response = await this.create(createClientDto)
		console.log(response)
		return "Client successfully created!"
	}

	async updateClient(id: number, updateClientDto: IClientUpdateDto) {
		const response = await this.update(id, updateClientDto)
		console.log(response)
		return "Client successfully updated!"
	}

	async deleteClient(id: number) {
		await this.delete(id)
		return "Client successfully deleted!"
	}
}

export default new ClientService()
