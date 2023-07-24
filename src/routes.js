import { createWebHistory, createRouter } from 'vue-router'
import Index from './views/Index.vue'




const routes = [
    {
        name: 'Index',
        path: '/',
        component: Index
       
    },
 
    {
        name: 'MainProfile',
        path: '/MainProfile',
        component: () => import('./views/MainProfile.vue')
    },
    {
        name: 'Signup',
        path: '/Signup',
        component: () => import('./views/Signup.vue')
        // meta: {
        //     hideNavbar: true,
        //     hideSidebar: true,
        //     hideFooter: true
        //    }

    },
    {
        name: 'Dashboard',
        path: '/Dashboard',
        component: () => import('./views/Dashboard.vue')
        // meta: {
        //     hideNavbar: true,
        //     hideSidebar: true,
        //     hideFooter: true
        //    }
    },
    {
        name: 'Forget',
        path: '/Forget',
        component: () => import('./views/Forget.vue')
        // meta: {
        //     hideNavbar: true,
        //     hideSidebar: true,
        //     hideFooter: true
        //    }
    },
    {
        name: 'Campaigns_table',
        path: '/Campaigns_table',
        component: () => import('./views/Campaigns_table.vue')
    },
    {
        name: 'Geos_table',
        path: '/Geos_table',
        component: () => import('./views/Geos_table.vue')
    },
    {
        name: 'Reports',
        path: '/Reports',
        component: () => import('./views/Reports.vue')
    },
    
    {
        name: 'Approved',    
        path: '/Approved',
        component: () => import('./views/Approved.vue')
    },
    {
        name: 'Request_Campaign',    
        path: '/Request_Campaign',
        component: () => import('./views/Request_Campaign.vue')
    },
    {
        name: 'Invoice',    
        path: '/Invoice',
        component: () => import('./views/Invoice.vue')
    },
    {
        name: 'Api_data',    
        path: '/Api_data',
        component: () => import('./views/Api_data.vue')
    },
    {
        name: 'Postback',    
        path: '/Postback',
        component: () => import('./views/Postback.vue')
    },
    {
        name: 'Postback_edit',    
        path: '/Postback_edit',
        component: () => import('./views/Postback_edit.vue')
    },
    {
        name: 'Tracking',    
        path: '/Tracking',
        component: () => import('./views/Tracking.vue')
    },
    {
        name: 'Tracking_2',    
        path: '/Tracking_2',
        component: () => import('./views/Tracking_2.vue')
    },
    {
        name: 'demo',    
        path: '/demo',
        component: () => import('./views/demo.vue')
    },
    // {
    //     name: 'CampaignAll',
    //     path: '/CampaignAll',
    //     component: () => import('./views/CampaignAll.vue')
    // },
    // {
    //     name: 'CountryAll',
    //     path: '/CountryAll',
    //     component: () => import('./views/CountryAll.vue')
    // }
       
  
  
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router; 

// createApp(App).use(router).mount('#app')
 







