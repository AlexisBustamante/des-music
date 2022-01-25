<template lang="pug">
div
    transition(name="move") 
        pm-notification(v-show="showNotification")
            p(slot="body") no se encontraron registros 

    transition(name="move") 
        pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
        nav.nav.has-shadow 
            .container 
                input.input.is-large(
                    type="text", 
                    placeholder="Buscar canciones", 
                    v-model="searchQuery",
                    @keyup.enter="search()"
                    )
                a.button.is-info.is-large(@click="search()") Buscar
                a.button.is-danger.is-large &times; 
                .container
                    p 
                        small {{serachMessage}}
                        .container.results 
                        .columns.is-multiline 
                            .column.is-one-quarter(v-for="t in tracks") 
                                pm-track(
                                    v-blur="t.preview_url"
                                    :class="{'is-active':t.id===selectedTrack}",
                                    :track="t", 
                                    @select="setSelectedTrack")
</template>

<script>
import trackservice from '../services/track'
import PmTrack from '../components/track.vue';
import PmLoader from '../components/shared/Loader.vue';
import PmNotification from '../components/shared/notification.vue';

export default {
    name: 'search',
    data: () => ({
        searchQuery: '',
        tracks: [],
        isLoading: false,
        selectedTrack: '',
        showNotification:false
    }),
    props: {
        msg: String

    },
    methods: {
        search() {

            //si es blanco se impide ejecutar las siguientes lines d ecodigo
            //sino se ejecuta callback
            //Si no existe
            if (!this.searchQuery) {
                return
            }

            this.isLoading = true;
            trackservice.search(this.searchQuery)
                .then(res => {
                    this.showNotification=res.tracks.total===0
                    this.tracks = res.tracks.items
                    //filtro solo los ue tienen un audio de prueba
                   // this.tracks=this.tracks.filter(v=>v.preview_url!=null)
                    //console.log(this.tracks)
                    this.isLoading = false;
                })
        },
        setSelectedTrack(id) {
            this.selectedTrack = id;
        }

    },
    computed: {
        serachMessage() {
            return `Encontrados : ${this.tracks.length}`
        }
    },
    watch: {
        showNotification(){
            if(this.showNotification){
                setTimeout(()=>{
                    this.showNotification=false;
                },3000)
            }
        }
    },
    components: {
        PmTrack,
        PmLoader,
        PmNotification
    }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

.results {
    margin-top: 50px
}

.is-active {
    border: 3px #23d160 solid;
}
</style>
