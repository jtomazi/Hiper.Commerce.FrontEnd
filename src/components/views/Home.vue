<template>
  <div>
    <CardItem
      v-if="getProductsListWithOutGrid.length >= 1"
      :products="getProductsListWithOutGrid"
    ></CardItem>
    <NoContent v-else />
    <ShoppingCartButton />
  </div>
</template>

<script>
import CardItem from "../shared/CardItem/CardItem.vue";
import NoContent from "../shared/NoContent/NoContent.vue";
import ShoppingCartButton from "./ShoppingCart/ShoppingCartButton.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    CardItem,
    NoContent,
    ShoppingCartButton
  },
  computed: {
    ...mapGetters(["getProductsListWithOutGrid"])
  }
};
</script>
