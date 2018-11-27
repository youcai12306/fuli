<template>
  <div class="main">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
</style>
