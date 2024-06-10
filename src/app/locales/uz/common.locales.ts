import loginLocales from "./auth/login.locales"
import validationLocales from "./validation.locales"
import userLocales from "./user.locales"
import roleLocales from "./role.locales"
import departmentLocales from "./department.locales"
import centerLocales from "./center.locales"
import permissionLocales from "./permission.locales"
import clientLocales from "./client.locales"
import statementLocales from "./statement.locales"

export default {
	common: {
		noData: "Ma'lumot yo'q",
		loading: "Загрузка...",
		printError: "Не удалось начать печать документа!",
		id: "ID",
		address: "Адрес",
		legalAddress: "Юридический адрес",
		inn: "STIR",
		paymentAccountShort: "Р/С",
		manager: "Менеджер",
		name: "Ism",
		surname: "Familiya",
		patronymic: "Sharifi",
		companyName: "Название компании",
		title: "Nomi",
		phone: "Telefon",
		seller: "Продавец",
		buyer: "Покупатель",
		totalDebt: "Общая задолженность",
		monthsShort: "мес.",
		published: "Опубликованные",
		drafts: "Черновики",
		table: "Таблица",
		filter: "Фильтр",
		filters: "Фильтры",
		export: "Экспорт",
		generalCompany: "Генеральная компания",
		action: "Действие",
		copy: "Скопировать",
		copied: "Скопировано!",
		man: "Мужчина",
		woman: "Женщина",
		no: "Yo'q",
		yes: "Ha",
		description: "Tavsif",
		empty: "Bo'sh",
		error: "Xato!",
		success: "Muvaffaqiyatli!",
		fio: "F.I.Sh",
		email: "Elektron pochta",
		sureDelete: "Haqiqatan ham oʻchirib tashlamoqchimisiz?"
	},
	toCancel: "Отменить",
	toConfirm: "Подтвердить",
	toSend: "Отправить",
	toDelete: "Удалить",
	toUpload: "Загрузить",
	toSearch: "Поиск",
	toAdd: "Qo'shish",
	toCheck: "Проверить",
	toShow: "Показать",
	toApply: "Применить",
	toPublish: "Опубликовать",
	toSave: "Сохранить",
	toSaveAsDraft: "Сохранить в черновик",
	language: {
		ru: "Rushcha",
		uz: "O'zbekcha"
	},
	validation: validationLocales,
	auth: {
		login: loginLocales
	},
	user: userLocales,
	role: roleLocales,
	department: departmentLocales,
	center: centerLocales,
	permission: permissionLocales,
	client: clientLocales,
	statement: statementLocales
}
