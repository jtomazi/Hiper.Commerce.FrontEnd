<template>
  <Adress :title="'Endereço de entrega'" :isDeliveryAdress="true" />
</template>

<script>
import Adress from "../Adress.vue";

export default {
  components: {
    Adress
  }
};
</script>
