const images = document.images;
const imageCount = document.images.length;

for (let i = 0; i < imageCount; i++) {
    const image = images[i];
    const newImage = document.createElement("img");
    newImage.src = "https://raw.githubusercontent.com/DanceItBreakIt/image_replacer/refs/heads/main/icon48.png";
    newImage.alt = "replacement image";
    image.parentNode.replaceChild(newImage, image);
}