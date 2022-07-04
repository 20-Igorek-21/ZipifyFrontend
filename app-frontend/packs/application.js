import App from './App';
import { createApp } from 'vue';
import axios from "axios";
import VueAxios from "vue-axios";
import router from './router/router';
import store from './store'
import '../styles/application.css';
import useVuelidate from "@vuelidate/core";

const app = createApp(App);

app.use(useVuelidate);
app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.mount(document.querySelector('[data-app]'));
