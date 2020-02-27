export const MutationTypes = {
    SET_CURR_MUSIC: 'setCurrMusic',
    SET_MUSIC_LIST: 'setMusicList'
};

export default {
    [MutationTypes.SET_MUSIC_LIST](state, musicList) {
        state.musicList = musicList;
    },

    [MutationTypes.SET_CURR_MUSIC](state, currMusic) {
        state.currMusic = currMusic;
    }
};
