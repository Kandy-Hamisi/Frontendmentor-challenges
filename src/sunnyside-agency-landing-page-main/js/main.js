const mainButton = document.querySelector('.nav-btn');
const main = document.querySelector('.nav-btn__main');
const nav = document.querySelector('.nav');
const mynav = document.querySelector('.my-nav');

let pantallaMenu = false;

mainButton.onclick = () =>{
    alert();
}

// mainButton.addEventListener('click', toggleMenu);

// function toggleMenu(e){
//     if(!pantallaMenu){
//         main.classList.add('abierto');
//         nav.classList.add('abierto')
//         mynav.classList.add('abierto')
//         pantallaMenu = true;
//     } else {
//         main.classList.remove('abierto');
//         nav.classList.remove('abierto');
//         mynav.classList.remove('abierto');

//         pantallaMenu = false;
//     }

//     e.preventDefault();
// }


// escondiendo el menu

window.addEventListener('scroll',() => {
    const navbar = document.querySelector('.header');
    if (window.scrollY > 50) {
        navbar.style.display = 'none';
        navbar.style.transition = "all 5s ease";
        
    }else{
        navbar.style.display = 'block';
        navbar.style.transition = "all 5s ease";
    }
});


//  Scrolling Down button


function ScrollToDiv(){
    document.getElementById("about").scrollIntoView({
        behavior: 'smooth'
    });
}