const trackMixin = {
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
        }
    },
}

export default trackMixin;