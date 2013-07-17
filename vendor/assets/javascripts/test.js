//$(document).ready(function() {
$(function() {

 $('.container').animate(
   {
     right: '150px',
     opacity: .5,
     fontSize: '24px'
   },
   1500
   );
 
 $('.container__form').hide();
 $('.container__title').hover(function(){
    $('.container__form').slideToggle();
 }); // end toggle menu


 $('.answer').hide();
 $('.main h2').toggle(
  function() {
    $('.answer').slideDown('slow');
  },
  function() {
    $(this).next('.answer').slideUp();
  }
  );

}); // end ready
