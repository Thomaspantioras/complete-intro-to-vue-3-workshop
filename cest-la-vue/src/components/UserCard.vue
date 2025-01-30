<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const goToUserView = (name) => {
      router.push(`/user/${name}`);
    };

    return {
      goToUserView,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <li :class="$style['user-card']">
    <router-link :to="`/user/${user.name}`">
      {{ user.name }}: {{ user.website }}
    </router-link>
  </li>
  <!-- <li :class="$style['user-card']" @click="goToUserView(user.name)">
    {{ user.name }}: {{ user.website }}
  </li> -->
</template>

<style module>
.user-card {
  border: 1px solid black;
  padding: 4px;
}
</style>
