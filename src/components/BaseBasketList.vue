<template>
  <div class="basket-list">
    <div class="basket-list__container">
      <div class="basket-list__inner">
        <base-basket-item
          class="basket-list__item"
          v-for="basketItem of basketItems"
          :src="basketItem.src"
          :key="basketItem.id"
          :id="basketItem.id"
          :title="basketItem.title"
          :price="basketItem.price"
          :img="basketItem.img"
          :count="basketItem.count"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseBasketItem from "@/components/BaseBasketItem.vue";
export default {
  name: "BaseBasketList",
  components: {
    BaseBasketItem,
  },
  props: {
    basketItems: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
