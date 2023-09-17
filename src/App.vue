<script setup lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';
  import Login from './components/Login.vue'
  import VideoPlayer from './components/VideoPlayer.vue'

  const { isAuthenticated, user, isLoading } = useAuth0();
</script>

<template>
  <div>
    <template v-if="!isLoading && isAuthenticated">
      <div class="user-info">
        <h1>Velkommen {{user?.nickname}}</h1>
      </div>
      <VideoPlayer />
    </template>
    <template v-if="!isLoading && !isAuthenticated">
      <Login />
    </template>
  </div>
</template>
<style scoped>

  .root {
    background-color: red;
  }

  .user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }

</style>
