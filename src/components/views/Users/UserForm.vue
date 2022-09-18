<template>
  <form class="form" @submit.prevent="checkData">
    <div class="col-12 d-flex justify-content-center align-items-center">
      <p class="col-12 alert alert-danger" v-if="errorMessage">
        {{ errorMessage }}
      </p>
    </div>

    <div class="row mt-4">
      <div class="col-4">
        <label class="form-label" for="name">Nome</label>
        <input id="name" type="text" class="form-control" v-model="user.name" />
      </div>

      <div class="col-4">
        <label for="email">E-mail</label>
        <input
          id="email"
          type="email"
          class="form-control"
          v-model="user.email"
        />
      </div>

      <div class="col-4">
        <label for="password">Senha</label>
        <input
          id="password"
          type="password"
          class="form-control"
          v-model="user.password"
        />
      </div>
    </div>
    <div class="d-flex justify-content-end align-items-center">
      <button class="save-user-button btn mt-4" type="submit">Salvar</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: {},
      errorMessage: ""
    };
  },
  mounted() {
    if (this.id != "") {
      let userLoaded = this.$store.state.usersDatabase.find(
        user => user.id == this.id
      );

      this.user = userLoaded;
      return this.user;
    }
  },
  methods: {
    checkData() {
      this.$store
        .dispatch("checkDataOnUpdate", this.user)
        .then(res => {
          this.errorMessage = "";
          this.$router.push("/usuarios");
        })
        .catch(error => {
          this.errorMessage = error.response.data.errors[0] || error;
        });
    }
  }
};
</script>

<style scoped>
.save-user-button {
  background-color: #007bff;
  color: #fff;
  font-weight: 500;

  width: 10%;
}
</style>
