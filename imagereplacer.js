const images = document.images;
const imageCount = document.images.length;

for (let i = 0; i < imageCount; i++) {
    const image = images[i];
    const newImage = document.createElement("img");
    newImage.src = "icon48.png";
    newImage.alt = "replacement image";
    image.parentNode.replaceChild(newImage, image);
}