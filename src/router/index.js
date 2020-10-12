import VueRouter from 'vue-router'

import MainPage from '../components/main/MainPage'
import Layout from '../components/main/Layout'
import UserCard from '../components/UserCard'


// import AllFilmsPage from '../pages/AllFilmsPage'
// import FilmPage from '../pages/FilmPage'
import NotFound from '../pages/404'
// import FilmsLayout from '../pages/FilmsLayout'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            name:'main',
            component: MainPage
        },
        {
            path: '/lessons',
            name: 'layout',
            component: Layout,
            children:[
                {
                    path: '',
                    name: 'lessons',
                    component: UserCard
                },
                
                // {
                //     path: ':id',
                //     name: 'filmPage',
                //     component: FilmPage,
                //     beforeEnter: (to, from, next) =>{
                //         if(localStorage.getItem('auth')){
                //             next()
                //         }else{
                //             next({name: 'lessons'})
                //         }
                //     }
                // },
                {
                    path: '*/*',
                    redirect: { name: 'lessons' }
                },
            ]
        },
        {
            path: '*',
            name: 'notfound',
            component: NotFound
        }
    ]
})