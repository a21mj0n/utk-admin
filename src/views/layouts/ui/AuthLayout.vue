<script lang="ts" setup>
import { NLayout, NLayoutContent } from "naive-ui"
import { MainHeader } from "@/shared/components/main"
</script>

<template>
	<NLayout>
		<MainHeader />

		<NLayout :native-scrollbar="false">
			<NLayoutContent :content-style="{ padding: '2.4rem', height: 'calc(100svh - 5.6rem)' }">
				<slot />
			</NLayoutContent>
		</NLayout>
	</NLayout>
</template>
