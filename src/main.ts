/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
// Components
import App from './App.vue'
// import "@/scss/style.scss";
// Composables
import { createApp } from 'vue'
import router from './router'
const app = createApp(App)

registerPlugins(app)
app.use(router)
app.use(vuetify).mount('#app')
