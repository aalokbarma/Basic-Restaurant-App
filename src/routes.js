import HomePage from './components/HomePage.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import AddRestaurantPage from './components/AddRestaurantPage.vue';
import UpdateRestaurantPage from './components/UpdateRestaurantPage.vue';

import {createRouter, createWebHistory} from 'vue-router';


const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: '/',
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/signup',
    },
    {
        name: "Login",
        component: Login,
        path: '/login',
    },
    {
        name: "AddRestaurantPage",
        component: AddRestaurantPage,
        path: '/add-restaurant',
    },
    {
        name: "UpdateRestaurantPage",
        component: UpdateRestaurantPage,
        path: '/update-restaurant',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
