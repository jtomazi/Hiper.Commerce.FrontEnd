<template>
  <Section class="section-product-images">
    <h5 class="title">Imagens</h5>
    <div class="col-md-4">
      <label class="form-label">Imagem principal</label>
      <ProductImage class="image" :productImage="product.image"></ProductImage>
    </div>
    <div class="col-md-8">
      <label class="form-label">Imagens adicionais</label>
      <AditionalImages
        v-if="product.additionalImages.length > 0"
        :additionalImages="product.additionalImages"
      />
      <div v-else class="no-aditional-image col-md-8">
        <p>Sem imagens adicionais.</p>
      </div>
    </div>
  </Section>
</template>

<script>
import Section from "../Section/Section.vue";
import ProductImage from "../../../../Images/Image.vue";
import AditionalImages from "../Images/AditionalImages/AditionalImages.vue";

export default {
  name: "ProductImages",
  components: {
    Section,
    ProductImage,
    AditionalImages
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.image {
  border: 1px solid #ccc !important;
  border-radius: 3px;

  padding: 0 15px;
}

.section-product-images {
  padding-bottom: 5% !important;
}

.no-aditional-image {
  font-style: italic;

  color: #664d03;
  background-color: #fff3cd;
  border: 2px solid #ffecb5;
}

.no-aditional-image p {
  margin: 0 !important;
  padding: 10px !important;
}
</style>
