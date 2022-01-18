<template lang="pug">
.container 
 .columns 
  .column.is-5.is-offset04
    pm-track(:track="track" :isLook="isLook")
 
  .column.is-5.is-offset04
    pm-info(:track="track")

</template>

<script>
import trackService from '../services/track';
import PmTrack from './track.vue';
import PmInfo from './trackInfo.vue';
export default {
    data: () => ({
        track: {},
        isLook:false
        
    }),
    components: {
        PmTrack,
        PmInfo
    },
    created() {
        this.isLook=false;
        const id = this.$route.params.id;
        trackService.getById(id)
            .then(res => {
                this.track = res;
            })
    }
}
</script>

<style lang="scss" scoped>
.columns{
    margin:20px;
}
</style>
