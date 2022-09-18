<template>
  <div class="d-flex align-items-center justify-content-center">
    <div class="error-message d-flex justify-content-center align-items-center">
      <p class="alert alert-danger" v-if="errorMessage">
        {{ errorMessage }}
      </p>
    </div>

    <table class="table table-striped">
      <thead>
        <tr class="tr-header">
          <th scope="col">Id</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Data de cadastro</th>
          <th class="d-flex align-items-center justify-content-end" scope="col">
            <span>Ações</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in getUsersDatabase" :key="user.id">
          <td>
            {{ user.id }}
          </td>
          <td>
            {{ user.name }}
          </td>
          <td>
            {{ user.email }}
          </td>
          <td>
            {{ formatDate(user.creationDate) }}
          </td>
          <td class="d-flex align-items-center justify-content-end">
            <ul>
              <li>
                <a
                  class="users-icon nav-link"
                  href="#"
                  id="offcanvasNavbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="offcanvasNavbarDropdown"
                >
                  <li class="d-flex align-items-center justify-content-center">
                    <router-link
                      :to="`/usuarios/editar/${user.id}`"
                      class="dropdown-item"
                      >Editar <i class="ml-2 fa-solid fa-pencil"></i
                    ></router-link>
                  </li>
                  <li>
                    <router-link
                      @click.native="deleteUser(user.id)"
                      to=""
                      class="dropdown-item"
                      >Excluir <i class="ml-2 fa-solid fa-trash-can"></i
                    ></router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      errorMessage: ""
    };
  },
  beforeMount() {
    this.$store
      .dispatch("getUsers")
      .then()
      .catch(erro => {
        this.errorMessage = erro;
      });
  },
  computed: {
    ...mapGetters(["getUsersDatabase"])
  },
  methods: {
    formatDate(userCreationDate) {
      let date = new Date(userCreationDate);
      return date.toLocaleString("pt-br");
    },

    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
    }
  }
};
</script>

<style scoped>
.tr-header {
  margin-bottom: 1px solid #ccc !important;
}

.dropdown-item {
  padding: 0.3rem 2.35rem !important;
}

.users-icon {
  margin-right: 5px;
}

.users-table {
  width: 90%;
}

ul {
  margin: 0 !important;
}

td {
  vertical-align: middle;
}

li {
  font-size: 0.9rem;
}

.table th {
  border: none !important;
}
</style>
