$(document).ready(function() {
 $('.menu li li').show();
 $('.selected > a').toggle(
   function() {
     $('.menu li li').fadeOut('fast');
   }, 
   function() {
     $('.menu li li').fadeIn('fast');
   } 
   );
}); // end ready
