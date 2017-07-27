$(document).ready(init);

function init() {
$(".pg_up").hide();
$(function () {$(window).scroll(function () {if ($(this).scrollTop() > 300) {$(".pg_up").fadeIn();} else {$(".pg_up").fadeOut(); } }); $(".pg_up").click(function() {$("body,html").animate({scrollTop: 0}, 800); return false; }); });


 
$('.vkladki a').click(function(){
	var click_id=$(this).attr('id');
	if (click_id != $('.vkladki a.active').attr('id') ) {
			$('.vkladki a').removeClass('active');
			$(this).addClass('active');
			$('.vkladki div').removeClass('active');
			$('#con_' + click_id).addClass('active');
		}
	})


}


function addComm() {
	var text_comm = $("#ttt").val();
	$(".wrap").append("<div class='comm'></div>");
	var block = $('.comm')
	$(".comm:empty").append("<p>" + text_comm + "</p>");
}; 


var change = 0;
var more_px = 0;

function more() {
	var num_com = 0;
$(".comment").each(function(){
  num_com++;
});
var width_com = (num_com - 3) * 120;

	if (change < width_com) {
more_px = change + 360;
$(".comm_block").animate({scrollTop: more_px}, 1000);
change = more_px;
	}
	else return false;
};

function more_reverse() {
	if (change > 359) {
		more_px = change - 360;
		$(".comm_block").animate({scrollTop: more_px}, 1000);
		change = more_px;
	}
	else return false;
};

var change_proj = 0;
var more_px_proj = 0;
function more_proj() {
	var num_proj = 0;
	var proj_height = 0;
	$(".projects_line").each(function(){
  	num_proj++; 
  	proj_height = (num_proj * 200) + 20;
	});
	$('.projects').animate({'height': proj_height},1500);
	$('.v , .dale').fadeOut(300);
	setTimeout('$(".v_reverse").fadeIn(300);', 300);
}


function more_reverse_proj() {
	$('.projects').animate({'height': "400"},1500);
	$('.v_reverse').fadeOut(300);
	setTimeout('$(".v , .dale").fadeIn(300);', 300);
}







/* касательно проектов */
/* 
var change_proj = 0;
var more_px_proj = 0;
function more_proj() {
	var num_proj = 0;
	$(".projects_line").each(function(){
  	num_proj++; 
	});
	var width_proj = (num_proj * 210) -420;
	if (change_proj < width_proj) {
	more_px_proj = change_proj + 210;
	$(".projects").animate({scrollTop: more_px_proj}, 1000);
	change_proj = more_px_proj;
	}
	else return false;
}

function more_reverse_proj() {
	if (change_proj > 209) {
		more_px_proj = change_proj - 210;
		$(".projects").animate({scrollTop: more_px_proj}, 1000);
		change_proj = more_px_proj;
	}
	else return false;
};
*/ 

    
