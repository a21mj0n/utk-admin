<script lang="ts" setup>
import { onMounted } from "vue"
import usePage from "./usePage"
import { RoleRoutesEnum } from "#routes/types"
import { RoleForm } from "../components"
import { MainCrudButtons } from "#shared/components/main"

const { formRef, formModel, permissionList, departmentList, isLoading, onCreateRole, getDepartmentList, getPermissionList } = usePage()

onMounted(() => {
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

	<MainCrudButtons :back-route-name="RoleRoutesEnum.list" :has-delete="false" :is-loading="isLoading" :on-save="onCreateRole" />
</template>
<style lang="scss" scoped></style>
