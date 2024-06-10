import { normalizeCrudName } from "./index.js"
import { CRUD_TYPE } from "../constants/index.js"

export const pagesTemplate = (crudName, type) => {
	const { pascalCasedCrudName } = normalizeCrudName(crudName)

	return `<script lang="ts" setup>
import usePage from "./usePage"

const {} = usePage()
</script>

<template>${type === CRUD_TYPE.CREATE ? "Create" : ""} ${pascalCasedCrudName} ${type === CRUD_TYPE.EDIT ? "Edit" : type === CRUD_TYPE.LIST ? "List" : ""}</template>

<style lang="scss" scoped></style>
`
}

export const pageUseFileTemplate = () => `export default function() {
	return {}
}`
