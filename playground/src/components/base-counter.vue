<script>
import { useCount } from "../composables/countStore";
export default {
  setup() {
    const countStore = useCount();
    return {
      countStore,
    };
  },
  data: () => ({
    count: 10,
    counterTitle: "Counter Standard",
    incrementAmount: 8,
  }),
  computed: {
    displayTitle() {
      if (this.count > 20) {
        return "Counter Standard - Very Long";
      } else {
        return "Counter Standard";
      }
    },
    optimizedIncrementAmount() {
      return this.displayTitle.length * this.incrementAmount;
    },
  },
  methods: {
    incrementCount(newAmount, event) {
      console.log(newAmount);
      console.log(event);
      this.count += this.optimizedIncrementAmount;
    },
  },
};
</script>

<template>
  <h1>{{ displayTitle }}</h1>
  <h2>New counter</h2>
  <p>Global count: {{ countStore.globalCount }}</p>
  <p>local count: {{ countStore.localCount }}</p>
  <button class="button" @click="countStore.incrementGlobalCount">
    Global
  </button>
  <button class="button" @click="countStore.incrementLocalCount">local</button>
  <hr />
  <p :data-increment-by="incrementAmount">{{ count }}</p>
  <button class="button" @click="incrementCount">Increment Count</button>
  <h1>{{ incrementAmount }}</h1>
  <p>{{ optimizedIncrementAmount }}</p>
  <div>
    <label for="incrementAmount">Increment by:</label>
    <input type="text" v-model="incrementAmount" />
  </div>
</template>

<style>
.button {
  border: 5px solid red;
}
</style>
