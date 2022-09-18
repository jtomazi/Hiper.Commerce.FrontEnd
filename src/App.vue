<template>
  <div id="app">
    <Navigationbar
      :class="{
        'navbar-default': userIsLogged,
        'navbar-hide': !userIsLogged
      }"
      v-if="userIsLogged"
    />

    <main class="index">
      <div
        :class="{
          container: userIsLogged,
          'navbar-hide': !userIsLogged
        }"
      >
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import Navigationbar from "./components/Navbar/NavigationBar.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Navigationbar,
  },

  computed: {
    ...mapGetters(["accountIsDefined", "userIsLogged"])
  },

  beforeMount() {
    let cacheUser = JSON.parse(localStorage.getItem("user"));
    if (cacheUser != "" && cacheUser != null) {
      this.$store.dispatch("setUser", cacheUser);
    }

    let cacheUsersDatabase = JSON.parse(localStorage.getItem("usersDataBase"));
    if (cacheUsersDatabase != "" && cacheUsersDatabase != null) {
      this.$store.dispatch("setUsersDatabase", cacheUsersDatabase);
    }

    let cacheSecurityKey = localStorage.getItem("SecurityKey");
    if (cacheSecurityKey != "" && cacheSecurityKey != null) {
      this.$store.dispatch("connectInAccount", cacheSecurityKey).then(res => {
        this.$store.dispatch("getProducts");
      });
    }

    let cacheShoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    if (cacheShoppingCart != "" && cacheShoppingCart != null) {
      cacheShoppingCart.forEach(product => {
        this.$store.dispatch("setProductInShoppingCart", product);
      });
    }
  }
};
</script>

<style>
#app,
html {
  background-color: #ebebeb !important;
}

li {
  list-style: none;
}

input:focus,
button:focus {
  box-shadow: 0 0 0 0 !important;
  outline: 0 !important;
}

.navbar-default {
  margin-top: 5%;
}

@media screen and (max-width: 1000px) {
  .navbar-default {
    margin-top: 10%;
  }
}
</style>
