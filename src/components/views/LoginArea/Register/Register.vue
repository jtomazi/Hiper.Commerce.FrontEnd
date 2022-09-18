<template>
  <div>
    <div class="error-message d-flex justify-content-center align-items-center">
      <p class="alert alert-danger" v-if="errorMessage">
        {{ errorMessage }}
      </p>
    </div>
    <form class="form" @submit.prevent="createUser">
      <div class="input d-flex align-items-center flex-column mr-3 ml-3 mb-3">
        <label class="login-label-inputs align-self-start" for="nome"
          >Nome</label
        >
        <input
          class="login-inputs-fields"
          id="nome"
          type="text"
          v-model="user.name"
        />
      </div>
      <div class="input d-flex align-items-center flex-column mr-3 ml-3 mb-3">
        <label class="login-label-inputs align-self-start" for="email"
          >E-mail</label
        >
        <input
          class="login-inputs-fields"
          id="email"
          type="email"
          v-model="user.email"
        />
      </div>
      <div class="input d-flex align-items-center flex-column mr-3 ml-3 mb-3">
        <label class="login-label-inputs align-self-start" for="password"
          >Senha</label
        >
        <input
          class="login-inputs-fields"
          id="password"
          type="password"
          v-model="user.password"
        />
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <router-link
          @click.native="createUser"
          :to="`/login/register`"
          class="register-button mt-4"
        >
          Cadastrar-se
        </router-link>
      </div>
      <div class="mt-3 d-flex justify-content-center align-items-center">
        <router-link :to="`/login`">
          Voltar
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      errorMessage: ""
    };
  },

  methods: {
    createUser() {
      this.$store
        .dispatch("createNewUser", this.user)
        .then(res => {
          this.errorMessage = "";
          this.$router.push("/login");
        })
        .catch(error => {
          this.errorMessage = error.response.data.errors[0] || error;
          console.error(error.response.data.errors[0] || error);
        });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
* {
  color: #1e394e;
  letter-spacing: 0.7px;
}

.form {
  padding: 8% 0;
}

.login-inputs-fields {
  width: 81%;
}

.login-label-inputs {
  margin-left: 35px;
}

.register-button {
  padding: 8px 0;
  border: 1px solid #663399;
  width: 75%;
  border-radius: 10px;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #663399;
  background-color: transparent;

  transition: all 0.3s;
  outline: none;
}

.register-button:hover {
  text-decoration: none !important;
  color: #fff;
  background-color: #663399;
}

.alert {
  padding: 7px !important;

  width: 75%;
}

section {
  height: 100vh;
  width: 100%;

  background: linear-gradient(44deg, #663399, #663399, #6699ff, #6699ff);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

input {
  border: 2px solid #d4d4d4;
  border-radius: 10px;

  padding: 5px;
}

h2 {
  margin-top: 2.5rem;
  text-align: center;
}

h2 img {
  margin-right: 1rem;
}

h2 h4 {
  padding-left: 0.75rem;
  border-left: 2.5px solid #1e394e;
}

label {
  color: #1f394d;
}

p {
  font-weight: 400;
  line-height: 2;
  text-align: center;

  color: #1f394d;

  margin: 1.5rem 0rem 0rem 0rem;
}

p,
label {
  font-family: "Open Sans";
  font-size: 14px;
}
</style>
