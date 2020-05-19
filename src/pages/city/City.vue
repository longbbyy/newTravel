<template>
  <div class="city">
    <Header></Header>
    <Search></Search>
    <List></List>
    <Alphabet></Alphabet>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import List from './components/List.vue'
import Alphabet from './components/Alphabet.vue'
export default {
  components: { Header, Search, List, Alphabet }
}
</script>

<style lang="scss">
</style>
