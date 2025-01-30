<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const emailInput = ref("");
const router = useRouter();

const login = () => {
  if (emailInput.value.includes("@") && emailInput.value.length > 4) {
    console.log("Valid user email!!");
    router.push("/user");
  } else {
    console.log("Invalid user email!!");
  }
};
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" v-model="emailInput" />
    <button @click="login">Continue with email</button>
  </main>
</template>

<style></style>
