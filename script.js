'use strict'
// Proof of Life
console.log('hello world')

// HTML Variables
const mainContainer = document.getElementById('Images');
const imgContainer1 = document.getElementById('img1');
const imgContainer2 = document.getElementById('img2');
const imgContainer3 = document.getElementById('img3');
const imgTitle1 = document.getElementById('imgTitle1');
const imgTitle2 = document.getElementById('imgTitle2');
const imgTitle3 = document.getElementById('imgTitle3');
let count = 0;

let img1 = null;
let img2 = null;
let img3 = null;

// Constructor function
function Images(name, imgPath){
    this.name = name;
    this.imgPath = imgPath;
    this.clicks = 0;
    this.votes = 0;
}

// empty array for created constructor images to be placed in
Images.allImages = [];

// List of new images created using the constructor function and pushed into the images array
Images.allImages.push(new Images('bag', './images/bag.jpg'));
Images.allImages.push(new Images('banana', './images/banana.jpg'));
Images.allImages.push(new Images('bathroom', './images/bathroom.jpg'));
Images.allImages.push(new Images('boots', './images/boots.jpg'));
Images.allImages.push(new Images('breakfast', './images/breakfast.jpg'));
Images.allImages.push(new Images('bubblegum', './images/bubblegum.jpg'));
Images.allImages.push(new Images('chair', './images/chair.jpg'));
Images.allImages.push(new Images('cthulhu', './images/cthulhu.jpg'));
Images.allImages.push(new Images('dog-duck', './images/dog-duck.jpg'));
Images.allImages.push(new Images('dragon', './images/dragon.jpg'));
Images.allImages.push(new Images('pen', './images/pen.jpg'));
Images.allImages.push(new Images('pet-sweep', './images/pet-sweep.jpg'));
Images.allImages.push(new Images('scissors', './images/scissors.jpg'));
Images.allImages.push(new Images('shark', './images/shark.jpg'));
Images.allImages.push(new Images('sweep', './images/sweep.png'));
Images.allImages.push(new Images('tauntaun', './images/tauntaun.jpg'));
Images.allImages.push(new Images('unicorn', './images/unicorn.jpg'));
Images.allImages.push(new Images('water-can', './images/water-can.jpg'));
Images.allImages.push(new Images('wine-glass', './images/wine-glass.jpg'));



// Image Prototype that takes in the image and the name.
Images.prototype.renderImages = function(image, title){
    image.src = this.imgPath;
    title.textContent = this.img;
    this.views ++;
}

// Randomizes all of the items in the array using the .sort function.
function randomizeArray(){
    let myArray = Images.allImages;
    let randomArray = myArray.sort(function(){return (Math.random()-0.5)});
    console.log(randomArray)
}

// Get 3 images on reset
function getThreeImages(){
    randomizeArray();
    let img1 = Images.allImages[0];
    let img2 = Images.allImages[1];
    let img3 = Images.allImages[2];
    img1.renderImages(imgContainer1, imgTitle1);
    img2.renderImages(imgContainer2, imgTitle2);
    img3.renderImages(imgContainer3, imgTitle3);
}

// Put array into local storage
function putArrayinStorage(){
    let stringArray = JSON.stringify(Images.allImages);
    if (stringArray = []){
        localStorage.setItem('images', stringArray);
    }
    else(localStorage.setItem('images', stringArray));
}

// Get images from storage
function getArrayFromStorage(){
    let storedItem = localStorage.getItem('images');
    if(storedItem){
        let newImage = JSON.parse(storedItem);
        for(let images of newImage){
            let myNewImage = new Images(images.name, images.imgPath, images.views, images.clicks);
        }
    }
}

// Function to remove images from the application
function removeItem(){
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
}

// Function to change images on click.
function handleClicks(e){
    let imageClicked = e.target.id;
    if(imageClicked === 'img1' || imageClicked === 'img2' || imageClicked === 'img3'){
        // mainContainer.views++;
        count++;
    }
    if(imageClicked === 'img2'){
        Images.allImages[0].clicks++;
    }
    if(imageClicked === 'img2'){
        Images.allImages[1].clicks++;
    }
    if(imageClicked === 'img3'){
        Images.allImages[2].clciks++;
    }
    getThreeImages();
    if(count === 25){
        removeItem();
        window.location.href = 'results.html';
        // document.write('<h1>You have done your job well</h1>');
        console.log(Images.allImages);
    }
    putArrayinStorage();
}



mainContainer.addEventListener('click', handleClicks);
console.log(Images);
getArrayFromStorage();
getThreeImages();

function FillTable(){
    document.getElementsByClassName(Image)
    
}