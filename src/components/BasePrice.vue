<template>
  <span>{{ price }}</span>
</template>

<script>
export default {
  name: "BasePrice",
  props: {
    currency: {
      type: String,
      default: "$",
      required: true,
    },
    value: {
      type: [Number, String],
      default: 0,
      required: true,
    },
  },
  computed: {
    price() {
      return `${this.currency} ${this.value}`;
    },
  },
};
</script>
