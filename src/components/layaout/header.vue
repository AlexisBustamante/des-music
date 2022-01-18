<template lang="pug">
section.hero.is-success
    .hero-head 
        header.nav 
        .level
            .level-left
                strong Des Music app    
            .level-right
             .level-item.has-text-centered
                 router-link.level-item(:to="{name:'search'}") Buscar
                 router-link.level-item(to="about") Nosotros
    
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