import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]

})
