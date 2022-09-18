<template>
  <Section>
    <h5 class="title">Estoque</h5>
    <div class="col-6">
      <label class="form-label">Quantidade em estoque</label>
      <InputText
        :value="this.product.quantityInStock.toString() + ' ' + this.product.unity"
      />
    </div>
    <div class="col-6">
      <label class="form-label">Quantidade mínima em estoque</label>
      <InputText
        :value="
          this.product.minimumQuantityInStock.toString() + ' ' + this.product.unity
        "
      />
    </div>
  </Section>
</template>

<script>
import Section from "../Section/Section.vue";
import InputText from "../InputText/InputText.vue";

export default {
  name: "Inventory",
  components: {
    Section,
    InputText
  },
  props: {
    product: {
      type: Object
    }
  }
};
</script>
