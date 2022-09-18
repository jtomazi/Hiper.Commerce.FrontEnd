<template>
  <section class="row g-4">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "Section"
};
</script>

<style>
section {
  margin: 1.5rem 0 !important;
  padding: 1rem;
  padding-bottom: 1.75rem !important;

  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 3px;

  box-shadow: 0px 0px 5px 0 rgb(0 0 0 / 15%);
}
</style>
