const images = ["0.jpg", "1.jpg", "2.jpg","4.jpg","3.jpg"];

const choseimg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseimg}`;
bgImage.id  = "bgImage";
document.body.appendChild(bgImage);
