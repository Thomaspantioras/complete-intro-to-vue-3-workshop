<template>
  <h2>New Character</h2>
  <pre>{{ newCharacter }}</pre>
  <label for="character-name">Name</label>
  <input
    type="text"
    v-model="newCharacter.name"
    @keyup.enter="addNewCharacter"
  />
  <p>
    <span
      v-for="(character, index) in characterList"
      :key="`comma-list-character-${index}`"
      >{{ character.name }}{{ index === characterList.length - 1 ? "" : ", " }}
    </span>
  </p>
</template>

<script>
export default {
  props: ["characterList"],
  data() {
    return {
      newCharacter: {
        name: "",
        element: [],
      },
    };
  },
  methods: {
    addNewCharacter() {
      this.characterList.push(this.newCharacter);
      this.newCharacter = { name: "" };
    },
  },
};
</script>
