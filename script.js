$(document).ready(function(){
  $('#menu-icon').on('click', function(){
    $('.navbar').toggleClass('expand');
    return false;
  });
});
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
AOS.init()