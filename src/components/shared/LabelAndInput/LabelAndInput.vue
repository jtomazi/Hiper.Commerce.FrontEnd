<template>
  <div>
    <label :for="labelFor" class="form-label">{{ labelValue }}</label>
    <input
      v-if="inputMask != undefined"
      v-mask="inputMask"
      :value="value"
      @input="onInput"
      :id="inputId"
      :type="inputType"
      class="form-control"
    />

    <input
      v-else
      :value="value"
      @input="onInput"
      :id="inputId"
      :type="inputType"
      class="form-control"
    />
  </div>
</template>

<script>
export default {
  props: {
    labelFor: {
      type: String
    },
    labelValue: {
      type: String,
      required: true
    },
    inputMask: {
      type: Array
    },
    inputId: {
      type: String
    },
    inputType: {
      type: String
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(ev) {
      this.$emit("input", ev.target.value);
    }
  }
};
</script>
