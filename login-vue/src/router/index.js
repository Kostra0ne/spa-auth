import Vue from "vue";
import VueRouter from "vue-router";
import auth from "@/auth/";
import store from "@/store/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/signin",
    name: "Signin",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion
      if (auth.getLocalAuthToken()) next("/dashboard");
      // un utilisateur déjà connecté sera redirigé vers le dashboard...
      else next();
    },
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/Signin.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (auth.getLocalAuthToken()) next("/dashboard");
      // un utilisateur déjà connecté sera redirigé vers le dashboard...
      else next();
    },
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    beforeEnter: (to, from, next) => {
      console.log(store.getters["user/current"]);
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
      // si besoin d'accéder à user,   on importe le store en début de fichier et on peut accéder à user via le getter prévu
      // if (!auth.getLocalAuthToken() || store.getters["user/current"].role !== "admin") {
      //   auth.deleteLocalAuthToken();
      //   next("/signin");
      // }
    },
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Dashboard.vue")
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
