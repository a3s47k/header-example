$(function(){
	dropdownMenu()
	menubarActive()
})
function dropdownMenu(){
	$('ul .drop-down').on({
		mouseenter: function(){
			$(this).addClass('show')
			$('.drop-down-menu').css({
				"display": "block"
			});
		},
		mouseleave: function(){
			$(this).removeClass('show')
			$('.drop-down-menu').css({
				"display": "none"
			});
		}
	}
	)
}
function menubarActive(){
	$('ul li a').on('click',function(){
		$(this).parents('ul').find('li').removeClass('active')
		$(this).parents('li').addClass('active');


	})

}

