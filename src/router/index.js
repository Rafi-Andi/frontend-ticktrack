import DashboardAdmin from '@/layout/DashboardAdmin.vue'
import DashboardUser from '@/layout/DashboardUser.vue'
import Home from '@/layout/Home.vue'
import { AuthUserStore } from '@/stores/userAuth'
import AddTicket from '@/view/AddTicket.vue'
import Forbidden from '@/view/Forbidden.vue'
import Login from '@/view/Login.vue'
import Profile from '@/view/Profile.vue'
import Register from '@/view/Register.vue'
import TicketDetail from '@/view/TicketDetail.vue'
import TicketDetailAdmin from '@/view/TicketDetailAdmin.vue'
import Tickets from '@/view/Tickets.vue'
import TicketsAdmin from '@/view/TicketsAdmin.vue'
import { storeToRefs } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user',
      component: DashboardUser,
      redirect: '/user/tickets',
      children: [
        {
          path: 'tickets',
          name: 'tickets',
          component: Tickets,
        },
        {
          path: 'tickets/:code',
          name: 'tickets-detail',
          component: TicketDetail,
        },
        {
          path: 'add-ticket',
          name: 'add-ticket',
          component: AddTicket,
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile,
        },
      ],
    },
    {
      path: '/admin',
      redirect: '/admin/tickets',
      component: DashboardAdmin,
      children: [
        {
          path: 'tickets',
          name: 'tickets-admin',
          component: TicketsAdmin,
        },
        {
          path: 'profile',
          name: 'profile-admin',
          component: Profile,
        },
        {
          path: 'tickets/:code',
          name: 'tickets-detail-admin',
          component: TicketDetailAdmin,
        },
      ],
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/forbidden',
      name: 'forbidden',
      component: Forbidden,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userAuth = AuthUserStore()

  console.log('Role user di guard:', userAuth.role)

  if(!userAuth.token && to.path !== '/login' && to.path !== '/register'){
    return next('/login')
  }

  if (to.path.startsWith('/admin') && userAuth.role !== 'admin') {
    return next('/user')
  }

  if (to.path.startsWith('/user') && userAuth.role !== 'user') {
    return next('/admin')
  }

  next()
})

export default router
