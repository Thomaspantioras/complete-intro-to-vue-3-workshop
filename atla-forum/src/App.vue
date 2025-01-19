<script>
import BaseStatistics from "./Components/BaseStatistics.vue";
import BaseCharacters from "./Components/BaseCharacters.vue";
import BaseNewCharacter from "./Components/BaseNewCharacter.vue";
import BaseFavoriteCharacters from "./Components/BaseFavoriteCharacters.vue";

export default {
  components: {
    BaseStatistics,
    BaseCharacters,
    BaseNewCharacter,
    BaseFavoriteCharacters,
  },
  data: () => ({
    characterList: [
      {
        name: "Aang",
        element: ["Air", "Earth", "Water", "Fire"],
      },
      {
        name: "Zuko",
        element: ["Fire"],
      },
      {
        name: "Toph",
        element: ["Earth"],
      },
      {
        name: "Katara",
        element: ["Water"],
      },
    ],
    favoriteList: [],
  }),

  methods: {
    addNewCharacter() {
      this.characterList.push(this.newCharacter);
      this.newCharacter = { name: "" };
    },
  },
};
</script>

<template>
  <BaseStatistics :character-list="characterList" />
  <BaseCharacters
    :character-list="characterList"
    :favorite-list="favoriteList"
  />
  <BaseFavoriteCharacters :favorite-list="favoriteList" />
  <BaseNewCharacter :character-list="characterList" />
</template>
