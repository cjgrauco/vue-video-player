<template>
  <div class="login-wrapper">
    <button class="login-button" @click="login">Logg inn</button>
  </div>
</template>
<script lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { loginWithRedirect, user } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        },
        user,
      }
    }
  }
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;

  .login-button {
    width: 100px;
    height: 60px;
  }
}
</style>
