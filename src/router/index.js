import { createRouter, createWebHistory } from "vue-router";
import Page from "../components/page.vue";
import Notfound from "../components/Notfound.vue";
import About from "../components/About.vue";
import Service from "../components/Service.vue";
import Contact from "../components/Contact.vue";

const routes=[
    {path: '/', component: Page },
    {path:'/about', component:About},
    {path:'/contact', component:Contact},
    {path:'/service', component:Service},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Notfound },

]

export const router = createRouter({
    history:createWebHistory(),
    routes
})