import { createRouter, createWebHistory } from 'vue-router';
import HomeMain from '@/components/HomeMain.vue';
import AboutB from '@/components/AboutB.vue';
import HomeWork1 from '@/components/HomeWork1.vue'
import HomeWork2 from '@/components/HomeWork2.vue'
import HomeWork3 from '@/components/HomeWork3.vue'
import HomeWork4 from '@/components/HomeWork4.vue'
import HomeWork5 from '@/components/HomeWork5.vue'
import HomeWork6 from '@/components/HomeWork6.vue'


const routes = [
  {
    path: '/',
    name: 'HomeMain',
    component: HomeMain
  },
  {
    path: '/aboutB',
    name: 'AboutB',
    component: AboutB
  },
  {
    path: '/HomeWork1',
    name: 'HomeWork1',
    component: HomeWork1
  },
  {
    path: '/HomeWork2',
    name: 'HomeWork2',
    component: HomeWork2
  },
  {
    path: '/HomeWork3',
    name: 'HomeWork3',
    component: HomeWork3
  }
  ,
  {
    path: '/HomeWork4',
    name: 'HomeWork4',
    component: HomeWork4
  },
  {
    path: '/HomeWork5',
    name: 'HomeWork5',
    component: HomeWork5
  }
  ,
  {
    path: '/HomeWork6',
    name: 'HomeWork6',
    component: HomeWork6
  }
  
    
  
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });

export default router;
