<template>
  <Section>
    <h2>Usuários</h2>
    <router-view> </router-view>
  </Section>
</template>

<script>
import Section from "../shared/ProductDetails/Sections/Section/Section.vue";
export default {
  components: {
    Section
  }
};
</script>
