import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import PandaButton from '@pandaui-vue-plus/components/button'
// import PandaCard from '@pandaui-vue-plus/components/card'

import '@pandaui-vue-plus/theme-chalk/src/index.scss'
import pandaui from '@pandaui-vue-plus/components'

const app = createApp(App)

// app.component('panda-button', PandaButton)
// app.component('panda-card', PandaCard)
app.use(pandaui);
app.use(router)
app.mount('#app')
