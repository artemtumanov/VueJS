<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="dashboard" class="router-link">DashBoard</router-link>
        <router-link to="aboutpage" class="router-link">About</router-link>
        <router-link to="notfound" class="router-link">Not Found</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>


export default {
  name: 'App',
  // mounted() {
  //   console.log(this.$router);
  //   console.log(this.$route);
  // },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

header {
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.router-link {
  margin: 0 50px;
  font-size: 30px;
  text-decoration: none;
  color: rgba($color: #000000, $alpha: 0.5);

  &:focus {
    color: #000000
  }
}

.header {
  font-weight: bold;
  text-align: center;
  margin: 50px 0;
  font-size: 30px;
}

main {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
