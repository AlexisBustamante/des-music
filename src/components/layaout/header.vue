<template lang="pug">
section.hero.is-success
    .hero-head 
        header.nav
         v-app-bar
          v-app-bar-nav-icon(@click="drawer=true") 
             
         v-navigation-drawer(v-model="drawer" absolute temporary)
          v-list(nav dense)
           v-list-item-group(v-model="group" active-class="deep-purple--text text--accent-4")
             v-list-item(link :to="{name:'search'}")
              v-list-item-title Buscar
                         
             v-list-item(link :to="{name:'About'}")
              v-list-item-title Nosotros

    .hero-body 
        .container.has-text-centered 
            h1.title Des Music
            h1.subtitle Busca tus canciones favoritas
            pm-player
</template>

<script>
import PmPlayer from '../player.vue';
export default {
    data: () => ({
        drawer:false,
        group:null
    }),
    components: {
        PmPlayer
    }
}
</script>

<style>

</style>