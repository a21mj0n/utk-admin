<script lang="ts" setup>
import { NCard, NLayout, NLayoutContent } from "naive-ui"
import { computed } from "vue"
import { useRoute } from "vue-router"
import { MainHeader, MainPageHeader, MainSidebar } from "#shared/components/main"
import { useDark } from "@vueuse/core"

const route = useRoute()
const isDark = useDark()

const pageTitle = computed(() => route.meta.pageTitle)
</script>

<template>
	<NLayout has-sider>
		<MainSidebar />

		<NLayout>
			<MainHeader />

			<NLayout :native-scrollbar="false" class="main-layout-content" style="height: calc(100svh - 5.6rem)">
				<NLayoutContent class="p-10">
					<MainPageHeader :title="pageTitle" />

					<Transition name="fade">
						<NCard :bordered="isDark">
							<slot />
						</NCard>
					</Transition>
				</NLayoutContent>
			</NLayout>
		</NLayout>
	</NLayout>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.main-layout-content {
	//:deep(.n-scrollbar-content),
	//:deep(.n-layout-content) {
	//	height: 100%;
	//}
}
</style>
