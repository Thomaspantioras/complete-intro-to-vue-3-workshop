<template>
  <h3>Pokemon #{{ route.params.id }}</h3>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params.id);
</script>

<style lang="scss" scoped></style>
