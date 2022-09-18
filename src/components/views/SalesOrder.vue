<template>
  <main>
    <ClientDetails />
    <DeliveryAdress />
    <BillingAdress />
  </main>
</template>

<script>
import ClientDetails from "./SalesOrder/ClientDetails/ClientDetails.vue";
import DeliveryAdress from "./SalesOrder/Adress/DeliveryAdress/DeliveryAdress.vue";
import BillingAdress from "./SalesOrder/Adress/BillingAdress/BillingAdress.vue";

export default {
  name: "SalesOrder",
  components: {
    ClientDetails,
    DeliveryAdress,
    BillingAdress
  }
};
</script>
