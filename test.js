let sky = document.getElementById('sky');
let vincent = document.getElementById('vincent');
let down = document.getElementById('down');
let btn = document.getElementById('btn');
let text = document.getElementById('text');
let header = document.querySelector('header'); 

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sky.style.left = value * 0.25 +'px';
    vincent.style.top = value * 1.05 +'px';
    down.style.top = value * 0.5 +'px';
    text.style.marginRight = value * 4 +'px';
    btn.style.marginTop = value * 1.5 +'px';
    header.style.top = value * 0.5 +'px';
})
