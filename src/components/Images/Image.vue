<template>
  <img loading="lazy" class="img" alt="Imagem do produto" :src="srcImage" />
</template>

<script>
export default {
  props: {
    productImage: {
      type: String || null
    }
  },
  data() {
    return {
      srcImage: ""
    };
  },
  mounted() {
    this.srcImage =
      this.productImage != null
        ? this.productImage
        : "src\\assets\\images\\no-content.png";
  }
};
</script>

<style scoped>
.img {
  min-height: 235.5px;
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
