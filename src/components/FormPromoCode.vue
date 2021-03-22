<template>
  <form @submit.prevent="submitForm" class="form">
    <h3 class="form__title h3">{{ formLabels.title }}</h3>
    <div v-if="!promoCode.isApplied" class="form__row form__row--submit">
      <base-input
        v-model="formPromoCodeData.code"
        :placeholder="formInputs.code.placeholder"
      />
      <button :disabled="!unabledApply" class="button form__button">
        {{ formLabels.submit }}
      </button>
    </div>
    <div class="form__row form__row--submit" v-else>
      {{ discountText }}
      <button
        @click.prevent="clearPromoCode"
        type="button"
        class="button form__button"
      >
        {{ formLabels.clear }}
      </button>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
export default {
  name: "FormPromoCode",
  components: {
    BaseInput,
  },
  props: {
    promoCode: {
      type: Object,
      default() {
        return {
          isApplied: false,
          discount: {
            value: null,
            type: "%",
          },
        };
      },
    },
  },
  computed: {
    unabledApply() {
      return !!this.formPromoCodeData.code;
    },
    discountText() {
      if (this.promoCode.isApplied) {
        return `Your discount is ${this.promoCode.discount.value}${this.promoCode.discount.type}`;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      formLabels: {
        title: "Promo code",
        submit: "Apply",
        clear: "Clear",
      },
      formInputs: {
        code: {
          placeholder: "Enter promo code",
        },
      },
      formPromoCodeData: {
        code: null,
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        // request...
        if (this.formPromoCodeData.code === "SBORKA") {
          this.$emit("on-set-promo-code", {
            isApplied: true,
            discount: {
              value: 15,
              type: "%",
            },
          });
        } else {
          alert("Not valid promo code");
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.clearForm();
      }
    },
    clearForm() {
      this.formPromoCodeData = {
        code: null,
      };
    },
    clearPromoCode() {
      this.$emit("on-set-promo-code", {
        isApplied: false,
        discount: {
          value: null,
          type: "%",
        },
      });
    },
  },
};
</script>
