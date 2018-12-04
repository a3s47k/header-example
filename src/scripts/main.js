$(function(){
	
	menubarActive()
	toggleButton()
	dropdownMenu()
	gridCol()
	
})
function dropdownMenu(){
	$('ul .drop-down').each(function(index,val){
		$(val).hover(function(){
			$(this).closest('li').find('.drop-down-menu').addClass('show').removeClass('hide');
		},function(){
			$(this).closest('li').find('.drop-down-menu').removeClass('show').addClass('hide');
		}
		)
	})
	
}
function menubarActive(){
	$('ul li a').on('click',function(){
		$(this).parents('ul').find('li').removeClass('active')
		$(this).parents('li').addClass('active');
		


	})
}
function toggleButton(){
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
	$hamburger.toggleClass("is-active");
	$('#demo').toggleClass("toggle-menu");
	$('.header-sidebar').toggleClass("active");
	$('.header-sidebar-bg').toggleClass("active");
	$('header').toggleClass("active");
	console.log("Header")
	// Do something else, like open/close menu
  });
}


function gridCol(){

	var html = '<div class="toggle-button"> <button class="btn btn-primary" type="button">Grid</button> <button class="btn btn-dark" type="button">Fluid</button> </div><div class="toggle-grid active"> <div class="toggle-class container"> <div class="row"> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> </div> </div> </div>',css= '.toggle-button .btn-primary { position: fixed; right: 1rem; bottom: 2rem; z-index: 99; } .toggle-button .btn-dark { position: fixed; right: 1rem; bottom: 7rem; z-index: 99; } .toggle-grid { width: 100%; position: fixed; display: none; height: 100vh; z-index: 80; } .toggle-grid.active { display: block; } .toggle-grid .container, .toggle-grid .row { height: 100vh; } .toggle-grid .container .col .item, .toggle-grid .row .col .item { height: 100vh; background: rgba(128, 128, 128, 0.5); }'

	$('body').prepend(html)
	$('head').append('<style>'+css+'</style>')
	$(function(){
		$('.toggle-grid').removeClass('active');
		$(".toggle-button .btn-primary").on("click",function(){
			$('.toggle-grid').toggleClass('active');
		})
		$(".toggle-button .btn-dark").on("click",function(){
			$(".toggle-class").toggleClass('container container-fluid');
		})
	})
}
