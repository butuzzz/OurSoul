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