import Vue from 'vue'
import VueRouter from "vue-router";
import Login from "../components/login/Login";
import SignUp from "../components/login/SignUp";
import Forum from "../components/Forum/Forum";
import Logout from "../components/login/Logout";
import Read from "../components/Forum/Read";
import Create from "../components/Forum/Create";
import CreateCategory from "../components/category/CreateCategory";

Vue.use(VueRouter)

const routes = [
    {path: '/login', component: Login},
    {path: '/signup', component: SignUp},
    {path: '/forum', name: 'forum', component: Forum},
    {path: '/logout', name: 'logout', component: Logout},
    {path: '/question/:slug', name: 'read', component: Read },
    {path: '/ask', name: 'ask', component: Create },
    {path: '/category', name: 'category', component: CreateCategory },
]

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
})

export default router
