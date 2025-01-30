<script setup>
// import { v4 as uuidv4 } from 'uuid';
import UserCard from "@/components/UserCard.vue";
import { defineEmits, defineProps } from "vue";
import { usersList } from "@/composables/useUserStore";

defineEmits("update-usersList");
defineProps({
  title: {
    type: String,
    default: "Users",
  },
});

const fetchUsers = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());

  return response;
};

usersList.value = await fetchUsers();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <UserCard
        v-for="user in usersList"
        :key="`user-${user.id}`"
        :user="user"
      />
    </ul>
  </main>
</template>

<style></style>
