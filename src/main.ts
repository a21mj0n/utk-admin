import { createApp } from "vue"
import AppComponent from "./App.vue"
import { i18n, pinia, router } from "@/app/plugins"
import { vMaska } from "maska"
import { vInnMask, vMaskedModel, vPhoneMask } from "#shared/utils/directives"

const app = createApp(AppComponent)

app.directive("maska", vMaska)
app.directive("maskedModel", vMaskedModel)
app.directive("phone-mask", vPhoneMask)
app.directive("inn-mask", vInnMask)

app.use(router)
app.use(i18n)
app.use(pinia)

app.mount("#app")
