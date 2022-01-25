<template lang="pug">
.container(v-if="track && track.id") 
    .columns 
        .column.is-3.has-text-centered
            figure.media-left
                p
                    img(:src="track.album.images[0].url")
                p.button.is-primary.is-large(@click="selectTrack")
                    span.icon ▶
        pm-info(:track="track")
</template>

<script>
import trackMixin from '../mixins/track';
//import PmTrack from './track.vue';
import PmInfo from './trackInfo.vue';
import {mapState,mapActions} from 'vuex'

export default {
    mixins: [trackMixin],
    data: () => ({
        
        isLook: false

    }),
    components: {
        PmInfo
    },
    computed:{
        //binding del store
        ...mapState(['track']),
    },
    created() {
        this.isLook = false;
        const id = this.$route.params.id;

        if(!this.track||this.track.id||this.track.id!=id){
            //se ejecuta la actions del store mapiada en methods
             this.getTrackById({id})
             .then(()=>{
                 console.log('track loaded...')
             })
        }


        
    },
    methods: {
        ...mapActions(['getTrackById'])
    },
}
</script>

<style lang="scss" scoped>
.columns {
    margin: 20px;
}
</style>
