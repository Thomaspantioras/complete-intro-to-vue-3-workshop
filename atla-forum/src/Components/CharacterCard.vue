<template>
  <div>
    <p>{{ character.name }}</p>
    <button @click="addToFavoriteCharacterList(character)">⭐ Favorite</button>
  </div>
</template>

<script>
export default {
  emits: ["favorite-character"],
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToFavoriteCharacterList(character) {
      this.$emit("favorite-character", character);
    },
  },
};
</script>

<style lang="scss" scoped></style>
