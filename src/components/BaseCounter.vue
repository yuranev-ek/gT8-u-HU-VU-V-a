<template>
  <div class="counter">
    <button
      class="button button--icon counter__button counter__button--remove"
      type="button"
      :ariaLabel="ariaLabelButtonDeleteAnother"
      :disabled="disabledButtonDeleteAnother"
      @click="decrement"
    ></button>
    <span class="counter__quantity">{{ count }}</span>
    <button
      class="button button--icon counter__button counter__button--add"
      type="button"
      :ariaLabel="ariaLabelButtonAddAnother"
      @click="increment"
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
    disabledButtonDeleteAnother() {
      return this.count === 1;
    },
  },
  methods: {
    increment() {
      this.$emit("increment", this.count + 1);
    },
    decrement() {
      if (this.count > 1) {
        this.$emit("decrement", this.count - 1);
      }
    },
  },
};
</script>
