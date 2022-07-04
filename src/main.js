import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Form from './components/Form.vue';
import "./index.css";

const app = createApp(App);
app.component('Form', Form)
app.use(router);

app.mount("#app");
