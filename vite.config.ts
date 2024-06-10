import UnoCSS from "unocss/vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { defineConfig } from "vite"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx(), UnoCSS()],

	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
			"#shared": resolve(__dirname, "src/shared"),
			"#modules": resolve(__dirname, "src/modules"),
			"#pages": resolve(__dirname, "src/views/pages"),
			"#services": resolve(__dirname, "src/shared/services"),
			"#routes": resolve(__dirname, "src/app/routes")
		}
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import "./src/app/assets/styles/_variables.scss";
          @import "./src/app/assets/styles/_mixins.scss";
          @import "./src/app/assets/styles/global.scss";
        `
			}
		}
	}
})
