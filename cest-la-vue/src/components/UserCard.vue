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
  <li :class="$style['user-card']">{{ user.name }}: {{ user.website }}</li>
</template>

<style module>
.user-card {
  border: 1px solid black;
  padding: 4px;
}
</style>
