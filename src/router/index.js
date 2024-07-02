import { createRouter, createWebHistory } from 'vue-router';
import HomeMain from '@/components/HomeMain.vue';
import AboutB from '@/components/AboutB.vue';
import HomeWork1 from '@/components/HomeWork1.vue'
import HomeWork2 from '@/components/HomeWork2.vue'
import HomeWork3 from '@/components/HomeWork6-27-1.vue'
import HomeWork4 from '@/components/HomeWork6-27-2.vue'
import HomeWork5 from '@/components/HomeWork6-27-3.vue'
import HomeWork6 from '@/components/HomeWork6-27-4.vue'
import HomeWork7 from '@/components/HomeWork6-28-1.vue'
import HomeWork8 from '@/components/HomeWork6-30.vue'
import HomeWork9 from '@/components/HomeWork7-02.vue'


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
  ,
  {
    path: '/HomeWork7',
    name: 'HomeWork7',
    component: HomeWork7
  }
  ,
  {
    path: '/HomeWork8',
    name: 'HomeWork8',
    component: HomeWork8
  },
  {
    path: '/HomeWork9',
    name: 'HomeWork9',
    component: HomeWork9
  }
  
    
  
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });

export default router;
