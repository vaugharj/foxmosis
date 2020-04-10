const background = document.getElementsByClassName('background')[0];
const images = document.getElementsByClassName('gallery-img');
const displayClose = document.getElementById('display-close');
const displayImage = document.getElementById('display-img');
const displayTitle = document.getElementById('display-img-title');
const display = document.getElementsByClassName('img-display')[0];
const galleryNavButtons = document.querySelectorAll('#gallery .nav .nav-right .nav-btn');
const dropdownBtn = document.querySelector('#gallery .nav .nav-right .nav-dropdown');
const galleryLogo = document.querySelector('#gallery .nav .nav-logo');
let displayShowing = false; //flag for if image is currently being displayed

//show image that was clicked
let showImage = function(img){
    return function(){
        if(!displayShowing){
            displayShowing = true;
            display.classList.remove('hide');
            displayTitle.classList.remove('hide');
            displayImage.setAttribute('src', img.getAttribute('src'));              //set source image to image that was clicked
            displayImage.setAttribute('alt', `${img.getAttribute('data-title')}`)   //set alt attribute to title of image
            displayTitle.innerHTML = `<p>${img.getAttribute('data-title')}</p>`;    //display title of image
            display.classList.remove('display-hide');
            display.classList.add('display-show');
            displayTitle.classList.remove('display-hide');
            displayTitle.classList.add('display-show');
            gallery.classList.add('dark');                                    //darken background
            for(var i = 0; i < images.length; i++){                           //change cursor style of gallery images so they don't appear clickable
                if(images[i] !== displayImage){
                    images[i].setAttribute('style', 'cursor: default; opacity: .75;');
                }
            }
            galleryLogo.classList.add('logo-deactivate');                   //deactivate logo
            dropdownBtn.classList.add('dropdown-deactivate');               //deactivate dropdown menu
            for(let btn of galleryNavButtons){
                btn.classList.add('deactivate');
            }
            setTimeout(displayImgFix(), 0);                                 //resize display image to fit viewport

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
        dropdownBtn.classList.remove('dropdown-deactivate');
        for(let btn of galleryNavButtons){
            btn.classList.remove('deactivate');
        }
    }, 250)});

    const displayImgFix = function(){
        if(currentScene === gallery){
            const imgBottom = displayImage.getBoundingClientRect().bottom;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            
            newWidth = displayImage.clientWidth - (imgBottom - windowHeight);

            //set image width so that the bottom is slightly above top of viewport 
            if(windowHeight > 400 && newWidth <= window.innerWidth - 60){     
                display.setAttribute('style', `width: ${newWidth - 30}px`);
            }

            //if this would make the image too wide to fit in viewport, set it's width so it is slightly less wide than viewport instead
            else if(newWidth > window.innerWidth - 60 && window.innerWidth > 400){
                display.setAttribute('style', `width: ${windowWidth - 60}px`)
            }
            
        }
        
    }
    
    displayImgFix();
    window.addEventListener('resize', displayImgFix);
    