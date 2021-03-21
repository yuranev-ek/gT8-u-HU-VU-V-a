<template>
  <div class="catalog-list">
    <div class="catalog-list__container">
      <div class="catalog-list__inner">
        <base-catalog-item
          class="catalog-list__item"
          v-for="catalogItem of catalogItems"
          :src="catalogItem.src"
          :key="catalogItem.id"
          :id="catalogItem.id"
          :title="catalogItem.title"
          :price="catalogItem.price"
          :img="catalogItem.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseCatalogItem from "@/components/BaseCatalogItem.vue";
export default {
  name: "BaseCatalogList",
  components: {
    BaseCatalogItem,
  },
  props: {
    catalogItems: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
