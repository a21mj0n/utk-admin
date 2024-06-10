import type { Pinia } from "pinia"
import { createPinia } from "pinia"
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

const pinia: Pinia = createPinia()

pinia.use(piniaPluginPersistedState)

export { pinia }
