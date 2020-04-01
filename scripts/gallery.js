const background = document.getElementsByClassName('background')[0];
const images = document.getElementsByClassName('gallery-img');
const displayClose = document.getElementById('display-close');
const displayImage = document.getElementById('display-img');
const display = document.getElementsByClassName('img-display')[0];

let displayShowing = false;


// window.addEventListener('scroll', () => {
//     console.log('event triggered');
//     const top = window.pageYOffset;
//     const newPos = top * -.05;
//     background.setAttribute('style', 'background-position-y:' + newPos + 'px');
// });

let showImage = function(src){
    return function(){
        if(!displayShowing){
            displayShowing = true;
            display.classList.remove('hide');
            displayImage.setAttribute('src', src);
            display.classList.remove('display-hide');
            display.classList.add('display-show');
            gallery.classList.add('dark');
            for(var i = 0; i < images.length; i++){
                if(images[i] !== displayImage){
                    images[i].setAttribute('style', 'cursor: default; opacity: .75;');
                }
                
            }
        }
    }
}

for(var i = 0; i < images.length; i++){
    images[i].addEventListener('click', showImage(images[i].getAttribute('src')));
}

displayClose.addEventListener('click', function(){
    display.classList.remove('display-show');
    display.classList.add('display-hide');
    gallery.classList.remove('dark');
    setTimeout( () => {
        display.classList.add('hide');
        displayShowing = false;
        for(var i = 0; i < images.length; i++){
            if(images[i] !== displayImage){
                images[i].setAttribute('style', 'cursor: pointer');
            }
            
        }
    }, 250)});
    