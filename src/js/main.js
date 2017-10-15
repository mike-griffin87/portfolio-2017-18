/*jshint devel:true */
/*jshint esnext: true */

const hamburgerTarget = document.querySelector('.hamburger-container');
const hamburger = document.querySelector('.hamburger');

hamburgerTarget.addEventListener('click', function(){
    hamburger.classList.toggle('is-open');
    hamburgerTarget.classList.toggle('is-open');
});


function toggleOpen(e) { // jshint ignore:line
    console.log(this);
    e.classList.toggle('is-open');
} 
