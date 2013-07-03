$(document).ready(function() {
 $('.menu li li').show();
 $('.selected > a').toggle(
   function() {
     $('.menu li li').slideUp('fast');
   }, 
   function() {
     $('.menu li li').slideDown('fast');
   } 
   );
}); // end ready
