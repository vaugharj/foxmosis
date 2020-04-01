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

let transitionFactory = (newScene) => {
    return function(){
        if(!transitioning && !displayShowing){     //display showing variable must be added for gallery
            transitioning = true;
            // html.setAttribute('overflow-y', 'hidden');
            // body.setAttribute('overflow-x', 'hidden');
            door.classList.remove('hide');
            door.classList.add('transition-down');
            setTimeout( () =>{
                currentScene.classList.add('hide');
                newScene.classList.remove('hide');
                door.classList.remove('transition-down');
                door.classList.add('transition-up');
                // html.setAttribute('style', 'overflow-y: auto');
                // body.setAttribute('style', 'overflow-x: auto');
                currentScene = newScene;
                // if(newScene === gallery || newScene === blog || newScene === blogFull){
                //     html.setAttribute('style', 'height: unset');
                // }
                // else{
                //     html.setAttribute('style', 'height: 100%');
                // }
                setTimeout( () => {
                    transitioning = false;
                    door.classList.remove('transition-up');
                    door.classList.add('hide');
                }, sceneAnimationTime + 150);
            }, sceneAnimationTime + 150);
        }
    }
}

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

