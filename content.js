var images = [
  "nyu1.jpg",
  "nyu2.jpg",
  "nyu3.jpg",
  "nyu4.jpg",
  "nyu5.jpg"
];

console.log("extention's right there man");

window.onload = replaceImages;

function replaceImages() {
    for (var i in document.images) {
        var targetImage = document.images[i];
        var randomImage = images[Math.floor(Math.random() * images.length)];
        var height = targetImage.height;
        var width = targetImage.width;

        targetImage.src = randomImage;
        targetImage.height = height;
        targetImage.width = width;
    }

let words = document.getElementsByTagName('txt');

for(let i = 0; i< words.length; i++){
  words.style['background-color'] = 'violet';
}


}
