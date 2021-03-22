<template>
  <div :to="src" class="basket-item">
    <img
      class="basket-item__img"
      v-if="img"
      :src="img.src"
      :alt="title"
      :height="img.height"
      :width="img.width"
    />
    <div class="basket-item__info">
      <p class="basket-item__title">{{ title }}</p>
      <div class="basket-item__info-bottom">
        <base-counter
          :count="count"
          class="basket-item__counter"
          @increment="$emit('on-add-to-basket', id)"
          @decrement="$emit('on-remove-from-basket', id)"
        />
        <base-price
          :currency="price.currency"
          :value="price.value"
          class="basket-item__price"
        />
      </div>
    </div>
    <button
      class="button button--icon basket-item__button basket-item__button--remove-from-cart"
      type="button"
      @click="$emit('on-full-remove-from-basket', id)"
      :ariaLabel="ariaLabelButtonRemoveFromCart"
    ></button>
  </div>
</template>

<script>
import BaseCounter from "@/components/BaseCounter.vue";
import BasePrice from "@/components/BasePrice.vue";
export default {
  name: "BaseBasketItem",
  components: {
    BaseCounter,
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
    count: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  computed: {
    ariaLabelButtonRemoveFromCart() {
      return `Remove from cart ${this.title}`;
    },
  },
};
</script>
