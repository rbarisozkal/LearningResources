import { createApp } from 'vue';
import App from './App.vue';
import ErrorDialog from './components/ErrorModal/ErrorDialog';

const app = createApp(App)


app.component('error-dialog',ErrorDialog);
app.mount('#app');



