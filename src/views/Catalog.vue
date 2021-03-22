<template>
  <div class="catalog">
    <base-catalog-list
      :catalogItems="catalogItems"
      class="catalog__catalog-list"
    />
    <base-basket class="catalog__basket" />
  </div>
</template>

<script>
import BaseCatalogList from "@/components/BaseCatalogList.vue";
import BaseBasket from "@/components/BaseBasket.vue";
export default {
  name: "CatalogPage",
  components: {
    BaseCatalogList,
    BaseBasket,
  },
  data() {
    return {
      catalogItems: [
        {
          id: "1",
          src: "#",
          title: "New Balance 574 Vintage Brights",
          price: {
            currency: "$",
            value: "650",
          },
          img: {
            src: "/img/574-vintage-brights.png",
            width: 228,
            height: 130,
          },
        },
        {
          id: "2",
          src: "#",
          title: "New Balance Made in UK 920 Chinese New Year",
          price: {
            currency: "$",
            value: "1 200",
          },
          img: {
            src: "/img/920-chinese-new-year.png",
            width: 228,
            height: 130,
          },
        },
        {
          id: "3",
          src: "#",
          title: "New Balance 373 Modern Classics",
          price: {
            currency: "$",
            value: "800",
          },
          img: {
            src: "/img/373-modern-classics.png",
            width: 228,
            height: 130,
          },
        },
        {
          id: "4",
          src: "#",
          title: "New Balance X-Racer Utility",
          price: {
            currency: "$",
            value: "1 000",
          },
          img: {
            src: "/img/x-racer-utility.png",
            width: 228,
            height: 130,
          },
        },
        {
          id: "5",
          src: "#",
          title: "New Balance 5740 Think Colorfully",
          price: {
            currency: "$",
            value: "940",
          },
          img: {
            src: "/img/5740-think-colorfully.png",
            width: 228,
            height: 130,
          },
        },
        {
          id: "6",
          src: "#",
          title: "New Balance Made in UK 670 Chinese New Year",
          price: {
            currency: "$",
            value: "780",
          },
          img: {
            src: "/img/670-chinese-new-year.png",
            width: 228,
            height: 130,
          },
        },
      ],
    };
  },
};
</script>
