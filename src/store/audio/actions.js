import {MutationTypes} from './mutations';

export default {
    setMusicList({commit}, payload) {
        commit(MutationTypes.SET_MUSIC_LIST, payload);
    },

    setCurrMusic({commit}, payload) {
        commit(MutationTypes.SET_CURR_MUSIC, payload);
    }
};
