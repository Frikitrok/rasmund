function diplay_hide (blockId, placeHolder)

{ 
    if ($(blockId).css('display') == 'none') 
        { 
            $(blockId).animate({height: 'show'}, 500);
            $('.fade_wrap').animate({height: 'show'}, 500);
            $("html").css('overflow','hidden'); 
            var el = document.getElementsByClassName('fade_text')[0];
            el.placeholder= placeHolder;
        } 
    else 
        {     
            $(blockId).animate({height: 'hide'}, 500);
            $("html").css('overflow','scroll');  
            $('.fade_wrap').val('');
        }};

function fade_out(blockId) {
	$('.fade_wrap').animate({height: 'hide'}, 500);
	$(blockId).animate({height: 'hide'}, 500);
	$("html").css('overflow','auto');
    $('form').trigger('reset');
}


function form_talk() {
    if ($('.form_talk').css('display') == 'none') 
        { 
            $('.form_talk').fadeIn(300);
        }
    else {
            $('.form_talk').fadeOut(300);
    }
}