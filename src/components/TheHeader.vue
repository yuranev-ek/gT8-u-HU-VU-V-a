<template>
  <header class="header">
    <base-logo></base-logo>
    <div class="header__buttons">
      <button
        @click.self="toggleVisibleBasket(true)"
        class="button button--icon header__icon-cart"
        type="button"
        :ariaLabel="ariaLabelButtonCart"
        :data-quantity="calcQuantityOfBasketItems"
        :class="{
          'header__icon-cart--quantity': calcQuantityOfBasketItems,
        }"
      ></button>
      <button
        @click.self="toggleVisibleBasket(false)"
        class="button button--icon header__icon-close-cart"
        type="button"
        :ariaLabel="ariaLabelButtonCloseCart"
        v-if="visibleBasket"
      ></button>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
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
  computed: {
    ariaLabelButtonCart() {
      return `${this.calcQuantityOfBasketItems} items in the basket`;
    },
    ariaLabelButtonCloseCart() {
      return "Close basket";
    },
    calcQuantityOfBasketItems() {
      let count = 0;
      for (let key in this.basketItemIds) {
        if (this.basketItemIds[key] > 0) {
          count++;
        }
      }

      return count;
    },
    ...mapGetters(["basketItemIds", "visibleBasket"]),
  },
  methods: {
    getBasketItemIdsFromLocalStorage() {
      const savedBasketItemIds = this.$ls.get("basketItemIds");
      this.$set(this, "basketItemIds", savedBasketItemIds || {});
    },
    toggleVisibleBasket(bool) {
      if (this.$screen.width < 1200) {
        this.$store.dispatch("setVisibleBasket", bool);
      }
    },
  },
};
</script>
