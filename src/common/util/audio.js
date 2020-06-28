import { formatTotalTime } from './time';

const EVENT_TYPES = [
    'onChange',
    'onPlay',
    'onReady',
    'onPause'
];

class Dispatcher {
    constructor() {
        this.handlers = [];
    }

    listen(handler) {
        this.handlers.push(handler);
    }

    emit(...args) {
        this.handlers.forEach(handler => {
            handler(...args);
        });
    }
}

class Music {
    constructor() {
        this.music = new Audio();
        this.musicList = [];
        this.currMusic = {};
        this.currIndex = 0;

        EVENT_TYPES.forEach(eventName => {
            this[eventName] = new Dispatcher();
        });
    }

    async append(file) {
        const {name} = file;
        const url = URL.createObjectURL(file);
        const musicElement = new Audio(url);
        let duration = '';

        await new Promise(resolve => {
            musicElement.addEventListener('loadedmetadata', () => {
                duration = formatTotalTime(musicElement.duration);
                resolve();
            });
        });

        this.musicList.push({
            name,
            duration,
            url
        });

        this.onReady.emit();
    }

    play() {

    }
}

export default new Music();
