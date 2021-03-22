<template>
  <div class="input">
    <label class="input__label">
      <div class="input__title">{{ label }}</div>
      <input
        :value="value"
        :type="type"
        class="input__field"
        :placeholder="placeholder"
        @input="onInput"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
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
  methods: {
    onInput(event) {
      this.$emit("on-input", event.target.value);
    },
  },
};
</script>
