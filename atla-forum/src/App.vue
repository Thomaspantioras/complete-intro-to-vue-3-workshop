<script>
import BaseStatistics from "./Components/BaseStatistics.vue";
import BaseCharacters from "./Components/BaseCharacters.vue";
import BaseNewCharacter from "./Components/BaseNewCharacter.vue";
import BaseLayout from "./Components/BaseLayout.vue";

export default {
  components: {
    BaseStatistics,
    BaseCharacters,
    BaseNewCharacter,
    BaseLayout,
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
  <BaseLayout>
    <template v-slot:two>
      <BaseNewCharacter :character-list="characterList" />
    </template>
  </BaseLayout>
  <BaseStatistics :character-list="characterList" />
  <BaseCharacters :character-list="characterList" />
</template>
