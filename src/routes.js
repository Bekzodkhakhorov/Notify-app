import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

//

import Home from './pages/Home';
import NotFound from  './pages/404' 
import notify from './pages/NotifyPage';


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
           component: Home
        },
        {
            path: '/notify',
            name: 'notify',
            component: notify,
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound,
        }
    ]
})
