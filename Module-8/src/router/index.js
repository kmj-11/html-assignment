import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/:pathMatch(.*)*', component: NotFound } // 404 fallback route
]

const router = createRouter({
    history: createWebHistory(),
    routes
 })

export default router