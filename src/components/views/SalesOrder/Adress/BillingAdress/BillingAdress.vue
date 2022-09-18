<template>
  <Adress :title="'Endereço de cobrança'" :isDeliveryAdress="false" />
</template>

<script>
import Adress from "../Adress.vue";

export default {
  components: {
    Adress
  }
};
</script>
