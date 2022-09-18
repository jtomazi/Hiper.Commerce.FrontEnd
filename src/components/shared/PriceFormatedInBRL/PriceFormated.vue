<template>
  <h4>
    {{ priceFormated(this.price || "RS 0,00") }}
  </h4>
</template>

<script>
export default {
  props: {
    price: {
      type: Number
    }
  },
  methods: {
    priceFormated(price) {
      return price.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
    }
  }
};
</script>

<style scoped>
h4 {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
