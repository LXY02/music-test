import Vue from 'vue';
import VueRouter from 'vue-router';

import MusicPlayer from '../views/music-player';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'MusicPlayer',
        component: MusicPlayer
    }
];

const router = new VueRouter({
    routes
});

export default router;
