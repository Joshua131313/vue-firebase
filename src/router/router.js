import { createRouter, createWebHistory } from "vue-router";
import Home from '@/app/pages/Home'
import AboutPage from '@/app/pages/About'
import NotFound from '@/app/pages/NotFound'

const importPage = (path, notRelative) => {
    if(notRelative) {
        return import(`@/app/${path}`)
    }
    return import(`@/app/pages/${path}`)
}

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: AboutPage,
        children: [
            {
                path: '',
                component: importPage('About/children/About'),
            },
            {
                path: 'team',
                component: importPage('About/children/Team')
            }
        ]
    },
    {
        path: '/login',
        component: importPage('auth/Login', true)
    },
    {
        path: '/register',
        component: importPage('auth/Register', true)
    },
    {
        path: '/forgot-password',
        component: importPage('auth/ForgotPassword', true)
    },
    {
        path: '/email-verification',
        component: importPage('auth/EmailVerification', true)
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router