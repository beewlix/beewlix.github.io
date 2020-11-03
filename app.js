const player = new Plyr('#player', {
    autoplay: true,
    muted: true
});

player.on('ready', () => {
    player.play();
})