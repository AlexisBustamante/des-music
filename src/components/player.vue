<template lang="pug">
.content(v-if="track && track.album")
    p
        img(:src="track.album.images[0].url")
    p 
        strong {{track.name}}
        small [{{track.duration_ms|ms-to-mm}}]
    p
        audio(controls, :src="track.preview_url" :autoplay="true")
</template>

<script>
export default {
    data: () => ({
        track: {     
        }
    }),

    created() {

        this.$bus.$on('set-track', (track) => {
            this.track = track;
            //console.log(this.track)
        })
    },

}
</script>

<style lang="scss" scoped>
img {
    width: 124px
}
</style>
