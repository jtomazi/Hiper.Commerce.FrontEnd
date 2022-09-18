<template>
  <div>
    <h2 class="d-flex justify-content-center">
      <img
        src="src\assets\images\icon-top-bar-logo-hiper-menu.svg"
        alt="logo"
        width="111.23"
        height="30"
      />
      <h4>Loja Virtual</h4>
    </h2>
    <p>Bem vindo ao Loja Virtual!</p>

    <div class="error-message d-flex justify-content-center align-items-center">
      <p class="alert alert-danger" v-if="errorMessage">
        {{ errorMessage }}
      </p>
    </div>

    <form class="form" @submit.prevent="checkCredentials">
      <div class="input d-flex align-items-center flex-column m-3 ms-5 me-5">
        <label class="login-label-inputs align-self-start" for="user"
          >E-mail</label
        >
        <input
          class="login-inputs-fields"
          id="user"
          type="text"
          v-model="user.login"
        />
      </div>
      <div class="input d-flex align-items-center flex-column m-3 ms-5 me-5">
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
        <button class="login-button mt-4" type="submit">Entrar</button>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <router-link
          :to="`/login/register`"
          class="register-button mt-4"
          type="submit"
        >
          Cadastrar-se
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
    checkCredentials() {
      this.$store
        .dispatch("checkUserCredentials", this.user)
        .then(res => {
          this.errorMessage = "";
          this.$router.push("/");
        })
        .catch(error => {
          this.errorMessage = error.response.data.errors[0] || error;
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

.login-inputs-fields {
  width: 81%;
}

.login-label-inputs {
  margin-left: 35px;
}

.login-card {
  box-shadow: 0 10px 30px 10px #00000023;
  background: #fff;

  border-radius: 5px;

  height: 450px;
  width: 400px;
}

.login-button {
  border: none;
  width: 75%;
  height: 40px;
  border-radius: 10px;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  background-color: #663399;

  transition: all 0.4s;
  outline: none;
}

.login-button:hover {
  background-color: #4c1385;
}

.register-button {
  padding: 8px 0;
  margin-bottom: 8%;

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
  margin: 0 10px;
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

  margin: 1.5rem 0rem 0.5rem 0rem;
}

p,
label {
  font-family: "Open Sans";
  font-size: 14px;
}
</style>
