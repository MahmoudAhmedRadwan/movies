import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Auth
import Registration from '../components/Auth/Registration';
import LogIn from '../components/Auth/LogIn';

// main page
import Main from '../components/Pages/Main';

// content components
import Home from '../components/ContentPages/Home';
import CreateMovie from '../components/ContentPages/CreateMovie';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin) 

Vue.use(VueRouter);
const routes = [
  // ******** Auth ***********
  {
    path: "/",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/Registration",
    name: "Registration",
    component: Registration,
  },

  // ******** Pages ***********
  {
    path: "/Main",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/Home",
        name: "Home",
        component: Home,
      },
      {
        path: "/CreateMovie",
        name: "CreateMovie",
        component: CreateMovie,
      },

    ]
  },

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((_, from, next) => {
  window.scrollTo(0, 0)
  next()
})
export default router;
