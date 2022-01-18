<template lang="pug">
.title {{track.name}}
    .subtitle(v-if="track && track.album") {{track.album.artists[0].name}}
        .subtitle 
        b Fecha lanzamiento: 
            |
            p {{track.album.release_date}}
            p Duración
            p {{tiempo}}

            a(:href="track.album.external_urls.spotify", target="_blank")  
                img(src="../assets/spotifyLogo.png")
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

<style>

</style>
