<template>
  <div class="home">
    <h1 class="title">home page</h1>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      env() {
        return process.env
      },
      myvars() {
        return MY_VARS
      }
    }
  }
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .title {
    width: 100%;
  }
</style>
