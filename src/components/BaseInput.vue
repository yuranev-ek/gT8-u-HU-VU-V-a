<template>
  <div class="input">
    <label class="input__label">
      <div class="input__title">{{ label }}</div>
      <input
        :value="value"
        :type="type"
        class="input__field"
        :class="errorClass"
        :placeholder="placeholder"
        @input="onInput"
      />
      <div v-if="error" class="input__error">{{ error }}</div>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    error: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
  model: {
    prop: "value",
    event: "on-input",
  },
  computed: {
    errorClass() {
      return this.error ? "input--error" : "";
    },
  },
  methods: {
    onInput(event) {
      this.$emit("on-input", event.target.value);
    },
  },
};
</script>
