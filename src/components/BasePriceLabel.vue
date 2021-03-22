<template>
  <div class="price-label" :class="additionalClasses">
    <span>{{ label }}</span>
    <base-price :value="price.value" :currency="price.currency" />
  </div>
</template>

<script>
import BasePrice from "@/components/BasePrice.vue";
export default {
  name: "BasePriceLabel",
  components: {
    BasePrice,
  },
  props: {
    price: {
      type: Object,
      default() {
        return {
          value: null,
          currency: null,
        };
      },
    },
    label: {
      type: String,
      default: null,
      required: true,
    },
    additionalClasses: {
      type: String,
    },
  },
};
</script>
