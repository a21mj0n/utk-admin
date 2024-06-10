import { BaseService } from "../base"
import { IStatement, IStatementCreateDto, IStatementUpdateDto } from "./statement.types"

class StatementService extends BaseService {
	constructor() {
		super()
		this.modelName = "statement"
	}

	async getStatement(id: number): Promise<IStatement> {
		const statement = await this.fetchOne<IStatement>(id)

		return statement.data
	}

	async getStatementList(): Promise<IStatement[]> {
		const statementList = await this.fetchAll<IStatement>()

		return statementList.data
	}

	async createStatement(createStatementDto: IStatementCreateDto) {
		const response = await this.create(createStatementDto)
		console.log(response)
		return "Statement successfully created!"
	}

	async updateStatement(id: number, updateStatementDto: IStatementUpdateDto) {
		const response = await this.update(id, updateStatementDto)
		console.log(response)
		return "Statement successfully updated!"
	}

	async deleteStatement(id: number) {
		await this.delete(id)
		return "Statement successfully deleted!"
	}
}

export default new StatementService()
