import { ICity } from "./city.types"
import { BaseService } from "#services/base"
import { IResponse } from "#shared/types"

class CityService extends BaseService {
	constructor() {
		super()
	}

	async getCity(id: number): Promise<ICity> {
		const { data: response } = await this.$axios.get<IResponse<ICity>>(`/city/${id}`)

		return response.data
	}

	async getCityList(): Promise<ICity[]> {
		const { data: response } = await this.$axios.get<IResponse<ICity[]>>("/city")
		return response.data
	}
}

export default new CityService()
