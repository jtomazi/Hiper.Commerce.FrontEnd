<template>
  <ul class="list-product-images">
    <li v-for="aditionalImage in additionalImages" :key="aditionalImage.id">
      <div class="aditional-image">
        <img :src="aditionalImage.image" alt="Imagem adicional" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AditionalImages",
  props: {
    additionalImages: {
      type: Array
    }
  }
};
</script>

<style>
.aditional-image img {
  width: 116px;
  height: 116px;

  border: 1px solid #ccc !important;
  border-radius: 4px;
}

.list-product-images {
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
}

.list-product-images li {
  margin-right: 1rem;
}
</style>
