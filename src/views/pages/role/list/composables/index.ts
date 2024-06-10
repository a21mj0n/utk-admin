import { useI18n } from "vue-i18n"
import { DataTableColumns } from "naive-ui"
import { IRole } from "#services/role"
import { h } from "vue"
import { RouterLink } from "vue-router"
import { RoleRoutesEnum } from "#routes/types"

export const useTableColumns = () => {
	const { t, locale } = useI18n()

	const columns: DataTableColumns<IRole> = [
		{
			title: "ID",
			key: "id"
		},
		{
			title: () => t("common.title"),
			key: "name",
			render: role =>
				h(
					RouterLink,
					{
						to: {
							name: RoleRoutesEnum.edit,
							params: {
								id: role.id
							}
						}
					},
					{
						default: () => role.name[locale.value]
					}
				)
		}
	]

	return {
		columns
	}
}
