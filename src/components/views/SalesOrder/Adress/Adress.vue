<template>
  <Section>
    <h5 class="title">{{ title }}</h5>

    <div class="col-md-2">
      <LabelAndInput
        labelFor="CEP"
        inputId="CEP"
        labelValue="CEP"
        :inputMask="['##.###-###']"
        inputType="text"
        ref="inputCEP"
        v-model="CEP"
        @input="sendValueToStore($event, $refs.inputCEP.inputId)"
      />
    </div>

    <div class="col-md-2">
      <LabelAndInput
        labelFor="ibge"
        inputId="ibge"
        labelValue="Código IBGE"
        :inputMask="['###########']"
        inputType="text"
        ref="inputIbge"
        v-model="ibge"
        @input="sendValueToStore($event, $refs.inputIbge.inputId)"
      />
    </div>

    <div class="col-md-8">
      <LabelAndInput
        labelFor="logradouro"
        inputId="logradouro"
        labelValue="Logradouro"
        inputType="text"
        ref="inputLogradouro"
        v-model="logradouro"
        @input="sendValueToStore($event, $refs.inputLogradouro.inputId)"
      />
    </div>

    <div class="col-md-4">
      <LabelAndInput
        labelFor="numero"
        inputId="numero"
        labelValue="Número"
        :inputMask="['##########']"
        inputType="text"
        ref="inputNumero"
        v-model="numero"
        @input="sendValueToStore($event, $refs.inputNumero.inputId)"
      />
    </div>

    <div class="col-md-4">
      <LabelAndInput
        labelFor="complemento"
        inputId="complemento"
        labelValue="Complemento "
        inputType="text"
        ref="inputComplemento"
        v-model="complemento"
        @input="sendValueToStore($event, $refs.inputComplemento.inputId)"
      />
    </div>

    <div class="col-md-4">
      <LabelAndInput
        labelFor="bairro"
        inputId="bairro"
        labelValue="Bairro "
        inputType="text"
        ref="inputBairro"
        v-model="bairro"
        @input="sendValueToStore($event, $refs.inputBairro.inputId)"
      />
    </div>

    <div v-if="isDeliveryAdress" class="col-md-12">
      <Checkbox
        id="adressCheckBox"
        :text="'Usar este endereço também como endereço de cobrança.'"
        @onChanged="changeCheckBoxStatus($event)"
      />
    </div>
  </Section>
</template>

<script>
import Section from "../../../shared/ProductDetails/Sections/Section/Section.vue";
import LabelAndInput from "../../../shared/LabelAndInput/LabelAndInput.vue";
import Checkbox from "../../../shared/Checkbox/Checkbox.vue";

export default {
  components: {
    Section,
    LabelAndInput,
    Checkbox
  },
  data() {
    return {
      bairro: "",
      complemento: "",
      numero: "",
      logradouro: "",
      ibge: "",
      CEP: ""
    };
  },
  props: {
    title: {
      type: String
    },
    isDeliveryAdress: {
      type: Boolean
    }
  },
  methods: {
    changeCheckBoxStatus(active) {
      if (active) {
        this.bairro = "Teste";
      }
    },
    sendValueToStore(value, inputName) {
      let adress = {};
      Object.defineProperty(adress, `${inputName}`, {
        value: value,
        writable: true
      });

      let propertyName = Object.getOwnPropertyNames(adress);
    }
  }
};
</script>
