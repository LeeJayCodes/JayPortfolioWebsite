
// scroll events
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navList li');
const greetingSection = document.querySelector('#greeting');
const squares = document.querySelectorAll('.square');

window.addEventListener('scroll', () =>{
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(scrollY >= (sectionTop - sectionHeight / 2)){
            currentSection = section.getAttribute('id');
        }
    })
    
    navLi.forEach (li => {
        li.classList.remove('active');
        if(li.id.toLowerCase().includes(currentSection.toLowerCase())){
            li.classList.add('active');

        }
    })

    let  greetingSectionBottom = greetingSection.offsetHeight;
    console.log(greetingSectionBottom);
    console.log(window.pageYOffset);
        
    // Check if the user has scrolled past the bottom of the greeting section
    if (window.pageYOffset > (greetingSectionBottom / 3)) {
        squares.forEach(square => {
            if (square.classList.contains('right'))
            {
              square.classList.add('move-top');
            }
            if(square.classList.contains('left'))
            {
              square.classList.add('move-right');
            }
        })
    } 
    else {
        squares.forEach(square => {
            square.classList.remove('move-top');
            square.classList.remove('move-right');
        })
    }
})


// nav burger event

const menu = document.querySelector('.navList');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navHead');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    menu.classList.add('active');
    nav.classList.add('active');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menu.classList.remove('active');
    nav.classList.remove('active');
  }
});


// Soft-Skills design getting rotate values based on the position of the cursor

const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e)=>{
    rotateElement(e, pre);
});
function rotateElement(event, element){
    // get moust position
    const x = event.clientX;
    const y = event.clientY;

    // find point in the middle
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // find offset from middle (maximum rotating degree = 45)
    const offSetX = ((x - middleX) / middleX) * 45;
    const offSetY = ((y - middleY) / middleY) * 45;

    element.style.setProperty("--rotateX", 0 - offSetY + "deg");
    element.style.setProperty("--rotateY", offSetX + "deg");

}