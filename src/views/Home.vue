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
        // это через файл .env
        // + BASE_URL & NODE_ENV
        return process.env
      },
      webpackVars() {
        // пример доступа в компоненте
        // обращаемся по имени, которое
        // задали в webpack.DefinePlugin
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
