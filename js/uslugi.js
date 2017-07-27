$(document).ready(uslugi);

function uslugi () {

	$('.squad').click(function(){
			if ($(this).hasClass('selected')) { 
				$(this).removeClass('selected');
				$(this).parent().removeClass('selected_line');
				var id_sq = $(this).attr('id');
				$('#open_' + id_sq).slideUp(1000);
				}
			else if ($('div.squad').hasClass('selected')) {
				if ($(this).parent().hasClass('selected_line')) {
					$(".squad").removeClass('selected');
					$(this).addClass('selected');
					$('.all_block').fadeOut(200);
					var id_sq = $(this).attr('id');
					$('#open_' + id_sq).fadeIn(200);
				}
				else {
					$(".squad").removeClass('selected');
					$('.line_sq').removeClass('selected_line');
					$(this).addClass('selected');
					$(this).parent().addClass('selected_line');
					$('.all_block').slideUp(1000);
					var id_sq = $(this).attr('id');
					$('#open_' + id_sq).slideDown(1000);					
				}
			}
			else {
			var id_sq = $(this).attr('id');
			$('#open_' + id_sq).slideDown(1000);
			$(this).addClass('selected');
			$(this).parent().addClass("selected_line");
			}
	});
}




/*

function uslugi() {

var all_form =  $(".all_block").html();	
$("div.line_uslugi").remove();


$('.squad').click(function(){
	if ($(this).hasClass('selected')) { 
	$(this).removeClass('selected');
	$(this).parent().removeClass('selected_line');
	remove_all();
	setTimeout('$(".line_uslugi").remove();', 1250);
	}
	else if ($('div.squad').hasClass('selected')) {
		if ($(this).parent().hasClass('selected_line')) {
			$(".squad").removeClass('selected');
			$(this).addClass('selected');
			$('.line_uslugi').fadeOut(200);
			setTimeout('$("div.line_uslugi").remove();', 200);
			setTimeout(function() {$(".selected_line").after(all_form);
			$('.line_uslugi').fadeIn(200);}, 200);
		}
		else {
			remove_all();
			setTimeout('$("div.line_uslugi").remove();', 1250);
			$(this).addClass('selected');
			$(this).parent().addClass("selected_line");
			setTimeout(function() {$(".selected_line").after(all_form);
			$('.line_uslugi').slideDown(1000);},1250);
		}
	}
	else {
	$(this).addClass('selected');
	$(this).parent().addClass("selected_line");
	$(".selected_line").after(all_form);
	$('.line_uslugi').slideDown(1000);
	}
});

function remove_all() {
	$(".line_uslugi").slideUp(1000);
	$(".squad").removeClass('selected');
	$('.line_sq').removeClass('selected_line');
};



};

*/