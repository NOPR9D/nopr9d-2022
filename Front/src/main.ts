import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { Zdog } from "@/services/Zdog.ts";

createApp(App).use(store).mount("#app");
