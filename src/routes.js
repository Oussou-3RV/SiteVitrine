import Home from "./Views/Home.vue";
import Menu from "./Views/Menu.vue";
import About from "./Views/About.vue";
import Contact from "./Views/Contact.vue"

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: '/home', component: Home },
    { path: '/Home', name: 'Home', component: Home },
    { path: '/Menu', name: 'Menu', component: Menu },
    { path: '/About', name: 'About', component: About },
    { path: '/Contact', name: 'Contact', component: Contact }
  ]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router