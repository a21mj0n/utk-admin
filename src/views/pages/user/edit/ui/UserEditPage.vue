<script lang="ts" setup>
import { onMounted } from "vue"
import { UserForm } from "#pages/user/create/components"
import usePage from "./usePage"
import { MainCrudButtons } from "#shared/components/main"
import { UserRoutesEnum } from "#routes/types"

const { formRef, formModel, roleList, departmentList, getUser, getRoleList, getDepartmentList, updateUser } = usePage()

onMounted(async () => {
	await getUser()
	await getRoleList()
	await getDepartmentList()
})
</script>

<template>
	<UserForm v-model:form-ref="formRef" v-model:model="formModel" :department-list="departmentList" :role-list="roleList" />

	<MainCrudButtons :back-route-name="UserRoutesEnum.list" :on-save="updateUser" has-delete />
</template>

<style lang="scss" scoped></style>
