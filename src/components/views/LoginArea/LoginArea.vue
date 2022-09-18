<template>
  <main>
    <section class="d-flex justify-content-center align-items-center">
      <div class="login-card">
        <div></div>
        <router-view> </router-view>
      </div>
    </section>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
* {
  color: #1e394e;
  letter-spacing: 0.7px;
}

.login-card {
  box-shadow: 0 10px 30px 10px #00000023;
  background: #fff;

  border-radius: 5px;

  height: 100%px;
  width: 400px;
}

.alert {
  margin: 0px 10px 0px 10px;
  padding: 7px !important;

  width: 70%;
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
