$(document).ready(function() {
    $('.slide-section').click, 'a[href^="#"]',(function(e){
var linkHref = $(this).attr('href');

var headerHeight = $('header').outerHeight();


$('html,body').animate({
scrollTop: $($.attr(this,'href').offset().top
},1000);

e.preventDefault();

});
});
// console.log($(linkHref).offset().top);
// console.log(headerHeight);
//
