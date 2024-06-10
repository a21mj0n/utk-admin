import { h } from "vue"
import { useI18n } from "vue-i18n"
import { DataTableColumns, NSwitch } from "naive-ui"
import { IDepartment } from "#services/department"
import { RouterLink } from "vue-router"
import { DepartmentRoutesEnum } from "#routes/types"

export const useTableColumns = () => {
	const { t, locale } = useI18n()

	const columns: DataTableColumns<IDepartment> = [
		{
			title: () => t("common.title"),
			key: "name",
			render: rowData =>
				h(
					RouterLink,
					{
						to: {
							name: DepartmentRoutesEnum.edit,
							params: {
								id: rowData.id
							}
						}
					},
					{
						default: () => rowData.name
					}
				)
		},
		{
			title: () => t("center.title"),
			key: "center",
			render: department => department.center.name[locale.value]
		},
		{
			title: () => t("department.is_office"),
			key: "is_office",
			render(rowData) {
				return h(NSwitch, { round: false, value: rowData.is_office, disabled: true })
			}
		}
	]

	return {
		columns
	}
}
