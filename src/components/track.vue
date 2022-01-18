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
            small {{tiempo}}
            nav.level
                .level-left
                    a.level-item 
                        span.icon.is-small(@click="selectTrack()") 🎶
                    a.level-item 
                        span.icon.is-small(v-show="isLook", @click="goToTrack(track.id)") 👀
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
            //se emite un evento al componente padre
            this.$emit('select', this.track.id)

            //se emite un evento a otro componente
            this.$bus.$emit('set-track', this.track)
        },
        goToTrack(id) {
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
        tiempo() {
            var seconds = (this.track.duration_ms / 1000).toFixed(0);
            var minutes = Math.floor(seconds / 60);
            var hours = "";
            if (minutes > 59) {
                hours = Math.floor(minutes / 60);
                hours = (hours >= 10) ? hours : "0" + hours;
                minutes = minutes - (hours * 60);
                minutes = (minutes >= 10) ? minutes : "0" + minutes;
            }

            seconds = Math.floor(seconds % 60);
            seconds = (seconds >= 10) ? seconds : "0" + seconds;
            if (hours != "") {
                return hours + ":" + minutes + ":" + seconds;
            }
            return minutes + ":" + seconds;
        }
    }
}
</script>
