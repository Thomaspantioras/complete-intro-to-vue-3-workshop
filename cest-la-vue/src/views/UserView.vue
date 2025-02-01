<script setup>
// import { v4 as uuidv4 } from 'uuid';
import UserCard from "@/components/UserCard.vue";
import { defineEmits, defineProps } from "vue";
// import { usersList } from "@/composables/useUserStore";
import { useUserStore } from "@/stores/UserStore";
defineEmits("update-usersList");
defineProps({
  title: {
    type: String,
    default: "Users",
  },
});

const userStore = useUserStore();
userStore.fetchUsers();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <UserCard
        v-for="user in userStore.userList"
        :key="`user-${user.id}`"
        :user="user"
      />
    </ul>
  </main>
</template>

<style></style>
