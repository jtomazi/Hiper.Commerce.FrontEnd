import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store.js";

import Home from "../components/views/Home.vue";

import ProductDetails from "../components/views/Product/ProductDetails.vue";
import Product from "../components/views/Product.vue";

import ShoppingCart from "../components/views/ShoppingCart.vue";

import SalesOrder from "../components/views/SalesOrder.vue";

import LoginArea from "../components/views/LoginArea/LoginArea.vue";
import Login from "../components/views/LoginArea/Login/Login.vue";
import Register from "../components/views/LoginArea/Register/Register.vue";

import Users from "../components/views/Users.vue";
import UserList from "../components/views/Users/UserList.vue";
import UserForm from "../components/views/Users/UserForm.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
    meta: {
      public: false
    }
  },
  {
    path: "/login",
    component: LoginArea,
    meta: {
      public: true
    },
    children: [
      {
        path: "",
        name: "Login",
        component: Login,
        meta: {
          public: true
        }
      },
      {
        path: "register",
        name: "Register",
        component: Register,
        meta: {
          public: true
        }
      }
    ]
  },
  {
    path: "/produto",
    name: "Product",
    component: Product,
    meta: {
      public: false
    },
    children: [
      {
        path: ":id",
        name: "Details",
        component: ProductDetails,
        props: true,
        meta: {
          public: false
        }
      }
    ]
  },
  {
    path: "/carrinho",
    name: "Carrinho",
    component: ShoppingCart,
    meta: {
      public: false
    }
  },
  {
    path: "/pedido-de-venda",
    name: "SalesOrder",
    component: SalesOrder,
    meta: {
      public: false
    }
  },
  {
    path: "/usuarios",
    component: Users,
    meta: {
      public: false
    },
    children: [
      {
        path: "",
        name: "UserList",
        component: UserList,
        meta: {
          public: false
        }
      },
      {
        path: "editar/:id",
        name: "UserForm",
        component: UserForm,
        props: true,
        meta: {
          public: false
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.meta.public && !store.getters.userIsLogged) {
    return next({ path: "/login" });
  }
  next();
});

export default router;
