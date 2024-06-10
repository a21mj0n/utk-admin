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
		noData: "Нет данных",
		loading: "Загрузка...",
		printError: "Не удалось начать печать документа!",
		id: "ID",
		address: "Адрес",
		legalAddress: "Юридический адрес",
		inn: "ИНН",
		paymentAccountShort: "Р/С",
		manager: "Менеджер",
		name: "Имя",
		surname: "Фамилия",
		patronymic: "Отчество",
		companyName: "Название компании",
		title: "Название",
		phone: "Телефон",
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
		no: "Нет",
		yes: "Да",
		description: "Описание",
		empty: "Пусто",
		error: "Ошибка!",
		success: "Успешно!",
		fio: "Ф.И.О",
		email: "Электронная почта",
		sureDelete: "Вы действително хотите удалить ?"
	},
	toCancel: "Отменить",
	toConfirm: "Подтвердить",
	toSend: "Отправить",
	toDelete: "Удалить",
	toUpload: "Загрузить",
	toSearch: "Поиск",
	toAdd: "Добавить",
	toCheck: "Проверить",
	toShow: "Показать",
	toApply: "Применить",
	toPublish: "Опубликовать",
	toSave: "Сохранить",
	toSaveAsDraft: "Сохранить в черновик",
	language: {
		ru: "Русский",
		uz: "Узбекский"
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
