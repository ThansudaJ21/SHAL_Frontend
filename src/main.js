import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from './store'
import '@/services/axios/axios-interceptor-setup.js'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import './index.css'
import InputFacade from 'vue-input-facade'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

createApp(App)
    .use(Store)
    .use(VueSweetalert2)
    .use(InputFacade)
    .use(router)
    .component('v-select', vSelect)
    .mount('#app')
