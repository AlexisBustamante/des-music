<template lang="pug">
.card
    .card-image 
        figure.image.is-1by1 
            img(:src="track.album.images[0].url")
    .card-content 
        .media 
            .media-left 
                figure.image.is-48x48
                    img(:src="track.album.images[1].url")
            .media-content 
                p.title.is-5 
                    strong {{track.name}}
                p.subtitle.is-6 {{track.artists[0].name}}
        .content 
            small {{track.duration_ms}}
            nav.level
                .level-left
                    a.level-item 
                        span.icon.is-small(@click="selectTrack()") Escuchar
</template>

<script>
export default {
    data: () => ({

    }),
    props: {
        track: {
            type: Object,
            required: true
        }
    },
    component: {

    },
    methods: {
        selectTrack() {
            this.$emit('select',this.track.id)
            
            this.$bus.$emit('set-track',this.track)
        }

    },
    watch: {

    },
    computed: {

    }
}
</script>
