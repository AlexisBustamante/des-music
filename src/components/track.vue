<template lang="pug">
.card(v-if="track && track.album")
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
                small {{this.track.duration_ms|ms-to-mm}}
                nav.level
                    .level-left
                        button.level-item.button.is-primary 
                            span.icon.is-small(@click="selectTrack()") 🎶
                        button.level-item.button.is-warning(v-show="isLook")
                            span.icon.is-small( @click="goToTrack(track.id)") 👀
</template>

<script>
export default {
    data: () => ({

    }),
    props: {
        track: {
            type: Object,
            required: true
        },
        isLook: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    component: {

    },
    methods: {
        selectTrack() {

            //si no tienen url no s epuede dar click
            if (!this.track.preview_url) {
                return
            }

            //se emite un evento al componente padre
            this.$emit('select', this.track.id)

            //se emite un evento a otro componente
            this.$bus.$emit('set-track', this.track)
        },
        goToTrack(id) {
            if (!this.track.preview_url) {
                return
            }

            this.$router.push({
                name: 'trackDetail',
                params: {
                    id
                },
            })
        }

    },
    watch: {

    },
    computed: {

    }
}
</script>
