export function renderImage(image) {
    return `
    <div class="gallery-item">
        <img src="${image.image}" class="content">
        <div class="text">${image.name}</div>
    </div>`
}