<template>
    <div class="music-wrapper">
        <div class="music-container d-flex">
            <div class="container-left d-flex flex-column">
                <music-import></music-import>
                <music-list class="flex-grow-1"></music-list>
            </div>

            <div class="container-right">
                <music-lyric></music-lyric>
                <music-controller-progress></music-controller-progress>

                <div class="d-flex">
                    <music-play-mode></music-play-mode>
                    <music-controller></music-controller>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import MusicController from './components/music-controller';
    import MusicControllerProgress from './components/music-controller-progress';
    import MusicImport from './components/music-import';
    import MusicList from './components/music-list';
    import MusicLyric from './components/music-lyric';
    import MusicPlayMode from './components/music-play-mode';

    export default {
        name: "MusicPlayer",

        components: {
            MusicController,
            MusicControllerProgress,
            MusicImport,
            MusicList,
            MusicLyric,
            MusicPlayMode
        }
    };

</script>

<style lang="stylus" scoped>

    .music-wrapper {
        padding: 20px;

        .music-container {
            margin: 0 auto;
            padding: 20px;
            width: 85%;
            height: 60vh;
            color: $white;
            background: linear-gradient(135deg, #41b883, #4a9cee);

            .container-left {
                flex: 1;
                border-right: 2px solid $white;
            }

            .container-right {
                flex: 2;
            }
        }
    }

</style>
