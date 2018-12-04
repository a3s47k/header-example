'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
$(function () {

	menubarActive();
	toggleButton();
	dropdownMenu();
	gridCol();
});
function dropdownMenu() {
	$('ul .drop-down').each(function (index, val) {
		$(val).hover(function () {
			$(this).closest('li').find('.drop-down-menu').addClass('show').removeClass('hide');
		}, function () {
			$(this).closest('li').find('.drop-down-menu').removeClass('show').addClass('hide');
		});
	});
}
function menubarActive() {
	$('ul li a').on('click', function () {
		$(this).parents('ul').find('li').removeClass('active');
		$(this).parents('li').addClass('active');
	});
}
function toggleButton() {
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function (e) {
		$hamburger.toggleClass("is-active");
		$('#demo').toggleClass("toggle-menu");
		$('.header-sidebar').toggleClass("active");
		$('.header-sidebar-bg').toggleClass("active");
		$('header').toggleClass("active");
		console.log("Header");
		// Do something else, like open/close menu
	});
}

function gridCol() {

	var html = '<div class="toggle-button"> <button class="btn btn-primary" type="button">Grid</button> <button class="btn btn-dark" type="button">Fluid</button> </div><div class="toggle-grid active"> <div class="toggle-class container"> <div class="row"> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> <div class="col"> <div class="item"></div> </div> </div> </div> </div>',
	    css = '.toggle-button .btn-primary { position: fixed; right: 1rem; bottom: 2rem; z-index: 99; } .toggle-button .btn-dark { position: fixed; right: 1rem; bottom: 7rem; z-index: 99; } .toggle-grid { width: 100%; position: fixed; display: none; height: 100vh; z-index: 80; } .toggle-grid.active { display: block; } .toggle-grid .container, .toggle-grid .row { height: 100vh; } .toggle-grid .container .col .item, .toggle-grid .row .col .item { height: 100vh; background: rgba(128, 128, 128, 0.5); }';

	$('body').prepend(html);
	$('head').append('<style>' + css + '</style>');
	$(function () {
		$('.toggle-grid').removeClass('active');
		$(".toggle-button .btn-primary").on("click", function () {
			$('.toggle-grid').toggleClass('active');
		});
		$(".toggle-button .btn-dark").on("click", function () {
			$(".toggle-class").toggleClass('container container-fluid');
		});
	});
}
//# sourceMappingURL=main.js.map
