import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App)

const auth = createAuth0({
    domain: import.meta.env.VITE_AUTH_DOMAIN,
    clientId: import.meta.env.VITE_AUTH_CLIENT,
    authorizationParams: {
      redirect_uri: "http://localhost:5173"
    }
  })


app.use(auth)


app.mount('#app')
