const formatTotalTime = time => {
    const minutes = Math.trunc(time / 60).toString().padStart(2, '0');
    const seconds = Math.trunc(time % 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
};

export {
    formatTotalTime
};
