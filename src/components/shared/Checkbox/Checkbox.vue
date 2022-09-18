<template>
  <div class="check-box-input form-check form-switch">
    <input
      @change="changed"
      class="form-check-input"
      type="checkbox"
      role="switch"
      :id="id"
    />
    <label class="form-check-label" :for="id">{{ text }}</label>
  </div>
</template>

<script>
export default {
  emits: ["onChanged"],
  props: {
    id: {
      type: String,
      default: "checkbox"
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    changed(ev) {
      this.$emit("onChanged", ev.target.checked);
    }
  }
};
</script>

<style scoped>
.check-box-input {
  margin-left: 1.2rem !important;
}

.form-check {
  margin-bottom: 0 !important;
}

.check-box-input label {
  font-size: 0.9rem !important;
}
</style>
