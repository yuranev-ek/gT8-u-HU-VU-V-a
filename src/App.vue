<template>
  <div>
    <the-header />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  name: "SP.shop",
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import "assets/scss/main.scss";
</style>
