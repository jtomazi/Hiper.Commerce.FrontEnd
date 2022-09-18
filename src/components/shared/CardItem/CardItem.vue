<template>
  <div>
    <h2>Produtos</h2>
    <ul class="product-list">
      <li class="produtos" v-for="product in products" :key="product.id">
        <div>
          <header>
            <p class="product-type">{{ getProductType(product) }}</p>
            <ProductImage :productImage="product.image"></ProductImage>
            <hr />
          </header>
          <body class="product-information">
            <PriceFormated :price="product.price" />
            <h6>Estoque: {{ product.quantityInStock }}</h6>
            <p class="product-name">
              {{ product.code }} - {{ product.name }}
            </p>
          </body>
          <footer class="d-flex justify-content-between">
            <router-link :to="`/produto/${product.id}`" class="button">
              Visualizar
            </router-link>
            <AddToCart :product="product" />
          </footer>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductImage from "../../Images/Image.vue";
import AddToCart from "./AddToCart/AddToCart.vue";
import PriceFormated from "../PriceFormatedInBRL/PriceFormated.vue";

export default {
  components: {
    ProductImage,
    AddToCart,
    PriceFormated
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      guidEmpty: "00000000-0000-0000-0000-000000000000"
    };
  },
  methods: {
    productWithGrid(product) {
      if (product.grid && product.primaryProductId == this.guidEmpty)
        return true;

      return false;
    },
    getProductType(product) {
      return this.productWithGrid(product)
        ? "Produto com grade"
        : "Produto simples";
    }
  }
};
</script>

<style>
.product-list {
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.product-list li {
  background-color: #fefefe;
  color: #1f394d;

  display: inline-block;
  text-align: left;

  width: 25%;
  height: fit-content;
  vertical-align: top;
  z-index: 1;
  min-width: 210px;

  margin: 2% 2% 2%;
  padding: 5px 20px;
  box-sizing: border-box;

  border: 1px solid #ccc;
  border-radius: 7px;
  transition: 0.3s;
}

.product-list li:hover {
  box-shadow: 0px 8px 0.8em #00000030;
  transform: scale(1.01);
}

.product-name {
  height: 3rem !important;
}

hr {
  height: 0.5px !important;
}

.productWithGrid p {
  margin: 0;
}

.productWithGrid {
  padding-bottom: 1rem !important;
}

.product-barcode {
  font-style: italic;
  font-size: 14px;
  letter-spacing: 1px;

  margin-bottom: 1rem !important;
}

.product-type {
  margin: 0;
  text-align: right;
  font-style: italic;
  font-size: 13px;
}
</style>
