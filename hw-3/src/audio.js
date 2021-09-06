export function renderAudio(audio) {
    return `
    <div class="gallery-item">
        <div class="content audio">
            <audio controls src="${audio.audio}">
        </div>
        <div class="text">${audio.name}</div>
    </div>`
}