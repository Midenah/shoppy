let bar =document.querySelector('#menu-bar');
let menu =document.querySelector('.alt-menu');

bar.onclick = () => {
    bar.classList.toggle("fa-bar");
    menu.classList.toggle("show");
};