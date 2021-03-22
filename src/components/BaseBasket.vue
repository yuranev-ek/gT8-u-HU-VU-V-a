<template>
  <div class="basket">
    <div class="basket__container basket__container--border">
      <div class="basket__inner">
        <h3 class="h3 basket__title">{{ title }}</h3>
        <base-basket-list
          v-if="basketItems.length"
          :basket-items="basketItems"
          @on-add-to-basket="$emit('on-add-to-basket', $event)"
          @on-remove-from-basket="$emit('on-remove-from-basket', $event)"
          @on-full-remove-from-basket="
            $emit('on-full-remove-from-basket', $event)
          "
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
    calculatedTotal() {
      return "2 100";
    },
  },
  data() {
    return {
      title: "My basket",
      allCosts: {
        subtotal: {
          price: {
            value: "100",
            currency: "$",
          },
          label: "Subtotal",
        },
        tax: {
          price: {
            value: "100",
            currency: "$",
          },
          label: "Tax",
        },
        shipping: {
          price: {
            value: "150",
            currency: "$",
          },
          label: "Shipping",
        },
        total: {
          price: {
            value: "2 100",
            currency: "$",
          },
          label: "Total",
          additionalClasses: "price-label--main",
        },
      },
    };
  },
  methods: {
    calculateSubtotal() {
      this.allCosts.subtotal.price.value = this.basketItems.reduce(
        (acc, cur) => {
          const preparedPriceValue = parseInt(cur.price.value.replace(" ", ""));
          return (acc += preparedPriceValue * cur.count);
        },
        0
      );
    },
  },
  watch: {
    basketItems: {
      deep: true,
      handler() {
        this.calculateSubtotal();
      },
    },
  },
};
</script>
