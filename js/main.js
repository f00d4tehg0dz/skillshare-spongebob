// Scroll to Bottom

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent){
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

var btnScrollDown = document.querySelector('#scroll_down');

function scrollDown() {
    window.scroll(0,findPos(document.getElementById("product")));
}

btnScrollDown.addEventListener('click', scrollDown);

// Slider

var slideArray = [];

for (var i = 0; i < document.querySelectorAll('.slider div').length; i++) {
    slideArray.push(document.querySelectorAll('.slider div')[i].dataset.background);
}

var currentSlideIndex = -1;

function sliderItem(){
    currentSlideIndex++;

    if (currentSlideIndex >= slideArray.length) {
        currentSlideIndex = 0;
    }

    document.querySelector('.slider').style.cssText = 'background: url("' + slideArray[currentSlideIndex] + '") no-repeat center center; background-size: cover;';
}

var intervalID = setInterval(sliderItem, 3000);