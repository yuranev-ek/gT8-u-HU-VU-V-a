<template>
  <header class="header">
    <base-logo></base-logo>
    <button
      @click.self="addItemToBasket"
      class="button button--icon header__icon-cart"
      type="button"
      :ariaLabel="ariaLabelButtonCart"
      :data-quantity="calcQuantityOfBasketItems"
      :class="{
        'header__icon-cart--quantity': calcQuantityOfBasketItems,
      }"
    ></button>
  </header>
</template>

<script>
import BaseLogo from "@/components/BaseLogo.vue";
export default {
  name: "TheHeader",
  components: {
    BaseLogo,
  },
  mounted() {
    this.getBasketItemIdsFromLocalStorage();
    this.$ls.on("basketItemIds", this.getBasketItemIdsFromLocalStorage);
  },
  data() {
    return {
      basketItemIds: {},
    };
  },
  computed: {
    ariaLabelButtonCart() {
      return `items in the basket`;
    },
    calcQuantityOfBasketItems() {
      return this.basketItemIds ? Object.keys(this.basketItemIds).length : 0;
    },
  },
  methods: {
    getBasketItemIdsFromLocalStorage() {
      const savedBasketItemIds = this.$ls.get("basketItemIds");
      this.$set(this, "basketItemIds", savedBasketItemIds || {});
    },
  },
};
</script>
