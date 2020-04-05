var images = [
  "https://www.google.com/search?q=nyu&sxsrf=ALeKk03HjGWscGFvURbC0eviLZAcoLF-WA:1586118505978&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjh-_rwj9LoAhXAAp0JHccGD7MQ_AUoA3oECAsQBQ&biw=1440&bih=732#imgrc=AZYRYAKMcVpiIM",
  "https://www.google.com/search?q=nyu&sxsrf=ALeKk03HjGWscGFvURbC0eviLZAcoLF-WA:1586118505978&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjh-_rwj9LoAhXAAp0JHccGD7MQ_AUoA3oECAsQBQ&biw=1440&bih=732#imgrc=f2c-2w79IBBuUM",
  "https://www.google.com/search?q=nyu&sxsrf=ALeKk03HjGWscGFvURbC0eviLZAcoLF-WA:1586118505978&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjh-_rwj9LoAhXAAp0JHccGD7MQ_AUoA3oECAsQBQ&biw=1440&bih=732#imgrc=WFXWlaPfNUgZVM",
  "https://www.google.com/search?q=nyu&sxsrf=ALeKk03HjGWscGFvURbC0eviLZAcoLF-WA:1586118505978&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjh-_rwj9LoAhXAAp0JHccGD7MQ_AUoA3oECAsQBQ&biw=1440&bih=732#imgrc=SUm11leC_hNUDM",
  "https://www.google.com/search?q=nyu&sxsrf=ALeKk03HjGWscGFvURbC0eviLZAcoLF-WA:1586118505978&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjh-_rwj9LoAhXAAp0JHccGD7MQ_AUoA3oECAsQBQ&biw=1440&bih=732#imgrc=f2c-2w79IBBuUM"
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
