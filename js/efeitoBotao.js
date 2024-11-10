
let btn =  document.querySelector(".subscription-button");

btn.onmousemove = function(e){
    let x = e.pageX - btn.offsetLeft;
    let y = e.pagey - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + 'px');
    btn.style.setProperty('--eixoY', y + 'px');
}