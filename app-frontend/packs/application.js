import App from './App';
import { createApp } from 'vue';
import router from './router/router';
import axios from "axios";
import VueAxios from "vue-axios";
import '../styles/application.css';

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios)
app.mount(document.querySelector('[data-app]'));
