import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import lazy from './directives/lazy';
const app = createApp(App)
app.directive('lazy', lazy)
app.mount('#app')
