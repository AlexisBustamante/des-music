<template lang="pug">
.container 
    .columns 
        .column.is-3.has-text-centered
            figure.media-left
                p
                    img(:src="track.album.images[0].url")
                p.button.is-primary.is-large(@click="selectTrack")
                    span.icon 🎶
        .column.is-8
            .panel
                .panel-heading
                    h1.title {{track.name}}
                .panel-block
        
                    article.media 
                        .media-content
                         .content
                            ul(v-for="(v,k ) in track")
                                li 
                                    strong {{k}}:&nbsp;
                                    span {{v}}
                        nav.level 
                         .level-left 
                             a.level-item
</template>

<script>
import trackService from '../services/track';
import trackMixin from '../mixins/track';
//import PmTrack from './track.vue';
//import PmInfo from './trackInfo.vue';
export default {
    mixins: [trackMixin],
    data: () => ({
        track: {
            album:{
                images:[{url:''}]
            }
        },
        isLook: false

    }),
    components: {
        
    },
    created() {
        this.isLook = false;

        const id = this.$route.params.id;
        trackService.getById(id)
            .then(res => {
                this.track = res;
                console.log(this.track)
            })
    }
}
</script>

<style lang="scss" scoped>
.columns {
    margin: 20px;
}
</style>
