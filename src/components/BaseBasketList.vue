<template>
  <div class="basket-list">
    <div class="basket-list__container">
      <div class="basket-list__inner">
        <template v-for="basketItem of basketItems">
          <base-basket-item
            v-if="basketItem.count"
            class="basket-list__item"
            :src="basketItem.src"
            :key="basketItem.id"
            :id="basketItem.id"
            :title="basketItem.title"
            :price="basketItem.price"
            :img="basketItem.img"
            :count="basketItem.count"
            @on-add-to-basket="$emit('on-add-to-basket', $event)"
            @on-remove-from-basket="$emit('on-remove-from-basket', $event)"
            @on-full-remove-from-basket="
              $emit('on-full-remove-from-basket', $event)
            "
          />
        </template>
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
