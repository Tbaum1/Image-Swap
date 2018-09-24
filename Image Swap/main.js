var imageArray = [
    "images/river.jpg",
    "images/boss.jpg",    
    "images/waterfall.jpg",
    "images/koen.jpg",
    "images/sunset.jpg",
    "images/mountain.jpg",
    "images/paradise.jpg",     
    "images/cowboys.png"
]

function showImage(){
    for(i = 0; i < 8; i++){
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
