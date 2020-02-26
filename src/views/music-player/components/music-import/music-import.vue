<template>
    <div class="music-import">
        <span @click="importLyric" class="import-btn">导入歌曲</span>
        <br>
        <div>
            <input ref="fileInput" class="file-input" type="file" multiple @change="onSelect">
        </div>
    </div>
</template>

<script>

    export default {
        name: "MusicImport",

        data() {
            return {
                clickEvent: null,
                focusEvent: null
            };
        },

        methods: {
            onSelect({target: {files}}) {
                this.$emit('importMusic', files);
            },

            importLyric() {
                this.$refs.fileInput.click();
            }
        }
    };

</script>

<style lang="stylus" scoped>

    .music-import {
        margin-bottom: 20px;

        .import-btn {
            cursor: pointer;
        }

        .file-input {
            display: none;
        }

    }

</style>
