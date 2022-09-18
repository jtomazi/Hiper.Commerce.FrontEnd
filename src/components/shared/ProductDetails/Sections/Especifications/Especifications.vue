<template>
  <Section>
    <h5 class="title">Especificações</h5>
    <div class="col-6">
      <label class="form-label">Altura</label>
      <InputText :value="this.product.height.toString() + ' ' + this.siglaMedidaCentimetro" />
    </div>
    <div class="col-6">
      <label class="form-label">Largura</label>
      <InputText :value="this.product.width.toString() + ' ' + this.siglaMedidaCentimetro" />
    </div>
    <div class="col-6">
      <label class="form-label">Comprimento</label>
      <InputText :value="this.product.length.toString() + ' ' + this.siglaMedidaCentimetro" />
    </div>
    <div class="col-6">
      <label class="form-label">Peso</label>
      <InputText :value="this.product.weight.toString() + ' ' + this.siglaPesoKg" />
    </div>
  </Section>
</template>

<script>
import Section from "../Section/Section.vue";
import InputText from "../InputText/InputText.vue";

export default {
  name: "Especifications",
  components: {
    Section,
    InputText
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      siglaMedidaCentimetro: "cm",
      siglaPesoKg: "kg"
    };
  }
};
</script>
