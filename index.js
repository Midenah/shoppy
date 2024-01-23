let bar =document.querySelector('#menu');
let menu =document.querySelector('.alt-menu');

bar.onclick = () => {
    bar.classList.add("fa-bars");
    menu.classList.toggle("show");
};