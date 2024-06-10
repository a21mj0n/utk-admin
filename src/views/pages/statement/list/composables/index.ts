import { IStatement } from "#services/statement"
import { DataTableColumns } from "naive-ui"
import { useI18n } from "vue-i18n"

export const useTableColumns = () => {
	const { t } = useI18n()

	const columns: DataTableColumns<IStatement> = [
		{
			title: () => t("ID"),
			key: "id"
		}
	]

	return {
		columns
	}
}
