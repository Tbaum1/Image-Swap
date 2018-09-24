var imageArray = [
    "images/boss.jpg",    
    "images/waterfall.jpg",
    "images/koen.jpg",
    "images/river.jpg"
]

function showImage(){
    for(i = 0; i < 7; i++){
        document.getElementById("img-" + i).src = imageArray[i];
    }
}

function swapImage(imgPath, imgText) {
    var mainImg = document.getElementById('mainImg');
        
    mainImg.src = imgPath;
    mainImg.alt = imgText;
    mainImg.title = imgText;
}

window.addEventListener("load", showImage);
