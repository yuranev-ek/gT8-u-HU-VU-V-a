<template>
  <router-link :to="src" class="catalog-item">
    <img
      class="catalog-item__img"
      v-if="img"
      :src="img.src"
      :alt="title"
      :height="img.height"
      :width="img.width"
    />
    <div class="catalog-item__info">
      <p class="catalog-item__title">{{ title }}</p>
      <div class="catalog-item__info-bottom">
        <button
          @click.self="addItemToBasket"
          class="button button--primary-icon catalog-item__button catalog-item__button--add-to-cart"
          type="button"
          :ariaLabel="ariaLabelButtonAddToCart"
        ></button>
        <base-price
          :currency="price.currency"
          :value="price.value"
          class="catalog-item__price"
        />
      </div>
    </div>
  </router-link>
</template>

<script>
import BasePrice from "@/components/BasePrice.vue";
export default {
  name: "BaseCatalogItem",
  components: {
    BasePrice,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Object,
      required: true,
      default() {
        return {
          value: null,
          currency: null,
        };
      },
    },
    img: {
      type: Object,
      default() {
        return {
          src: null,
          width: null,
          height: null,
        };
      },
    },
  },
  computed: {
    ariaLabelButtonAddToCart() {
      return `Add to cart ${this.title}`;
    },
  },
  methods: {
    addItemToBasket() {
      this.$emit("on-add-to-basket", this.id);
    },
  },
};
</script>
