import Vue from 'vue'
import HomePage from '@/components/Home/HomePage'
import CreateGallery from '@/components/Create/CreateGallery'
import CreateEvent from '@/components/Create/CreateEvent'
import ContactUs from "../components/ContactUs/ContactUsForm";
import Router from 'vue-router'
import SendOrder from "../components/MenuPage/SendOrder";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/CreateEvent',
            name: 'CreateEvent',
            component: CreateEvent
        },
        {
            path: '/CreateGallery',
            name: 'CreateGallery',
            component: CreateGallery
        },
        {
            path: '/ContactUs',
            name: 'ContactUs',
            component: ContactUs
        },
        {
            path: "/SendOrder",
            name: "SendOrder",
            component: SendOrder
        }
    ]
})