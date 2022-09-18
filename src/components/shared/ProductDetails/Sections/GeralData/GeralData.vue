<template>
  <Section>
    <h5 class="title">Dados gerais do produto</h5>
    <div class="col-md-4">
      <label class="form-label">Nome</label>
      <InputText :value="this.product.name" />
    </div>
    <div class="col-md-4">
      <label class="form-label">Preço de venda</label>
      <InputText :value="priceFormated(this.product.price)" />
    </div>
    <div class="col-md-4">
      <label class="form-label">Situação</label>
      <InputText
        :class="{
          'product-is-inactive': productIsInactive,
          'product-is-active': !productIsInactive
        }"
        :value="productIsInactive ? 'Inativo' : 'Ativo'"
      />
    </div>
    <div class="col-12">
      <label class="form-label">Descrição</label>
      <textarea
        rows="4"
        class="form-control"
        disabled
        v-model="getDescription"
      />
    </div>
    <div class="col-6">
      <label class="form-label">Código interno</label>
      <InputText :value="this.product.code.toString()" />
    </div>
    <div class="col-6">
      <label class="form-label">Código de barras</label>
      <InputText :value="this.product.barCode || ''" />
    </div>
    <div class="col-4">
      <label class="form-label">Categoria</label>
      <InputText :value="this.product.category || ''" />
    </div>
    <div class="col-4">
      <label class="form-label">Marca</label>
      <InputText :value="this.product.brand || ''" />
    </div>
    <div class="col-4">
      <label class="form-label">NCM</label>
      <InputText :value="this.product.ncm" />
    </div>
  </Section>
</template>

<script>
import Section from "../Section/Section.vue";
import InputText from "../InputText/InputText.vue";

export default {
  name: "GeralData",
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
  computed: {
    getDescription() {
      return this.product.description;
    },
    productIsInactive() {
      return !this.product.active;
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

<style>
.product-is-inactive {
  color: #664d03;
  background-color: #fff3cd !important;

  border: 2px solid #ffecb5;
  font-style: italic;
}

.product-is-active {
  color: #055160;
  background-color: #cff4fc !important;

  border: 2px solid #b6effb;
  font-style: italic;
}
</style>
