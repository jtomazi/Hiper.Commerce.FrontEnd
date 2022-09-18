<template>
  <div>
    <router-link :to="`/carrinho`" class="button">
      <span
        class="d-flex align-items-center justify-content-center shopping-cart"
      >
        <i class="fa-solid fa-basket-shopping"></i>
      </span>
      <p
        v-if="getProductsInShoppingCart.length >= 1"
        class="shopping-cart-quantity"
      >
        {{ getProductsInShoppingCart.length }}
      </p>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProductsInShoppingCart"])
  }
};
</script>

<style scoped>
.shopping-cart {
  position: fixed;
  z-index: 999;

  width: 60px;
  height: 60px;

  background-color: #007bff;
  border-radius: 50%;
  border: 0;

  bottom: 30px;
  right: 30px;
  padding: 20px;

  transition: all 0.2s linear;
}

.shopping-cart svg {
  color: #fafafa;
  font-size: 25px;
}

.shopping-cart-quantity {
  color: #fafafa;
  position: fixed;
  z-index: 999;

  bottom: 55px;
  right: 25px;
  padding: 6px;

  background-color: #6a4b9d;
  border: 1px solid #fafafa;
  border-radius: 10px;

  font-size: 0.9rem !important;

  transition: all 0.2s linear;
}

.shopping-cart:hover {
  animation: ShakeIt 0.1s infinite;
  animation-iteration-count: 3;
}

@keyframes ShakeIt {
  0% {
    transform: rotate(-7deg);
  }
  100% {
    transform: rotate(7deg);
  }
}
</style>
