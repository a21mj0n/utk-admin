<script lang="ts" setup>
import { ClientForm } from "../../create/components"
import usePage from "./usePage"
import { MainCrudButtons } from "#shared/components/main"
import { ClientRoutesEnum } from "#routes/types"
import { onMounted } from "vue"

const { formRef, formModel, getClient, onDelete, onEditClient } = usePage()

onMounted(() => {
	getClient()
})
</script>

<template>
	<ClientForm v-model:form-ref="formRef" v-model:model="formModel" />

	<MainCrudButtons :back-route-name="ClientRoutesEnum.list" :on-delete="onDelete" :on-save="onEditClient" has-delete />
</template>

<style lang="scss" scoped></style>
