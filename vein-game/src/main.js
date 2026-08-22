import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/css/global.css'
import { createSEOPlugin } from './seo/plugin.js'
// 联盟广告已停用；保留组件源码，取消样式、组件导入与全局注册。
// import '@/ads/ads.css'
// import AdBanner from '@/components/ads/AdBanner.vue'
// import AdNativeBanner from '@/components/ads/AdNativeBanner.vue'
// import AdSidebar from '@/components/ads/AdSidebar.vue'
const app = createApp(App)

// app.component('AdBanner', AdBanner)
// app.component('AdNativeBanner', AdNativeBanner)
// app.component('AdSidebar', AdSidebar)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(createSEOPlugin())

app.mount('#app')
