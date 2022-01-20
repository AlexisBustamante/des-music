<template lang="pug">
.content
    v-skeleton-loader(type="card" )
</template>

<script>
export default {
    data: () => ({
        primary: "primary",
        inject: {
            theme: {
                default: {
                    isDark: false
                },
            },
        },
    })
}
</script>

<style lang="scss" scoped>
.content {
    padding: 20px;
    min-height: 40vh;
}
</style>
