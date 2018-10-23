//---prepare images---///
var images = []
var x = 3; //number of images
for (let i = 1; i <= x; ++i) {
    images[i] = new Image()
    images[i].src = "img/course_space/code" + i + ".jpg";
}
// caches images, avoiding white flash between background replacements
function fadeImage(i) {
	if (i > x) {i = 1};
    document.getElementById("course_space_img").style.background = "url(img/course_space/code" + i + ".jpg) no-repeat center";
    document.getElementById("course_space_img").style.backgroundSize = "cover";
    document.getElementById("course_space_img").style.backgroundAttachment = "fixed";
    setTimeout(function () { fadeImage(i+1); }, 8000);
}
fadeImage(1);
