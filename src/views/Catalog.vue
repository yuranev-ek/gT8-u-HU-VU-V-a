<template>
  <div class="catalog">
    <base-catalog-list
      :catalogItems="catalogItems"
      class="catalog__catalog-list"
      @on-add-to-basket="handlerAddToBasket"
    />
    <base-basket
      :basketItems="parsedBasketItems"
      class="catalog__basket"
      @on-add-to-basket="handlerAddToBasket"
      @on-remove-from-basket="handlerRemoveFromBasket"
      @on-full-remove-from-basket="handlerFullRemoveFromBasket"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseCatalogList from "@/components/BaseCatalogList.vue";
import BaseBasket from "@/components/BaseBasket.vue";
export default {
  name: "CatalogPage",
  components: {
    BaseCatalogList,
    BaseBasket,
  },
  mounted() {
    this.getBasketItemIdsFromLocalStorage();
    this.$ls.on("basketItemIds", this.getBasketItemIdsFromLocalStorage);
  },
  computed: {
    ...mapGetters(["basketItemIds"]),
    parsedBasketItems() {
      return Object.entries(this.basketItemIds).reduce((acc, cur) => {
        const item = this.catalogItems.find((item) => item.id === cur[0]);
        item.count = cur[1];
        item.img.width = this.basketItemSizes.width;
        item.img.height = this.basketItemSizes.height;
        return [...acc, item];
      }, []);
    },
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
      basketItemSizes: {
        width: 90,
        height: 51,
      },
    };
  },
  methods: {
    handlerAddToBasket(id) {
      this.$store.dispatch("setBasketItemId", id);
    },
    handlerRemoveFromBasket(id) {
      this.$store.dispatch("removeBasketItemId", id);
    },
    handlerFullRemoveFromBasket(id) {
      this.$store.dispatch("fullRemoveBasketItemId", id);
    },
    getBasketItemIdsFromLocalStorage() {
      const savedBasketItemIds = this.$ls.get("basketItemIds");
      this.$store.dispatch("setBasketItemIds", savedBasketItemIds || {});
    },
    updateLocalStorage() {
      this.$ls.set("basketItemIds", this.basketItemIds);
    },
  },
  watch: {
    basketItemIds: {
      deep: true,
      handler() {
        this.updateLocalStorage();
      },
    },
  },
};
</script>
