(function($) {
$(function() {

	$('ul.regions').on('click', 'li:not(.current)', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.main').find('div.reg_match').eq($(this).index()).fadeIn(150).siblings('div.reg_match').hide();
	})

})
})(jQuery)


