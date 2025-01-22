<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <li class="user-card">{{ user.name }}: {{ user.website }}</li>
</template>

<style>
.user-card {
  border: 1px solid black;
  padding: 4px;
}
</style>
