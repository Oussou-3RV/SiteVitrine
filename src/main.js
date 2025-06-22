import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'



createApp(App).use(router).mount('#app')

const sr = ScrollReveal();
sr.reveal('.test',{
    delay:500,
    origin:'left'
})
