var menuIcon = document.querySelector('.list-elem-znak');
var llist = document.querySelector('.list');

let x = 0;

menuIcon.onclick = function(e) {
    setTimeout(() => {
        x ++;
        if ( x % 2 !== 0) {
            llist.style.display = 'block';
            menuIcon.innerHTML('X');
        } else {
            llist.style.display = 'none';
            menuIcon.innerHTML('☰');
        }; }, 100);
};

// menuIcon.onclick = function(e) {

// };

// menuIcon.onclick = function(e) {

// };


$(function() {
    $('#nav-icon6').click(function(){
        $(this).toggleClass('open');
    });
});