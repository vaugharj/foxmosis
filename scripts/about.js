const portraitImg = document.getElementById('about-portrait-img')
const minHeight = 650;  //height in pixels that self-portrait should start dropping below bottom of viewport

//prevent self portrait from covering the navbar by more than a few pixels
let portraitFix = function() {
    viewportHeight = window.innerHeight;
    if(viewportHeight < minHeight){
        const bottomShift = minHeight - viewportHeight;
        portraitImg.setAttribute('style', `bottom: -${bottomShift}px`);
    }
    else{
        portraitImg.setAttribute('style', 'bottom: 0');
    }
}

portraitFix();
window.addEventListener('resize', portraitFix);