
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// add-FontAwesomeIcon

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);


// add-toast
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';




const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(VueToast);



registerPlugins(app)

app.mount('#app')
