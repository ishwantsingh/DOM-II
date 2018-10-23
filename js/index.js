// Your code goes here



//refrences
const navItems = document.querySelector('.nav')
const parentCont = document.querySelector('.container')
const img3 = document.querySelector('.img-fluid')
const contentAll = document.querySelector('.content-section')
const para1H2 = document.querySelector('.para1H2')
const headH41 = document.querySelector('.headH41')
const button = document.querySelector('.btn1')
const headH42 = document.querySelector('.headH42')
const headH43 = document.querySelector('.headH43')
const headerH21 = document.querySelector('.headerH21')
const logoHeading = document.querySelector('.logo-heading')

//console.log(navItems);
//events
navItems.addEventListener('mouseenter', () => {
    navItems.classList.toggle('nav-color');
    //event.target.style.color = "cyan";
    //console.log(event.target)
});

navItems.addEventListener('mouseleave', () => {
    navItems.classList.toggle('nav-color-default');
    
});


logoHeading.addEventListener('mousemove', () => {
    logoHeading.classList.toggle('colorRed');
    // event.target.style.color = "red"; 
    //event.target.style.fontSize = "15 px";
})

para1H2.addEventListener('dblclick', () => {
    para1H2.classList.toggle('textBig');
})

headH41.addEventListener('contextmenu', () => {
    headH41.classList.toggle('colorRed');
})

headH42.addEventListener('click', () => {
    headH42.classList.toggle('colorYelgre');
})

headH43.addEventListener('wheel', () => {
   headH43.classList.toggle('displayNone')
})

headerH21.addEventListener('mouseover', () => {
    headerH21.classList.toggle('colorYelgre');
})

//