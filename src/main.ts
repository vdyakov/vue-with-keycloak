import './assets/styles/tailwind.css';

import App from './App.vue';
import router from './router';
import store from './store';
import VueKeycloakJs from '@dsb-norge/vue-keycloak-js';
import { createApp } from 'vue';
import { KeycloakInstance } from 'keycloak-js';
import { VueKeycloakInstance } from '@dsb-norge/vue-keycloak-js/dist/types';

const app = createApp(App);

app.use(VueKeycloakJs, {
  init: {
    onLoad: 'login-required',
  },
  config: {
    url: process.env.VUE_APP_KEYCLOAK_URL,
    realm: process.env.VUE_APP_KEYCLOAK_REALM_NAME,
    clientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID,
  },
  async onReady(keycloak: KeycloakInstance) {
    await store.dispatch('user/loadUserData', keycloak.tokenParsed ?? {});
    await store.dispatch('user/loadUserToken', keycloak.token ?? null);

    app
        .use(store)
        .use(router, app)
        .mount('#app');
  }
});

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $keycloak: VueKeycloakInstance
  }
}