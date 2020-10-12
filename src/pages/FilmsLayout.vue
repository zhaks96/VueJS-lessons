<template>
  <div class="films-layout">
    <main-header />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '../components/films/MainHeader'

export default {
  components: { MainHeader }
}
</script>
