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

    import { createNamespacedHelpers } from 'vuex';

    const { mapActions } = createNamespacedHelpers('audio');

    export default {
        name: "MusicImport",

        methods: {
            ...mapActions(['setMusicList']),

            async onSelect({target: {files}}) {
                if (!files.length) return;

                const musicListOrigin = Object.values(files);
                const musicListLength = musicListOrigin.length;
                let musicList = [];

                for (let index = 0; index < musicListLength; index++) {
                    const file = musicListOrigin[index];
                    const {name} = file;
                    const url = URL.createObjectURL(file);
                    const musicElement = new Audio(url);
                    let duration = '';

                    await new Promise(resolve => {
                        musicElement.addEventListener('loadedmetadata', () => {
                            duration = this.formatTotalTime(musicElement.duration);
                            resolve();
                        });
                    });

                    musicList.push({
                        name,
                        duration,
                        url
                    });
                }


                this.setMusicList(musicList);
            },

            importLyric() {
                this.$refs.fileInput.click();
            },

            formatTotalTime(time) {
                const minutes = Math.trunc(time / 60).toString().padStart(2, '0');
                const milliseconds = Math.trunc(time % 60).toString().padStart(2, '0');

                return `${minutes}:${milliseconds}`;
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
