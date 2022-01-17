<template>
  <div class="home" height="100%">
    <PmHeader></PmHeader>
      <HelloWorld msg="Hola Mundo"/>
    <PmFooter></PmFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PmFooter from '../components/layaout/footer.vue';
import PmHeader from '../components/layaout/header.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    PmFooter,
    PmHeader

  }
}
</script>
