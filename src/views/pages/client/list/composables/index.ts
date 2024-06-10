import { h } from "vue"
import { useI18n } from "vue-i18n"
import { RouterLink } from "vue-router"
import { DataTableColumns } from "naive-ui"
import { IClient } from "#services/client"
import { ClientRoutesEnum } from "#routes/types"
import { phoneFormatter } from "#shared/utils/functions"

export const useTableColumns = () => {
	const { t } = useI18n()

	const columns: DataTableColumns<IClient> = [
		{
			title: "ID",
			key: "id"
		},
		{
			title: () => t("common.name"),
			key: "name",
			render: client =>
				h(
					RouterLink,
					{
						to: {
							name: ClientRoutesEnum.edit,
							params: {
								id: client.id
							}
						}
					},
					{
						default: () => client.name
					}
				)
		},
		{
			title: () => t("common.phone"),
			key: "phone",
			render: client => phoneFormatter(client.phone)
		},
		{
			title: () => t("common.email"),
			key: "email"
		},
		{
			title: () => t("common.address"),
			key: "address"
		},
		{
			title: () => t("client.registrationNumber"),
			key: "registration_number"
		}
	]

	return {
		columns
	}
}
