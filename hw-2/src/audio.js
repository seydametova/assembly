export function playAudio(path) {
    var audio = new Audio(path);
    audio.play();
}

export function playPercussion() {
    playAudio('./audio/percussion-sound-614.mp3');
}

export function playHustyBaDumTss() {
    playAudio('./audio/hasty-ba-dum-tss-615.mp3');
}