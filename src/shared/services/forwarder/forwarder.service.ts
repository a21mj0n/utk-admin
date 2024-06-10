import { BaseService } from "../base"
import { IForwarder } from "./forwarder.types"
import { IResponse } from "../../types"
import { SelectOption } from "naive-ui"

class ForwarderService extends BaseService {
	async fetchForwarderList(): Promise<IForwarder[]> {
		const { data: response } = await this.$axios.get<IResponse<IForwarder[]>>("/list/forwarders")

		return response.data
	}

	async fetchForwarderListForSelect(): Promise<SelectOption> {
		const result = await this.fetchForwarderList()

		return result.map(forwarder => ({
			label: forwarder.name,
			value: String(forwarder.code)
		}))
	}
}

export default new ForwarderService()
