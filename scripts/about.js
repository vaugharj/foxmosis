const portraitImg = document.getElementById('about-portrait-img')
const maxHeight = 640;

let portraitFix = function() {
    viewportHeight = window.innerHeight;
    if(viewportHeight < 640){
        const bottomShift = 640 - viewportHeight;
        portraitImg.setAttribute('style', `bottom: -${bottomShift}px`);
        console.log(bottomShift);
    }
    else{
        portraitImg.setAttribute('style', 'bottom: 0');
    }
}

portraitFix();
window.addEventListener('resize', portraitFix);