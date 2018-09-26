var mainImg = document.getElementById('mainImg');

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
    
        
    mainImg.src = imgPath;
    mainImg.alt = imgText;
    mainImg.title = imgText;
}

function imageTimer(){
    var num = Math.floor(Math.random() * imageArray.length);
    mainImg.src = imageArray[num];
}

setInterval(imageTimer,3000)
window.addEventListener("load", showImage);
