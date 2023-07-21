var menuIcon = document.querySelector('.list-elem-znak');
var llist = document.querySelector('.list');

let x = 0;

menuIcon.onclick = function(e) {
    setTimeout(() => {
        x ++;
        if ( x % 2 !== 0) {
            llist.style.display = 'block';
        } else {
            llist.style.display = 'none';
        }; }, 100);
};


$(function() {
    $('#nav-icon6').click(function(){
        $(this).toggleClass('open');
    });
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});