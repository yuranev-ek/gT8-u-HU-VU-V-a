<template>
  <form @submit="submitForm" class="form">
    <h3 class="form__title h3">{{ formLabels.title }}</h3>
    <div class="form__row form__row--submit">
      <base-input
        v-model="formPromoCodeData.code"
        :placeholder="formInputs.code.placeholder"
      />
      <button class="button form__button">{{ formLabels.submit }}</button>
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
  model: {
    prop: "formPromoCodeData",
    event: "on-submit",
  },
  computed: {
    errorClass() {
      return this.error ? "input--error" : "";
    },
  },
  data() {
    return {
      formLabels: {
        title: "Promo code",
        submit: "Apply",
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
        console.log(this.formPromoCodeData);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
