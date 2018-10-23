//---prepare images---///
var images = []
var x = 3; //number of images
for (let i = 1; i <= x; ++i) {
    images[i] = new Image()
    images[i].src = "img/location/code" + i + ".jpg";
}
// caches images, avoiding white flash between background replacements
function fadeImage(i) {
	if (i > x) {i = 1};
    document.getElementById("location-img").style.background = "url(img/location/code" + i + ".jpg) no-repeat center center";
    document.getElementById("location-img").style.backgroundSize = "cover";
    setTimeout(function () { fadeImage(i+1); }, 8000);
}
fadeImage(1);