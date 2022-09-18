<template>
  <Section>
    <h5 class="title">Dados do cliente</h5>

    <div class="col-md-6">
      <LabelAndInput
        labelFor="name"
        inputId="name"
        labelValue="Nome"
        inputType="text"
      />
    </div>

    <div class="col-md-6">
      <LabelAndInput
        labelFor="email"
        inputId="email"
        labelValue="E-mail"
        inputType="text"
      />
    </div>

    <div class="col-md-3">
      <LabelAndInput
        labelFor="IE"
        inputId="IE"
        labelValue="Inscrição estadual"
        :inputMask="['###########']"
        inputType="text"
      />
    </div>

    <div class="col-md-3">
      <LabelAndInput
        labelFor="documentCPForCNPJ"
        inputId="documentCPForCNPJ"
        labelValue="CPF / CNPJ"
        :inputMask="['###.###.###-##', '##.###.###/####-##']"
        inputType="text"
      />
    </div>

    <div class="col-md-6">
      <LabelAndInput
        labelFor="nomeFantasia"
        inputId="nomeFantasia"
        labelValue="Nome fantasia"
        inputType="text"
      />
    </div>
  </Section>
</template>

<script>
import Section from "../../../shared/ProductDetails/Sections/Section/Section.vue";
import LabelAndInput from "../../../shared/LabelAndInput/LabelAndInput.vue";

export default {
  components: {
    Section,
    LabelAndInput
  },
  data() {
    return {
      document: ""
    };
  },
  computed: {}
};
</script>

