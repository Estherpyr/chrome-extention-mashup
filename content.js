var images = [
  "https://miro.medium.com/max/2656/1*63ZpO-ypxe6-kxtJfV0IiA.jpeg",
  "https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2019/04/30105217/New-York-University.jpg",
  "https://www.jpost.com//HttpHandlers/ShowImage.ashx?id=338748&w=822&h=537",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZL5cOb26CR_hHygYFyfHCZxZfbP61qlQqI6oMarxatIAKRy1W&usqp=CAU",
  "https://nyuad.nyu.edu/en/about/leadership-and-administration/nyu-new-york-leadership/_jcr_content/mainparsys/columncontol_1314325/columnpar3_1/phototext/image.adaptive.m1546876249578/394.jpg",
  "https://i.ytimg.com/vi/bFiEvNIROW4/maxresdefault.jpg"
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


var elts = document.getElementsByTagName('p');
    for (var i = 0; i < elts.length; i++) {
      elts[i].style['background-color'] = 'purple';
    }

}
