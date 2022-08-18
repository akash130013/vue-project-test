import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/style.css'
/**
 * font awesome
 */
import '../node_modules/font-awesome/css/font-awesome.css';

/**
 * bootstrap
 */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
