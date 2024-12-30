let images = document.images;
let imageCount = document.images.length;
let userurl = localStorage.getItem("userInput");

for (let i = 0; i < imageCount; i++) {
    const image = images[i];
    const newImage = document.createElement("img");
    newImage.src = userurl;
    newImage.alt = "replacement image";
    image.parentNode.replaceChild(newImage, image);
}