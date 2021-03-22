<template>
  <div class="basket">
    <div class="basket__container basket__container--border">
      <div class="basket__inner">
        <h3 class="h3 basket__title">{{ title }}</h3>
        <base-basket-list :basket-items="basketItems" />
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
      basketItems: [
        {
          id: "1",
          src: "#",
          title: "New Balance 574 Vintage Brights",
          price: {
            currency: "$",
            value: "650",
          },
          img: {
            src: "/img/574-vintage-brights.png",
            width: 90,
            height: 51,
          },
          count: 1,
        },
        {
          id: "2",
          src: "#",
          title: "New Balance Made in UK 920 Chinese New Year",
          price: {
            currency: "$",
            value: "1 200",
          },
          img: {
            src: "/img/920-chinese-new-year.png",
            width: 90,
            height: 51,
          },
          count: 2,
        },
      ],
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
