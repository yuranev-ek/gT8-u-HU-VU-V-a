<template>
  <div class="basket">
    <div class="basket__container">
      <div class="basket__inner">
        <h3 class="h3 basket__title">{{ title }}</h3>
        <base-basket-list :basket-items="basketItems" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseBasketList from "@/components/BaseBasketList.vue";
export default {
  name: "BaseBasket",
  components: {
    BaseBasketList,
  },
  data() {
    return {
      title: "My basket",
      basketItems: [
        {
          id: "1",
          src: "#",
          title: "New Balance 574 Vintage Brights",
          price: "$ 650",
          img: {
            src: "/img/574-vintage-brights.png",
            width: 90,
            height: 51,
          },
          count: 1,
        },
        {
          id: "2",
          src: "#",
          title: "New Balance Made in UK 920 Chinese New Year",
          price: "$ 1 200",
          img: {
            src: "/img/920-chinese-new-year.png",
            width: 90,
            height: 51,
          },
          count: 2,
        },
      ],
    };
  },
};
</script>
