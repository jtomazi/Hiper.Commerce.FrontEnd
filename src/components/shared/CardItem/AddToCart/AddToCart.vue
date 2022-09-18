<template>
  <input
    class="add-item-to-cart"
    type="image"
    src="src\assets\add-item.svg"
    title="Adicionar ao carrinho"
    @click="addItem"
  />
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addItem() {
      let productCart = this.createNewObjectByProduct(this.product, [
        "id",
        "name",
        "quantityInStock",
        "minimumQuantityInStock",
        "unity",
        "price",
        "code",
        "barCode",
        "image"
      ]);

      productCart["orderQuantity"] = Number(1);

      this.$store.dispatch("setProductInShoppingCart", productCart);
    },
    //criar um novo objeto apenas com os dados necessários do produto, para inserir no carrinho.
    createNewObjectByProduct(object, types) {
      return types.reduce((obj, type) => {
        return {
          ...obj,
          [type]: object[type]
        };
      }, {});
    }
  }
};
</script>

<style>
.add-item-to-cart {
  position: relative;
  width: 45px;
  height: 45px;
  padding: 11px;
  opacity: 0;
  background-color: #007bff;
  border-radius: 50%;
  left: 6%;
  transition: opacity 0.3s linear;
}

.product-list li:hover .add-item-to-cart {
  opacity: 1;

  animation: ShakeIt 0.1s infinite;
  animation-iteration-count: 3;
}

@keyframes ShakeIt {
  0% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}
</style>
