<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from "vue"

defineProps<{
	to: "#page-header-teleport-target" | string
	disabled?: boolean
}>()

const isMounted = ref(false)

onMounted(() => {
	isMounted.value = true
})

onBeforeUnmount(() => {
	isMounted.value = false
})
</script>
<template>
	<Teleport v-if="isMounted" :disabled="disabled" :to="to">
		<slot></slot>
	</Teleport>
</template>
