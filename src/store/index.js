import Vue from 'vue';
import Vuex from 'vuex';

import audio from './audio/audio';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        audio
    }
});
