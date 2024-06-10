<script lang="ts" setup>
import { RoleForm } from "#pages/role/create/components"
import usePage from "./usePage"
import { onMounted } from "vue"
import { RoleRoutesEnum } from "#routes/types"
import { MainCrudButtons } from "#shared/components/main"

const {
	formRef,
	formModel,
	permissionList,
	departmentList,
	isLoading,
	isLoadingEdit,
	getRole,
	getDepartmentList,
	getPermissionList,
	onDeleteRole,
	onEditRole
} = usePage()

onMounted(() => {
	getRole()
	getPermissionList()
	getDepartmentList()
})
</script>

<template>
	<RoleForm
		v-model:form-ref="formRef"
		v-model:model="formModel"
		:department-list="departmentList"
		:is-loading="isLoading"
		:permission-list="permissionList"
	/>

	<MainCrudButtons
		:back-route-name="RoleRoutesEnum.list"
		:is-loading="isLoadingEdit"
		:on-delete="onDeleteRole"
		:on-save="onEditRole"
		has-delete
	/>
</template>

<style lang="scss" scoped></style>
