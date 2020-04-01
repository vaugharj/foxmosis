const dropButton = document.getElementsByClassName('nav-dropdown');
const dropContent = document.getElementsByClassName('nav-dropdown-content');
const nav = document.getElementsByClassName('nav');

const dropdownToggle = (i) => {
    return (e) => {
        dropButton[i].classList.toggle('active');
        dropContent[i].classList.toggle('open');
        nav[i].classList.toggle('active');
        e.stopPropagation();
    }
}
for(var i = 0; i < dropButton.length; i++){
    dropButton[i].addEventListener('click', dropdownToggle(i));
};

document.addEventListener('click', (e)=>{
    for(var i = 0; i < dropButton.length; i++){
        dropButton[i].classList.remove('active');
    }
    for(var i = 0; i < dropContent.length; i++){
        dropContent[i].classList.remove('open');
    }
    for(var i = 0; i < nav.length; i++){
        nav[i].classList.remove('active');
    }
    
})