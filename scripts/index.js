
const body = document.getElementsByTagName('body')[0];

const menuGalleryBtn = document.getElementById('gallery-menu-btn');
const menuAboutBtn = document.getElementById('about-menu-btn');
const galleryBack = document.getElementsByClassName('gallery-back')[0];
const aboutMenuBtn = document.getElementById('menu-about-btn');


const scene1 = document.getElementById('scene1');
const scene2 = document.getElementById('scene2');
const scene3 = document.getElementById('scene3');
const door = document.getElementById('door');

const doorShaker = document.getElementById('door-shaker');

const sceneAnimationTime = 1000;

let currentScene = 1;
let transitioning = false;

console.log("index.js executing...");


let transitionFactory = (oldSceneNum, sceneNum, oldScene, newScene) => {
    return function(){
        if(!transitioning && !displayShowing){
            // body.setAttribute('style', 'overflow-y: hidden');
            console.log("ya");
            transitioning = true;
            door.classList.remove('hide');
            door.classList.add('transition-down');
            // door.classList.add('shake');
            oldScene.classList.add('shake-less');
            setTimeout( () =>{
                oldScene.classList.add('hide');
                oldScene.classList.remove('shake-less');
                // door.classList.remove('shake');
                // door.classList.add('shake-less');
                newScene.classList.remove('hide');
                door.classList.remove('transition-down');
                door.classList.add('transition-up');
                body.setAttribute('style', 'overflow-y: visible');
                setTimeout( () => {
                    transitioning = false;
                    door.classList.remove('transition-up');
                    door.classList.add('hide');
                    // door.classList.remove('shake-less');
                    
                }, sceneAnimationTime + 150);
            }, sceneAnimationTime + 150);
        }
    }
}

menuGalleryBtn.addEventListener('click', transitionFactory(2, 1, scene2, scene1));
menuAboutBtn.addEventListener('click', transitionFactory(2, 3, scene2, scene3));
galleryBack.addEventListener('click', transitionFactory(1, 2, scene1, scene2));
aboutMenuBtn.addEventListener('click', transitionFactory(3, 2, scene3, scene2));


// scene1dn.addEventListener('click', () => {
//     if(!transitioning && currentScene === 1){
//         transitioning = true;
//         door.classList.remove('hide');
//         door.classList.add('transition-down');
//         doorShaker.classList.add('shake');
//         scene1.classList.add('shake-less');
//         setTimeout( () =>{
//             scene1.classList.add('hide');
//             scene1.classList.remove('shake-less');
//             doorShaker.classList.remove('shake');
//             doorShaker.classList.add('shake-less');
//             scene2.classList.remove('hide');
//             door.classList.remove('transition-down');
//             door.classList.add('transition-up');
//             setTimeout( () => {
//                 transitioning = false;
//                 currentScene = 2;
//                 door.classList.remove('transition-up');
//                 door.classList.add('hide');
//                 doorShaker.classList.remove('shake-less');
//             }, sceneAnimationTime + 150);
//         }, sceneAnimationTime + 150);
//     }
// });

// scene2dn.addEventListener('click', () => {
//     if(!transitioning && currentScene === 2){
//         transitioning = true;
//         door.classList.remove('hide');
//         door.classList.add('transition-down');
//         doorShaker.classList.add('shake');
//         scene2.classList.add('shake-less');
//         setTimeout( () =>{
//             scene2.classList.add('hide');
//             scene3.classList.remove('hide')
//             scene2.classList.remove('shake-less');
//             doorShaker.classList.remove('shake');
//             doorShaker.classList.add('shake-less');
//             door.classList.remove('transition-down');
//             door.classList.add('transition-up');
//             setTimeout( () => {
//                 transitioning = false;
//                 currentScene = 3;
//                 door.classList.remove('transition-up');
//                 door.classList.add('hide');
//                 doorShaker.classList.remove('shake-less');
//             }, sceneAnimationTime + 150);
//         }, sceneAnimationTime + 150);
//     }
// });

// scene2up.addEventListener('click', () => {
//     if(!transitioning && currentScene === 2){
//         transitioning = true;
//         door.classList.remove('hide');
//         door.classList.add('transition-down');
//         doorShaker.classList.add('shake');
//         scene2.classList.add('shake-less');
//         setTimeout( () =>{
//             scene2.classList.add('hide');
//             scene1.classList.remove('hide');
//             scene2.classList.remove('shake-less');
//             doorShaker.classList.remove('shake');
//             doorShaker.classList.add('shake-less');
//             door.classList.remove('transition-down');
//             door.classList.add('transition-up');
//             setTimeout( () => {
//                 transitioning = false;
//                 currentScene = 1;
//                 door.classList.remove('transition-up');
//                 door.classList.add('hide');
//                 doorShaker.classList.remove('shake-less');
//             }, sceneAnimationTime + 150);
//         }, sceneAnimationTime + 150);
//     }
// });

// scene3up.addEventListener('click', () => {
//     if(!transitioning && currentScene === 3){
//         transitioning = true;
//         door.classList.remove('hide');
//         door.classList.add('transition-down');
//         doorShaker.classList.add('shake');
//         scene3.classList.add('shake-less');
//         setTimeout( () =>{
//             scene3.classList.add('hide');
//             scene2.classList.remove('hide');
//             scene3.classList.remove('shake-less');
//             doorShaker.classList.remove('shake');
//             doorShaker.classList.add('shake-less');
//             door.classList.remove('transition-down');
//             door.classList.add('transition-up');
//             setTimeout( () => {
//                 transitioning = false;
//                 currentScene = 2;
//                 door.classList.remove('transition-up');
//                 door.classList.add('hide');
//                 doorShaker.classList.remove('shake-less');
//             }, sceneAnimationTime + 150);
//         }, sceneAnimationTime + 150);
//     }
// });
