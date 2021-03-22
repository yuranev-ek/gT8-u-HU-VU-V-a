<template>
  <div class="basket">
    <div class="basket__container basket__container--border">
      <div class="basket__inner">
        <h3 class="h3 basket__title">{{ title }}</h3>
        <base-basket-list
          v-if="basketItems.length"
          :basket-items="basketItems"
          @on-add-to-basket="$emit('on-add-to-basket', $event)"
          @on-remove-from-basket="$emit('on-remove-from-basket', $event)"
          @on-full-remove-from-basket="
            $emit('on-full-remove-from-basket', $event)
          "
        />
        <span v-else>No selected items</span>
      </div>
    </div>
    <div class="basket__container basket__container--border">
      <div class="basket__inner">
        <form-promo-code
          :promo-code="promoCode"
          @on-set-promo-code="setPromoCode"
        />
      </div>
    </div>
    <div v-if="subtotalValue" class="basket__container">
      <div class="basket__inner">
        <base-price-label
          v-for="cost of allCosts"
          :key="cost.label"
          :price="cost.price"
          :label="cost.label"
        />
        <base-price-label
          :label="totalPrice.label"
          :price="totalPrice.price"
          :additional-classes="totalPrice.additionalClasses"
        >
          <template v-slot:price>
            <div>
              <base-price
                v-if="promoCode.isApplied"
                :value="totalPrice.price.value"
                :currency="totalPrice.price.currency"
                additional-class="text--through"
                style="margin-right: 5px"
              />
              <base-price
                :value="totalPrice.price.valueWithDiscount"
                :currency="totalPrice.price.currency"
              />
            </div>
          </template>
        </base-price-label>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBasketList from "@/components/BaseBasketList.vue";
import FormPromoCode from "@/components/FormPromoCode.vue";
import BasePriceLabel from "@/components/BasePriceLabel.vue";
import BasePrice from "@/components/BasePrice.vue";
export default {
  name: "BaseBasket",
  components: {
    BaseBasketList,
    FormPromoCode,
    BasePriceLabel,
    BasePrice,
  },
  props: {
    basketItems: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    subtotalValue() {
      return Number(this.allCosts.subtotal.price.value);
    },
    taxValue() {
      return Number(this.allCosts.tax.price.value);
    },
    shippingValue() {
      return Number(this.allCosts.shipping.price.value);
    },
  },
  mounted() {
    this.getPromoCodeFromLocalStorage();
    this.$ls.on("promoCode", this.getPromoCodeFromLocalStorage);
  },
  data() {
    return {
      title: "My basket",
      allCosts: {
        subtotal: {
          price: {
            value: 0,
            currency: "$",
          },
          label: "Subtotal",
        },
        tax: {
          price: {
            value: "100",
            currency: "$",
          },
          label: "Tax",
        },
        shipping: {
          price: {
            value: "150",
            currency: "$",
          },
          label: "Shipping",
        },
      },
      totalPrice: {
        price: {
          value: "0",
          valueWithDiscount: "0",
          currency: "$",
        },
        label: "Total",
        additionalClasses: "price-label--main",
      },
      promoCode: {
        isApplied: false,
        discount: {
          value: null,
          type: "%",
        },
      },
    };
  },
  methods: {
    calculateSubtotal() {
      this.allCosts.subtotal.price.value = this.basketItems.reduce(
        (acc, cur) => {
          const preparedPriceValue = parseInt(cur.price.value.replace(" ", ""));
          return (acc += preparedPriceValue * cur.count);
        },
        0
      );
    },
    calculateTotal() {
      const totalPrice =
        this.subtotalValue + this.taxValue + this.shippingValue;
      this.totalPrice.price.value = totalPrice;

      if (this.promoCode.isApplied) {
        this.totalPrice.price.valueWithDiscount = (
          totalPrice -
          (totalPrice / 100) * 15
        ).toFixed(2);
      } else {
        this.totalPrice.price.valueWithDiscount = totalPrice;
      }
    },
    getPromoCodeFromLocalStorage() {
      const promoCode = this.$ls.get("promoCode");
      if (promoCode) {
        this.$set(this, "promoCode", promoCode);
      }
    },
    setPromoCode(promoCode) {
      this.$set(this, "promoCode", promoCode);
    },
    updateLocalStorage() {
      this.$ls.set("promoCode", this.promoCode);
    },
  },
  watch: {
    basketItems: {
      deep: true,
      handler() {
        this.calculateSubtotal();
      },
    },
    subtotalValue() {
      this.calculateTotal();
    },
    promoCode: {
      deep: true,
      handler() {
        this.updateLocalStorage();
        this.calculateTotal();
      },
    },
  },
};
</script>
