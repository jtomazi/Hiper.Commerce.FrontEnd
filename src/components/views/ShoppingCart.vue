<template>
  <Section>
    <h5 class="title">Carrinho de compras</h5>
    <ShoppingCartEmpty v-if="getProductsInShoppingCart.length <= 0" />
    <ul v-else>
      <ShoppingCartHeader />
      <li
        v-for="product in getProductsInShoppingCart"
        :key="product.id"
        class="shopping-cart-line-item"
      >
        <div class="row d-flex align-items-center justify-content-around">
          <div class="col-md-5">
            <InputText :value="product.code + ' - ' + product.name" />
          </div>

          <div class="col-md-2">
            <input
              type="text"
              class="form-control text-center"
              :value="product.orderQuantity"
              @blur="updateQuantityProduct($event, product.id)"
            />
          </div>

          <div class="col-md-2">
            <PriceFormated :price="product.price" />
          </div>

          <div class="col-md-2">
            <PriceFormated
              :price="product.orderQuantity * product.price"
            />
          </div>

          <div
            class="col-md-1 close-icon-shopping-cart d-flex justify-content-center"
            @click="deleteProduct(product.id)"
          >
            <i class="fa fa-times no-margin"></i>
          </div>
        </div>
      </li>
      <div class="row">
        <div class="col-12">
          <div
            class="shopping-cart-total-value title d-flex justify-content-end align-items-center mt-4 mb-4"
          >
            <p class="label-total-value">Total do carrinho:</p>
            <p class="total-value">
              <PriceFormated :price="getTotalValueShoppingCart" />
            </p>
          </div>
        </div>
      </div>
      <div
        class="shopping-cart-buttons d-flex align-items-center justify-content-end"
      >
        <button
          type="button"
          @click="cleanShoppingCart()"
          class="btn btn-light"
        >
          Limpar carrinho
        </button>
        <router-link :to="`pedido-de-venda`">
          <button type="button" class="btn btn-outline-primary">
            Finalizar pedido
          </button>
        </router-link>
      </div>
    </ul>
  </Section>
</template>

<script>
import Section from "../shared/ProductDetails/Sections/Section/Section.vue";
import InputText from "../shared/ProductDetails/Sections/InputText/InputText.vue";
import ProductImage from "../Images/Image.vue";
import PriceFormated from "../shared/PriceFormatedInBRL/PriceFormated.vue";
import ShoppingCartEmpty from "./ShoppingCart/ShoppingCartEmpty.vue";
import ShoppingCartHeader from "./ShoppingCart/ShoppingCartHeader.vue";
import { mapGetters } from "vuex";

export default {
  name: "ShoppingCart",
  components: {
    Section,
    InputText,
    ProductImage,
    PriceFormated,
    ShoppingCartEmpty,
    ShoppingCartHeader
  },
  data() {
    return {
      products: []
    };
  },
  computed: {
    ...mapGetters(["getProductsInShoppingCart", "getTotalValueShoppingCart"])
  },
  methods: {
    deleteProduct(ProductId) {
      this.$store.dispatch("deleteProductInShoppingCart", ProductId);
    },
    updateQuantityProduct(ev, productId) {
      let productToUpdate = {
        quantity: ev.target.value,
        id: productId
      };

      this.$store.dispatch(
        "updateProductQuantityInShoppingCart",
        productToUpdate
      );
    },
    cleanShoppingCart() {
      this.$store.dispatch("cleanShoppingCart");
    }
  }
};
</script>

<style scoped>
.shopping-cart-line-item {
  margin-top: 1rem;
  padding-bottom: 1rem;

  border-bottom: 1px solid #eee;
}
.close-icon-shopping-cart svg {
  padding: 10px;
  transition: 0.3s;
}

.close-icon-shopping-cart svg:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}

.shopping-cart-buttons button {
  margin-left: 2rem;

  padding: 1rem 2rem;
  font-size: 1.15rem;
}

.shopping-cart-total-value p {
  margin: 1.2rem 0 1.2rem 0.7rem;
}

.label-total-value {
  font-size: 1.5rem;
}
</style>
