import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


import bootstrap from './assets/css/bootstrap.min.css'

/* add icons to the library */
library.add(faUserSecret)
/* eslint-disable */
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('bootstrap', bootstrap)
app.mount('#app')
