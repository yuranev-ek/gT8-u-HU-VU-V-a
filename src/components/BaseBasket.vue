<template>
  <div class="basket">
    <div class="basket__container basket__container--border">
      <div class="basket__inner">
        <h3 class="h3 basket__title">{{ title }}</h3>
        <base-basket-list
          v-if="basketItems.length"
          :basket-items="basketItems"
        />
        <span v-else>No selected items</span>
      </div>
    </div>
    <div class="basket__container basket__container--border">
      <div class="basket__inner">
        <form-promo-code />
      </div>
    </div>
    <div class="basket__container">
      <div class="basket__inner">
        <base-price-label
          v-for="cost of allCosts"
          :key="cost.label"
          :price="cost.price"
          :label="cost.label"
          :additional-classes="cost.additionalClasses"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseBasketList from "@/components/BaseBasketList.vue";
import FormPromoCode from "@/components/FormPromoCode.vue";
import BasePriceLabel from "@/components/BasePriceLabel.vue";
export default {
  name: "BaseBasket",
  components: {
    BaseBasketList,
    FormPromoCode,
    BasePriceLabel,
  },
  props: {
    basketItems: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    calculatedSubtotal() {
      return "1 850";
    },
    calculatedTotal() {
      return "2 100";
    },
  },
  data() {
    return {
      title: "My basket",
      allCosts: [
        {
          price: {
            value: "100",
            currency: "$",
          },
          label: "Subtotal",
        },
        {
          price: {
            value: "100",
            currency: "$",
          },
          label: "Tax",
        },
        {
          price: {
            value: "150",
            currency: "$",
          },
          label: "Shipping",
        },
        {
          price: {
            value: "2 100",
            currency: "$",
          },
          label: "Total",
          additionalClasses: "price-label--main",
        },
      ],
    };
  },
};
</script>
