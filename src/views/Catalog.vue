<template>
  <div>
    <base-catalog></base-catalog>
    <base-basket></base-basket>
  </div>
</template>

<script>
import BaseCatalog from "@/components/BaseCatalog.vue";
import BaseBasket from "@/components/BaseBasket.vue";
export default {
  name: "CatalogPage",
  components: {
    BaseCatalog,
    BaseBasket,
  },
};
</script>
