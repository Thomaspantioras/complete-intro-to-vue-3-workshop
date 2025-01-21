<script>
import BaseStatistics from "./Components/BaseStatistics.vue";
import BaseCharacters from "./Components/BaseCharacters.vue";
import BaseNewCharacter from "./Components/BaseNewCharacter.vue";

export default {
  components: {
    BaseStatistics,
    BaseCharacters,
    BaseNewCharacter,
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
  <BaseCharacters :character-list="characterList" />
  <BaseNewCharacter :character-list="characterList" />
</template>
