let menu = document.querySelector('#menu');
let nav = document.querySelector('#nav');

menu.addEventListener('click', () =>{
    if (nav.classList.contains('hidden')){
        nav.classList.remove('hidden')
    }
    else{
        nav.classList.add('hidden')
    }
})

