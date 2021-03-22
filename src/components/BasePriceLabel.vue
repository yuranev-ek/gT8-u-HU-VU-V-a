<template>
  <div class="price-label" :class="additionalClasses">
    <slot name="label">
      <span>{{ label }}</span>
    </slot>
    <slot name="price">
      <base-price :value="price.value" :currency="price.currency" />
    </slot>
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
