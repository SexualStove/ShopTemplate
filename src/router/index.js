import Vue from 'vue'
import HomePage from '@/components/Home/HomePage'
import MenuPage from '@/components/MenuPage/RealMenuPage'
import CreateGallery from '@/components/Create/CreateGallery'
import CreateEvent from '@/components/Create/CreateEvent'
import ContactUs from "../components/ContactUs/ContactUsForm";
import Router from 'vue-router'
import SendOrder from "../components/MenuPage/SendOrder";

Vue.use(Router);
export default new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) { // if has a hash...
            return { selector: to.hash } // scroll to the element
        } if(savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/Menu',
            name: 'MenuPage',
            component: MenuPage
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