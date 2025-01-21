<template>
  <h2>Characters</h2>
  <p v-if="characterList.length === 0">There are no characters</p>
  <ul v-else-if="characterList.length % 2 === 0">
    <li
      v-for="(character, index) in characterList"
      :key="`even-character-${index}`"
    >
      <CharacterCard
        :character="character"
        @favorite-character="favoriteCharacter"
      />
    </li>
  </ul>
  <p v-else>There are odd characters!</p>
  <FavoriteCharacters :favorite-list="favoriteList" />
</template>

<script>
import FavoriteCharacters from "./FavoriteCharacters.vue";
import CharacterCard from "./CharacterCard.vue";
export default {
  components: {
    CharacterCard,
    FavoriteCharacters,
  },
  props: {
    characterList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      favoriteList: [],
    };
  },
  methods: {
    favoriteCharacter(character) {
      this.favoriteList.push(character);
    },
  },
};
</script>
