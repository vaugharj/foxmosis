const background = document.getElementsByClassName('background')[0];
const images = document.getElementsByClassName('gallery-img');
const displayClose = document.getElementById('display-close');
const displayImage = document.getElementById('display-img');
const displayTitle = document.getElementById('display-img-title');
const display = document.getElementsByClassName('img-display')[0];
const galleryNavButtons = document.querySelectorAll('#gallery .nav .nav-right .nav-btn');
const dropdownBtn = document.querySelector('#gallery .nav .nav-right .nav-dropdown');
const galleryLogo = document.querySelector('#gallery .nav .nav-logo');
let displayShowing = false;



// window.addEventListener('scroll', () => {
//     console.log('event triggered');
//     const top = window.pageYOffset;
//     const newPos = top * -.05;
//     background.setAttribute('style', 'background-position-y:' + newPos + 'px');
// });

//show image that was clicked
let showImage = function(img){
    return function(){
        if(!displayShowing){
            displayShowing = true;
            display.classList.remove('hide');
            displayTitle.classList.remove('hide');
            displayImage.setAttribute('src', img.getAttribute('src'));
            displayImage.setAttribute('alt', `${img.getAttribute('data-title')}`)
            displayTitle.innerHTML = `<p>${img.getAttribute('data-title')}</p>`;
            display.classList.remove('display-hide');
            display.classList.add('display-show');
            displayTitle.classList.remove('display-hide');
            displayTitle.classList.add('display-show');
            gallery.classList.add('dark');
            for(var i = 0; i < images.length; i++){
                if(images[i] !== displayImage){
                    images[i].setAttribute('style', 'cursor: default; opacity: .75;');
                }
            }
            galleryLogo.classList.add('logo-deactivate');
            dropdownBtn.classList.add('deactivate');
            for(let btn of galleryNavButtons){
                btn.classList.add('deactivate');
            }

        }
    }
}

for(var i = 0; i < images.length; i++){
    images[i].addEventListener('click', showImage(images[i]));
}

//hide image that was selected
displayClose.addEventListener('click', function(){
    display.classList.remove('display-show');
    display.classList.add('display-hide');
    displayTitle.classList.remove('display-show');
    displayTitle.classList.add('display-hide');
    gallery.classList.remove('dark');
    setTimeout( () => {
        display.classList.add('hide');
        displayTitle.classList.add('hide');
        displayShowing = false;
        for(var i = 0; i < images.length; i++){
            if(images[i] !== displayImage){
                images[i].setAttribute('style', 'cursor: pointer');
            }
        }
        galleryLogo.classList.remove('logo-deactivate');
        dropdownBtn.classList.remove('deactivate');
        for(let btn of galleryNavButtons){
            btn.classList.remove('deactivate');
        }
    }, 250)});
    