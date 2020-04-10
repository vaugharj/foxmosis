const portraitImg = document.getElementById('about-portrait-img')
const maxHeight = 650;

//prevent self portrait from covering the navbar more than a few pixels
let portraitFix = function() {
    viewportHeight = window.innerHeight;
    if(viewportHeight < maxHeight){
        const bottomShift = maxHeight - viewportHeight;
        portraitImg.setAttribute('style', `bottom: -${bottomShift}px`);
    }
    else{
        portraitImg.setAttribute('style', 'bottom: 0');
    }
}

portraitFix();
window.addEventListener('resize', portraitFix);