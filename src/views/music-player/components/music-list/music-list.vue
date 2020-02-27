<template>
    <div class="music-list d-flex flex-column">
        <p class="list-name">播放列表</p>
        <div v-if="musicList.length">
            <div class="music-item d-flex align-items-center justify-content-between"
                 v-for="(music, index) in musicList"
                 :key="index">
                <div class="item-left">
                    <span>播放</span>
                    <span>{{ music.name }}</span>
                </div>
                <span>{{ music.duration }}</span>
            </div>
        </div>

        <div v-else class="flex-grow-1 d-flex align-items-center justify-content-center">
            <p>快来上传音乐吧</p>
        </div>
    </div>
</template>

<script>

    import { createNamespacedHelpers } from 'vuex';

    const { mapState } = createNamespacedHelpers('audio');

    export default {
        name: "MusicList",

        computed: {
            ...mapState([
                'musicList',
            ])
        }
    };

</script>

<style lang="stylus" scoped>

    .music-list {
        padding-right: 20px;

        .list-name {
            text-align: left;
        }
    }

</style>
