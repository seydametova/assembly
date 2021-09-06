import { items } from "./items";
import { renderImage } from "./images.js";
import { renderAudio } from "./audio.js";
import { renderVideo } from "./video.js";

const galleryElement = document.getElementById("gallery");

items.forEach(item => {
    switch (item.type) {
        case "image":
            galleryElement.insertAdjacentHTML('beforeEnd', renderImage(item));
            break;
        case "audio":
            galleryElement.insertAdjacentHTML('beforeEnd', renderAudio(item));
            break;
        case "video":
            galleryElement.insertAdjacentHTML('beforeEnd', renderVideo(item));
    }
})