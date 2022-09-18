<template>
  <input type="text" class="form-control" disabled :value="this.value" />
</template>

<script>
export default {
  name: "InputText",
  props: {
    value: {
      type: String || Number,
      required: true
    }
  }
};
</script>
