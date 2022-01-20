<template lang="pug">
#app
  pm-header
  router-view 
  pm-footer
</template>

<script>
// @ is an alias to /src
import PmHeader from './components/layaout/header.vue';
import PmFooter from './components/layaout/footer.vue';
export default {
  name:'app',
  components: {
    PmHeader,
    PmFooter
    
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>