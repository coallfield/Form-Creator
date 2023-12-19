

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components/UI/index.js'
import store from '@/store/store.js'
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})


app.use(router)
app.use(store)

app.mount('#app')
