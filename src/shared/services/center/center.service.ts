import { SelectOption } from "naive-ui"
import { BaseService } from "../base"
import { ICenter, ICenterCreateDto, ICenterUpdateDto } from "./center.types"
import { IResponse } from "../../types"

class CenterService extends BaseService {
	constructor() {
		super()
		this.modelName = "center"
	}

	async getCenter(id: number): Promise<ICenter> {
		const center = await this.fetchOne<ICenter>(id)

		return center.data
	}

	async getCenterList(): Promise<ICenter[]> {
		const { data: centerList } = await this.$axios.get<IResponse<ICenter[]>>("/list/centers")

		return centerList.data
	}

	async createCenter(createCenterDto: ICenterCreateDto) {
		const response = await this.create(createCenterDto)
		console.log(response)
		return "Center successfully created!"
	}

	async updateCenter(id: number, updateCenterDto: ICenterUpdateDto) {
		const response = await this.update(id, updateCenterDto)
		console.log(response)
		return "Center successfully updated!"
	}

	async deleteCenter(id: number) {
		await this.delete(id)
		return "Center successfully deleted!"
	}

	async getCenterListForSelect(): Promise<SelectOption[]> {
		const result = await this.getCenterList()

		return result.map(center => ({
			label: center.name[this.$i18n.global.locale.value],
			value: String(center.id)
		}))
	}
}

export default new CenterService()
