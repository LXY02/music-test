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
    import music from '@/common/util/audio';

    export default {
        name: "MusicImport",

        mounted() {
            console.log('---1 ', music);
        },

        methods: {
            async onSelect({target: {files}}) {
                if (!files.length) return;

                const musicListOrigin = Object.values(files);
                const musicListLength = musicListOrigin.length;

                for (let index = 0; index < musicListLength; index++) {
                    const file = musicListOrigin[index];
                    await music.append(file);
                }
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
