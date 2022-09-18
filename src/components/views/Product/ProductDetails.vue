<template>
  <div>
    <main>
      <GeralData :product="loadProductbyPropsId" />
      <Inventory :product="loadProductbyPropsId" />
      <Especifications :product="loadProductbyPropsId" />
      <ProductImage v-if="hasImage" :product="loadProductbyPropsId" />
      <ProductGrids v-if="hasGrid" :product="loadProductbyPropsId" />
    </main>
  </div>
</template>

<script>
import GeralData from "../../shared/ProductDetails/Sections/GeralData/GeralData.vue";
import Inventory from "../../shared/ProductDetails/Sections/Inventory/Inventory.vue";
import Especifications from "../../shared/ProductDetails/Sections/Especifications/Especifications.vue";
import ProductImage from "../../shared/ProductDetails/Sections/Images/ProductImages.vue";
import ProductGrids from "../../shared/ProductDetails/Sections/Grids/ProductGrids.vue";

export default {
  components: {
    GeralData,
    Inventory,
    Especifications,
    ProductImage,
    ProductGrids
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: {},
      guidEmpty: "00000000-0000-0000-0000-000000000000"
    };
  },
  mounted() {
    this.loadProductbyId;
    window.scrollTo(0, 0);
  },
  computed: {
    hasGrid() {
      return (
        this.product.grid && this.product.primaryProductId == this.guidEmpty
      );
    },
    hasImage() {
      return this.product.image != null && this.product.image != "undefined";
    },
    loadProductbyPropsId() {
      if (this.id != "") {
        let productLoaded = this.$store.state.products.find(
          prod => prod.id === this.id
        );

        this.product = productLoaded;
        return this.product;
      }
    }
  }
};
</script>

<style>
label {
  color: #555;
  font-size: 15px;
  font-weight: 600;
}

.form-group {
  margin-top: 2% !important;
}

.image img {
  border: 1px solid #ccc;

  padding: 10px;
}

.title {
  color: #666 !important;

  margin: 0 !important;
}
</style>
