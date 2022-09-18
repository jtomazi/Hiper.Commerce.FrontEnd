<template>
  <div>
    <header>
      <!-- Fixed navbar -->
      <nav class="navbar navbar-expand-lg fixed-top bg-dark">
        <div class="container">
          <router-link :to="`/`" class="navbar-brand"
            >Hiper Commerce</router-link
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="offcanvasNavbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cadastros
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="offcanvasNavbarDropdown"
                >
                  <li>
                    <router-link :to="`/usuarios`" class="dropdown-item"
                      >Usuarios</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="offcanvasNavbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Histórico
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="offcanvasNavbarDropdown"
                >
                  <li>
                    <router-link to="Bugs" class="dropdown-item"
                      >Acesso</router-link
                    >
                  </li>
                  <li>
                    <router-link to="Bugs" class="dropdown-item"
                      >Pedidos enviados</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item mr-3">
                  <strong
                    ><a
                      class="nav-link"
                      href="#"
                      rel="modal:open"
                      @click="$bvModal.show('modal-security-key')"
                      >Loja Virtual</a
                    ></strong
                  >
                  <ModalSecurityKey></ModalSecurityKey>
                </li>
                <li class="nav-item d-flex">
                  <button @click="logout" class="btn btn-logout" type="submit">
                    Sair
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import ModalSecurityKey from "../Modal/ModalSecurityKey.vue";
export default {
  components: {
    ModalSecurityKey
  },
  methods: {
    logout() {
      this.$store.dispatch("logoutUser");
    }
  }
};
</script>

<style>
.btn-logout {
  background-color: #007bff;
  color: #fff;
  font-weight: 500;
}

.btn-logout:hover {
  background-color: #005fc5;
  color: #fff;
}

.navbar {
  background-color: #fff !important;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
}

.nav-link {
  color: #1f394d !important;
}

.navbar-toggler-icon {
  color: #1f394d !important;
}

@media screen and (max-width: 1000px) {
  .navbar-toggler-icon {
    color: #1f394d !important;
  }
}
</style>
