import './assets/main.css'
import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire'
import { firebaseApp } from './firebase'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireFirestoreOptionsAPI()]
})

app.use(createPinia())
app.use(router)

app.mount('#app')
