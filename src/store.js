import Vuex from "vuex";
import Vue from "vue";
import http from "./http/index.js";

Vue.use(Vuex);

const state = {
  token: null,
  securityKey: null,
  products: [],
  productsWithOutGrid: [],
  shoppingCart: [],
  deliveryAdress: {},
  user: {},
  usersDatabase: []
};

const mutations = {
  DEFINE_ACCOUNT(state, { token, securityKey }) {
    localStorage.setItem("Token", token);
    localStorage.setItem("SecurityKey", securityKey);

    state.token = token;
    state.securityKey = securityKey;
  },

  UNDEFINE_ACCOUNT(state) {
    localStorage.setItem("Token", "");
    localStorage.setItem("SecurityKey", "");
    localStorage.setItem("shoppingCart", "");
    state.token = null;
    state.securityKey = null;
    state.products = [];
    state.productsWithOutGrid = [];
    state.shoppingCart = [];
  },

  SET_PRODUCTS(state, productsList) {
    state.products = productsList;
  },

  SET_PRODUCTS_WITH_OUT_GRID(state, productsList) {
    let guidEmpty = "00000000-0000-0000-0000-000000000000";
    let productsWithOutGrid = productsList.filter(
      prod => prod.primaryProductId == guidEmpty
    );

    state.productsWithOutGrid = productsWithOutGrid;
  },

  SET_PRODUCT_IN_SHOPPING_CART(state, product) {
    state.shoppingCart.push(product);

    localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
  },

  DELETE_PRODUCT_IN_SHOPPING_CART(state, productId) {
    state.shoppingCart = state.shoppingCart.filter(
      product => product.id != productId
    );

    localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
  },

  UPDATE_PRODUCT_QUANTITY_IN_SHOPPING_CART(state, productToUpdate) {
    let productIndex = state.shoppingCart.findIndex(
      product => product.id == productToUpdate.id
    );

    state.shoppingCart[productIndex].orderQuantity = productToUpdate.quantity;

    localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
  },

  CLEAN_SHOPPING_CART(state) {
    state.shoppingCart = [];
  },

  SET_DELIVERY_ADRESS(state, deliveryAdress) {
    localStorage.setItem("deliveryAdress", JSON.stringify(deliveryAdress));
    state.deliveryAdress = deliveryAdress;
  },

  SET_USER(state, user) {
    localStorage.setItem("user", JSON.stringify(user));
    state.user = user;
  },

  SET_USERS_DATABASE(state, users) {
    localStorage.setItem("usersDataBase", JSON.stringify(users));
    state.usersDatabase = users;
  },

  LOGOUT_USER(state) {
    localStorage.setItem("user", "");
    state.user = {};
  },

  DELETE_USER(state, id) {
    state.usersDatabase = state.usersDatabase.filter(user => user.id != id);
    localStorage.setItem("usersDataBase", JSON.stringify(state.usersDatabase));
  },

  GET_USERS(state) {
    return state.usersDatabase;
  }
};

const actions = {
  connectInAccount({ commit }, key) {
    return new Promise((resolve, reject) => {
      const headers = {
        securityKey: key,
        userId: this.state.user.id || Number(-1)
      };
      const endPoint = "token";
      http
        .get(endPoint, {
          headers
        })
        .then(res => {
          commit("DEFINE_ACCOUNT", {
            token: res.data.token,
            securityKey: headers.securityKey
          });
          resolve(res.data);
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },

  getProducts({ commit }) {
    return new Promise((resolve, reject) => {
      const headers = {
        token: this.state.token
      };
      const endPoint = "products";
      http
        .get(endPoint, {
          headers
        })
        .then(res => {
          commit("SET_PRODUCTS", res.data.products);
          commit("SET_PRODUCTS_WITH_OUT_GRID", res.data.products);
          resolve(res.data);
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },

  checkUserCredentials({ dispatch }, user) {
    return new Promise((resolve, reject) => {
      const headers = {
        email: user.login || "",
        passWord: user.password || ""
      };
      const endPoint = "user/check-user-credentials";
      http
        .get(endPoint, {
          headers
        })
        .then(res => {
          dispatch("setUser", res.data);
          resolve(res.data);
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },

  createNewUser({}, user) {
    return new Promise((resolve, reject) => {
      const data = {
        email: user.email || "",
        password: user.password || "",
        name: user.name || ""
      };
      const endPoint = "user";
      http
        .post(endPoint, data)
        .then(res => {
          resolve(res.data);
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },

  getUsers({ dispatch }) {
    return new Promise((resolve, reject) => {
      const endPoint = "user";
      http
        .get(endPoint)
        .then(res => {
          dispatch("setUsersDatabase", res.data.users);
          resolve(res.data);
        })
        .catch(errors => {
          reject(errors);
          return errors;
        });
    });
  },

  deleteUser({ commit }, id) {
    return new Promise((resolve, reject) => {
      const endPoint = `user/${id}`;
      http
        .put(endPoint)
        .then(res => {
          commit("DELETE_USER", res.data.id);
          resolve(res.data);
        })
        .catch(errors => {
          reject(errors);
          return errors;
        });
    });
  },

  checkDataOnUpdate({}, user) {
    return new Promise((resolve, reject) => {
      const data = {
        email: user.email || "",
        password: user.password || "",
        name: user.name || "",
        id: user.id
      };
      const endPoint = `user`;
      http
        .put(endPoint, data)
        .then(res => {
          resolve(res.data);
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },

  setUser({ commit }, user) {
    commit("SET_USER", user);
  },

  setUsersDatabase({ commit }, users) {
    commit("SET_USERS_DATABASE", users);
  },

  setProductInShoppingCart({ commit }, product) {
    commit("SET_PRODUCT_IN_SHOPPING_CART", product);
  },

  deleteProductInShoppingCart({ commit }, productId) {
    commit("DELETE_PRODUCT_IN_SHOPPING_CART", productId);
  },

  updateProductQuantityInShoppingCart({ commit }, productToUpdate) {
    commit("UPDATE_PRODUCT_QUANTITY_IN_SHOPPING_CART", productToUpdate);
  },

  cleanShoppingCart({ commit }) {
    commit("CLEAN_SHOPPING_CART");
  },

  setdeliveryAdress({ commit }, deliveryAdress) {
    commit("SET_DELIVERY_ADRESS", deliveryAdress);
  },

  logoutUser({ commit }) {
    commit("LOGOUT_USER");
  }
};

const getters = {
  accountIsDefined: state => Boolean(state.token),
  getProductsList: state => state.products,
  getProductsListWithOutGrid: state => state.productsWithOutGrid,
  getProductsInShoppingCart: state => state.shoppingCart,
  getTotalValueShoppingCart: state => {
    let totalValue = Number();
    state.shoppingCart.forEach(product => {
      totalValue += product.orderQuantity * product.price;
    });
    return totalValue;
  },
  userIsLogged: state => {
    let cacheUser = localStorage.getItem("user");

    let userIsLogged = cacheUser || state.user.email;
    return Boolean(userIsLogged);
  },
  getUsersDatabase: state => state.usersDatabase,
  getUserDatabase(state, id) {
    return state.usersDatabase.find(user => user.id === id);
  }
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});
