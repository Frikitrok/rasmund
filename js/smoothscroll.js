$(document).ready(function() {
 
$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(el).offset().top}, 2000);
        return false; 
});
    
});