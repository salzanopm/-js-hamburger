const myButton = document.querySelector('.header-right > a');
 console.log(myButton);

myButton.addEventListener('click',
function(){
    const burgerMenu = document.querySelector('.hamburger-menu');
    burgerMenu.classList.add('active')
}
)

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click',
function() {
    const burgerMenu = document.querySelector('.hamburger-menu')
    burgerMenu.classList.remove('active')
}
)