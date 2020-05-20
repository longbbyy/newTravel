<template>
  <div class="city">
    <Header></Header>
    <Search :cities="cities"></Search>
    <List
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></List>
    <Alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></Alphabet>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import List from './components/List.vue'
import Alphabet from './components/Alphabet.vue'
import { res } from './JS/index'
export default {
  components: { Header, Search, List, Alphabet },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      const data = res.data
      const { cities, hotCities } = data
      this.cities = cities
      this.hotCities = hotCities
      console.log(cities, hotCities)
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="scss">
</style>
