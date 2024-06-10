<script lang="ts" setup>
import { onMounted } from "vue"
import { UserForm } from "../components"
import usePage from "./usePage"
import { UserRoutesEnum } from "#routes/types"
import { MainCrudButtons } from "#shared/components/main"

const { formRef, formModel, isLoading, roleList, departmentList, getDepartmentList, getRoleList, onCreateUser } = usePage()

onMounted(() => {
	getRoleList()
	getDepartmentList()
})
</script>

<template>
	<UserForm v-model:form-ref="formRef" v-model:model="formModel" :department-list="departmentList" :role-list="roleList" />

	<MainCrudButtons :back-route-name="UserRoutesEnum.list" :has-delete="false" :is-loading="isLoading" :on-save="onCreateUser" />
</template>

<style lang="scss" scoped></style>
