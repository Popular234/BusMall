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