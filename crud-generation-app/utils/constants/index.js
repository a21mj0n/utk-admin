export const CRUD_TYPE = {
	LIST: "list",
	CREATE: "create",
	EDIT: "edit"
}

export const PROMPT_QUESTIONS = [
	{
		type: "text",
		name: "crudName",
		message: "Please enter CRUD name: ",
		hint: "Please, try enter one word if you can! )"
	},
	{
		type: "confirm",
		name: "hasPages",
		message: "Can you confirm creating pages ?",
		initial: true
	},
	{
		type: "confirm",
		name: "hasRoutes",
		message: "Can you confirm creating routes ?",
		initial: true
	},
	{
		type: "confirm",
		name: "hasServices",
		message: "Can you confirm creating services ?",
		initial: true
	}
]
