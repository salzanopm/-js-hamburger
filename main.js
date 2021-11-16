const myButton = document.getElementById('burger');
// console.log(myButton);

myButton.addEventListener('click',
    function() {
        const myMenu = document.getElementById('menu');
        myMenu.className = myMenu.classList + "active" + "hamburger-menu";
    }
);
