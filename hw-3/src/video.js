export function renderVideo(video) {
    return `
    <div class="gallery-item">
        <div class="content video">
            <video controls src="${video.video}" height="100%" width="100%">
        </div>
        <div class="text">${video.name}</div>
    </div>`
}