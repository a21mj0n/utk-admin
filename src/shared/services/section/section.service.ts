import { BaseService } from "../base"
import { ISection, ISectionCreateDto, ISectionUpdateDto } from "./section.types"

class SectionService extends BaseService {
	constructor() {
		super()
		this.modelName = "section"
	}

	async getSection(id: number): Promise<ISection> {
		const section = await this.fetchOne<ISection>(id)

		return section.data
	}

	async getSectionList(): Promise<ISection[]> {
		const sectionList = await this.fetchAll<ISection>()

		return sectionList.data
	}

	async createSection(createSectionDto: ISectionCreateDto) {
		const response = await this.create(createSectionDto)
		console.log(response)
		return "Section successfully created!"
	}

	async updateSection(id: number, updateSectionDto: ISectionUpdateDto) {
		const response = await this.update(id, updateSectionDto)
		console.log(response)
		return "Section successfully updated!"
	}

	async deleteSection(id: number) {
		await this.delete(id)
		return "Section successfully deleted!"
	}
}

export default new SectionService()
