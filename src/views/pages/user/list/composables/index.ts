import { DataTableColumns } from "naive-ui"
import { IUser } from "#services/user"
import { useI18n } from "vue-i18n"
import { phoneFormatter } from "#shared/utils/functions"
import { h } from "vue"
import { RouterLink } from "vue-router"
import { UserRoutesEnum } from "#routes/types"

export const useTableColumns = () => {
	const { t } = useI18n()

	const columns: DataTableColumns<IUser> = [
		{
			title: "ID",
			key: "id"
		},
		{
			title: () => t("common.fio"),
			key: "fio",
			render: user =>
				h(
					RouterLink,
					{
						to: {
							name: UserRoutesEnum.edit,
							params: {
								id: user.id
							}
						}
					},
					{
						default: () => `${user.name} ${user.surname} ${user.patronymic}`
					}
				)
		},
		{
			title: () => t("common.phone"),
			key: "phone",
			render: user => phoneFormatter(user.phone)
		},
		{
			title: () => t("common.email"),
			key: "email"
		}
	]

	return {
		columns
	}
}
