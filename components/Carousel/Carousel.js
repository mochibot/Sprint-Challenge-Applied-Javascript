/*
class Carousel {

}

let carousel = document.querySelector('.carousel');
*/

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let leftButton = document.querySelector('.left-button');
let rightButton = document.querySelector('.right-button');
// make it so that the < > on the button cannot be selected 
leftButton.style.userSelect = 'none';
rightButton.style.userSelect = 'none';
let images = document.querySelectorAll('.carousel img');
let firstImg = images[0];
//show the first image when page loads
firstImg.style.display = 'block';
let counter = 0;

function slideShow(direction) {
    images[counter].style.display = 'none';
    counter += direction;
    if (counter > images.length - 1) {
        counter = 0;
    } else if (counter < 0) {
        counter = images.length - 1;
    }
    images[counter].style.display = 'block';
}

leftButton.addEventListener('click', () => slideShow(1));

rightButton.addEventListener('click', () => slideShow(-1));