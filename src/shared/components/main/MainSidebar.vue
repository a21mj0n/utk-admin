<script lang="ts" setup>
import { MenuProps, NButton, NLayoutSider, NMenu } from "naive-ui"
import { computed, h, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useI18n } from "vue-i18n"
import {
	FileTextIcon,
	NetworkIcon,
	PanelLeftCloseIcon,
	PanelLeftOpenIcon,
	SquareUserRoundIcon,
	UserPlusIcon,
	UsersIcon
} from "lucide-vue-next"
import { useCustomBreakpoints } from "#shared/composables"
import { ClientRoutesEnum, DepartmentRoutesEnum, RoleRoutesEnum, StatementRoutesEnum, UserRoutesEnum } from "#routes/types"
import { renderIcon } from "#shared/utils/functions"

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { isMobile } = useCustomBreakpoints()

const sidebarCollapsed = ref<boolean>(true)
const menuOptions: MenuProps["items"] = [
	{
		label: () => t("user.users"),
		key: UserRoutesEnum.list,
		icon: () => h(UsersIcon),
		show: true
	},
	{
		label: () => t("role.roles"),
		key: RoleRoutesEnum.list,
		icon: () => h(UserPlusIcon),
		show: true
	},
	{
		label: () => t("department.departments"),
		key: DepartmentRoutesEnum.list,
		icon: () => h(NetworkIcon),
		show: true
	},
	{
		label: () => t("client.clients"),
		key: ClientRoutesEnum.list,
		icon: () => h(SquareUserRoundIcon),
		show: true
	},
	{
		label: () => t("statement.list"),
		key: StatementRoutesEnum.list,
		icon: renderIcon(FileTextIcon)
	}
]

const menuUpdated = (key: string) => {
	if (route.name === key) {
		return
	}

	router.push({ name: key })

	if (!isMobile.value) {
		return
	}

	sidebarCollapsed.value = true
}

const expandedKeys = (): string[] => {
	if (route.name) {
		const routeKeys = String(route.name).split(".")

		if (routeKeys.length) {
			return [routeKeys[0]]
		}

		return []
	}

	return []
}

const collapsedWidth = computed(() => (!isMobile.value ? 64 : 0))

const currentRouteName = computed(() => String(route.name || ""))
</script>

<template>
	<n-layout-sider
		:class="{ 'u-sidebar__mobile': isMobile }"
		:collapse-mode="!isMobile ? 'width' : 'transform'"
		:collapsed="sidebarCollapsed"
		:collapsed-width="collapsedWidth"
		:native-scrollbar="false"
		:position="!isMobile ? 'static' : 'absolute'"
		:show-trigger="isMobile && sidebarCollapsed"
		:width="240"
		bordered
		class="u-sidebar"
		@collapse="sidebarCollapsed = true"
		@expand="sidebarCollapsed = false"
	>
		<div class="u-sidebar__logo" @click="$router.push('/')">
			<img alt="logo" src="/images/logo.png" width="40" />
		</div>

		<div class="u-sidebar__menu">
			<n-menu
				:collapsed-icon-size="24"
				:collapsed-width="collapsedWidth"
				:default-expanded-keys="expandedKeys()"
				:options="menuOptions"
				:root-indent="16"
				:value="currentRouteName"
				class="u-menu"
				@update:value="menuUpdated"
			/>
		</div>

		<div class="u-sidebar__bottom">
			<n-button
				:render-icon="sidebarCollapsed ? renderIcon(PanelLeftOpenIcon) : renderIcon(PanelLeftCloseIcon)"
				:theme-overrides="{
					paddingMedium: '0',
					rippleColor: 'unset'
				}"
				block
				class="u-sidebar__toggle-btn"
				icon-placement="right"
				text
				@click="sidebarCollapsed = !sidebarCollapsed"
			>
				<span v-if="!sidebarCollapsed">Закрыть меню</span>
			</n-button>
		</div>
	</n-layout-sider>
</template>

<style lang="scss">
.n-menu-item-content-header {
	line-height: normal;
}

.u-menu {
	--n-border-radius: 1rem !important;

	&.n-menu--collapsed .n-menu-item-content {
		.n-menu-item-content-header {
			display: none;
		}
	}

	.n-menu-item {
		&-content {
			@include font("t14");
			gap: 0.8rem;
		}
	}
}

.u-sidebar {
	height: 100svh;
	z-index: 99;

	.n-scrollbar-content {
		height: 100%;
		@include flex(0, column, start, start);

		.u-sidebar__menu {
			flex: 1;
			width: 100%;
		}
	}

	&__mobile {
		&.n-layout-sider--collapsed {
			.n-layout-toggle-button {
				transform: translateX(90%) translateY(-50%);
				border: none;
				box-shadow: none;
				height: 5rem;
				border-radius: 0 1rem 1rem 0;
			}
		}

		.n-layout-toggle-button {
			transform: translateX(0) translateY(-50%);
			border: none;
			box-shadow: none;
			height: 5rem;
			border-radius: 1rem 0 0 1rem;
		}
	}

	&__logo {
		cursor: pointer;
		@include flex(0.6rem, row, center, center);

		width: 100%;
		height: 5.5rem;
		position: relative;

		&-text {
			position: absolute;
			left: 1.6rem;
			opacity: 0;
			transform: scale(0.4);
			transition: all 0.3s var(--n-bezier);

			&.shown {
				opacity: 1;
				left: 5.6rem;
				transform: scale(1);
			}
		}
	}

	&__bottom {
		width: 100%;
		padding: 2rem 1.6rem;

		.n-button__content {
			width: 100%;
		}
	}
}
</style>
