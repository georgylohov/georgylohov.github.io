$(function () {
	$(window).scroll(function() {
	    $('.why__text').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.why__item1').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.why__item2').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeIn animated.slower");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.why__item3').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.advantages__text').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeIn");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.advantages__button-wrapper').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.harvest__text').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.advantages__content').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeIn animated.slower");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.advantages__potatos').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeIn animated.slower");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.harvest__content').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeIn animated.slow");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.harvest__numbers').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeIn animated.slow");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.order__video').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.order__form-wrapper').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.footer__inner').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
});

$('.header__button-wrapper').click(function() { 
	
	$('.js-overlay').fadeIn();
	
});