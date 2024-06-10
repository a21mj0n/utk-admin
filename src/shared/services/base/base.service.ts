import { axiosInstance, i18n } from "@/app/plugins"
import { IResponse } from "../../types"

export class BaseService {
	protected apiVersion: number = 1
	protected modelName: string = ""

	get $axios() {
		return axiosInstance
	}

	get $i18n() {
		return i18n
	}

	protected get transformApiVersion(): string {
		return `[v${this.apiVersion}]`
	}

	async fetchOne<Entity>(id: number): Promise<IResponse<Entity>> {
		const response = await this.$axios.get<IResponse<Entity>>(`/${this.transformApiVersion}/${this.modelName}/${id}`)
		return response.data
	}

	async fetchAll<Entity>(): Promise<IResponse<Entity[]>> {
		const response = await this.$axios.get<IResponse<Entity[]>>(`/${this.transformApiVersion}/${this.modelName}`)
		return response.data
	}

	async create<Body>(body: Body) {
		const response = await this.$axios.post(`/${this.transformApiVersion}/${this.modelName}/add`, body)
		return response.data
	}

	async update<Body>(id: number, body: Body) {
		return await this.$axios.post(`/${this.transformApiVersion}/${this.modelName}/update/${id}`, body)
	}

	async delete(id: number) {
		return await this.$axios.delete(`/${this.transformApiVersion}/${this.modelName}/${id}`)
	}
}
