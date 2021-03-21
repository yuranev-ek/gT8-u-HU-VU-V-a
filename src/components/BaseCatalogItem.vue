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
          class="button catalog-item__button catalog-item__button--add-to-cart"
          type="button"
          :ariaLabel="ariaLabelButtonAddToCart"
        ></button>
        <span class="catalog-item__price">
          {{ price }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BaseCatalogItem",
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
      type: String,
      required: true,
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
};
</script>
