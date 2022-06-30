import App from './App';
import { createApp } from 'vue';
import axios from "axios";
import VueAxios from "vue-axios";
import router from './router/router';
import store from './store'
import '../styles/application.css';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.mount(document.querySelector('[data-app]'));
