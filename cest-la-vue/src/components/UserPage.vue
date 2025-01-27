<script setup>
// import { v4 as uuidv4 } from 'uuid';
import UserCard from "./UserCard.vue";
import { defineEmits, defineProps, reactive } from "vue";

defineEmits("update-usersList");
defineProps({
  title: {
    type: String,
    default: "Users",
  },
});
const state = reactive({
  usersList: [],
});

const fetchUsers = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());

  return response;
};

state.usersList = await fetchUsers();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <UserCard
        v-for="user in state.usersList"
        :key="`user-${user.id}`"
        :user="user"
      />
    </ul>
  </main>
</template>

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>
