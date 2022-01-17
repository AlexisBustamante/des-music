<template lang="pug">
section.hero.is-success
    .hero-head 
        header.nav 
            .container
                .nav-left 
                    .nav-item 
                    strong Des Music app
                .nav-right.nav-menu 
    
    .hero-body 
        .container.has-text-centered 
            h1.title Des Music
            h1.subtitle Busca tus canciones favoritas
            pm-player 
</template>

<script>
import PmPlayer from '../player.vue';
export default {
data:()=>({

}),
components:{
    PmPlayer
}
}

</script>