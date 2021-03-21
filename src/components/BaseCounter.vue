<template>
  <div class="counter">
    <button
      class="button button--icon counter__button counter__button--remove"
      type="button"
      :ariaLabel="ariaLabelButtonDeleteAnother"
    ></button>
    <span class="counter__quantity">{{ count }}</span>
    <button
      class="button button--icon counter__button counter__button--add"
      type="button"
      :ariaLabel="ariaLabelButtonAddAnother"
    ></button>
  </div>
</template>

<script>
export default {
  name: "BaseBasketItem",
  props: {
    count: {
      type: Number,
      default: 1,
      required: true,
    },
    title: {
      type: String,
    },
  },
  model: {
    event: "change",
    prop: "count",
  },
  computed: {
    ariaLabelButtonDeleteAnother() {
      return `Delete another ${this.title}`;
    },
    ariaLabelButtonAddAnother() {
      return `Add another ${this.title}`;
    },
  },
};
</script>
