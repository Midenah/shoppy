let bar =document.querySelector('#solid');
let nav =document.querySelector('.firstly');

bar.onclick = () => {
    bar.classList.toggle("fa-bar");
    nav.classList.toggle("open");
};