<template>
  <Section>
    <h5 class="title">Grades do produto</h5>
    <div class="row">
      <div class="col-md-6 mt-3">
        <label class="form-label">Tipo de grade</label>
        <InputText :value="formatGridType" />
      </div>
    </div>
    <div class="row">
      <div
        v-if="typeVariationA != null && typeVariationA != 'undefined'"
        class="col-md-4 mt-4"
      >
        <label class="form-label">Tabela de grade 1</label>
        <InputText :value="typeVariationA" />
      </div>

      <div
        v-if="typeVariationB != null && typeVariationB != 'undefined'"
        class="col-md-4 mt-4"
      >
        <label class="form-label">Tabela de grade 2</label>
        <InputText :value="typeVariationB" />
      </div>
    </div>

    <div class="row">
      <div
        v-if="typeVariationA != null && typeVariationA != 'undefined'"
        class="col-md-4 mt-3"
      >
        <label class="form-label"
          >Opções de {{ typeVariationA.toLowerCase() }}</label
        >
        <ul>
          <li v-for="variation in this.product.variation" :key="variation.id">
            {{ variation.nameVariationA }}
          </li>
        </ul>
      </div>

      <div
        v-if="typeVariationB != null && typeVariationB != 'undefined'"
        class="col-md-4 mt-3"
      >
        <label class="form-label"
          >Opções de {{ typeVariationB.toLowerCase() }}</label
        >
        <ul>
          <li v-for="variation in this.product.variation" :key="variation.id">
            {{ variation.nameVariationB }}
          </li>
        </ul>
      </div>

      <div v-if="!isSimpleGrid" class="col-md-4 mt-3">
        <label class="form-label">{{
          typeVariationA + " e " + typeVariationB
        }}</label>
        <ul>
          <li v-for="variation in this.product.variation" :key="variation.id">
            {{ variation.nameVariationA + " / " + variation.nameVariationB }}
          </li>
        </ul>
      </div>

      <div class="d-flex justify-content-center">
        <hr class="grid-divisor col-11" />
      </div>

      <div class="col-md-12 mt-3">
        <h5 class="title">Detalhes da grade</h5>
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Grade</th>
              <th scope="col">Código de barras</th>
              <th scope="col">Estoque</th>
              <th scope="col">Situação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="variation in this.product.variation" :key="variation.id">
              <td>
                <InputText
                  :value="
                    getNameGrid(
                      variation.nameVariationA,
                      variation.nameVariationB
                    )
                  "
                />
              </td>
              <td>
                <InputText
                  :value="getProductByGridId(variation.id).barCode"
                />
              </td>
              <td>
                <InputText
                  :value="getProductByGridId(variation.id).quantityInStock.toString()"
                />
              </td>
              <td>
                <InputText
                  :class="{
                    'product-is-inactive': !getProductByGridId(variation.id)
                      .active,
                    'product-is-active': getProductByGridId(variation.id).active
                  }"
                  :value="!getProductByGridId(variation.id).active ? 'Inativo' : 'Ativo'"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Section>
</template>

<script>
import Section from "../Section/Section.vue";
import InputText from "../InputText/InputText.vue";

export default {
  name: "ProductGrids",
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
    formatGridType() {
      return this.product.variation[0].typeVariationA &&
        this.product.variation[0].typeVariationB != null
        ? "Grade composta"
        : "Grade simples";
    },
    isSimpleGrid() {
      return this.formatGridType == "Grade simples" ? true : false;
    },
    typeVariationA() {
      return this.product.variation[0].typeVariationA;
    },
    typeVariationB() {
      return this.product.variation[0].typeVariationB;
    }
  },
  methods: {
    getProductByGridId(id) {
      return this.$store.state.products.find(prod => prod.id === id);
    },
    getNameGrid(nomeVariacaoA, nomeVariacaoB) {
      return nomeVariacaoA && nomeVariacaoB != null
        ? nomeVariacaoA + " / " + nomeVariacaoB
        : nomeVariacaoA || nomeVariacaoB;
    }
  }
};
</script>

<style>
ul {
  margin: 0 !important;
  padding: 0 !important;
}

li {
  list-style: none !important;
}

.grid-divisor {
  margin: 2.5rem 0 0.8rem 0 !important;
  height: 0.5px !important;
}
</style>
