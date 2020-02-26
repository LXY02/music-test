<template>
    <div>
        导入歌词
        <input type="file" multiple @change="onSelect">
    </div>
</template>

<script>

    export default {
        name: "MusicImport",

        data() {
            return {
                musicList: [],
                currMusic: null
            };
        },

        methods: {
            onSelect({target: {files}}) {
                console.log('---- ', files);
                this.$emit('importMusic', files);
            }
        }
    };

</script>

<style lang="stylus" scoped>

</style>
