const html = document.getElementsByTagName('html')[0];
const body = document.getElementsByTagName('body')[0];

const homeBtns = document.getElementsByClassName('home-btn');
const aboutBtns = document.getElementsByClassName('about-btn');
const galleryBtns = document.getElementsByClassName('gallery-btn');
const blogBtns = document.getElementsByClassName('blog-btn');
const blogFullBtns = document.getElementsByClassName('blog-full-btn');

const home = document.getElementById('home');
const gallery = document.getElementById('gallery');
const blog = document.getElementById('blog');
const about = document.getElementById('about');
const door = document.getElementById('door');
const blogFull = document.getElementById('blog-full');
const sendMessage = document.getElementById('send-message');
const sceneAnimationTime = 1000;

let currentScene = home;
let transitioning = false;

//function that returns a function that will switch the display to the scene passed in as a parameter
let transitionFactory = (newScene) => {
    return function(){
        if(!transitioning && !displayShowing){     //check if animation is already underway or if an image is being displayed in the gallery
            transitioning = true;
            door.classList.remove('hide');
            door.classList.add('transition-down');
            setTimeout( () =>{
                window.scrollTo(0, 0);
                currentScene.classList.add('hide');
                newScene.classList.remove('hide');
                door.classList.remove('transition-down');
                door.classList.add('transition-up');
                currentScene = newScene;
                setTimeout( () => {
                    transitioning = false;
                    door.classList.remove('transition-up');
                    door.classList.add('hide');
                }, sceneAnimationTime + 150);
            }, sceneAnimationTime + 150);
        }
    }
}


//add event listeners to all scene switching buttons
for(var i = 0; i < homeBtns.length; i++){
    homeBtns[i].addEventListener('click', transitionFactory(home));
}

for(var i = 0; i < aboutBtns.length; i++){
    aboutBtns[i].addEventListener('click', transitionFactory(about));
}

for(var i = 0; i < galleryBtns.length; i++){
    galleryBtns[i].addEventListener('click', transitionFactory(gallery));
}

for(var i = 0; i < blogBtns.length; i++){
    blogBtns[i].addEventListener('click', transitionFactory(blog));
}

for(var i = 0; i < blogFullBtns.length; i++){
    blogFullBtns[i].addEventListener('click', transitionFactory(blogFull));
}

