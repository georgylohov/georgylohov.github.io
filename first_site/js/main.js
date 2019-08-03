
var btn = document.getElementById('btn');

btn.onclick = function (e) {
	e.preventDefault();
	alert("Вы сделали первый шаг к мечте! ;)")
}

$(function () {
	$(window).scroll(function() {
	    $('#learn .learn__title').each(function(){
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
	    $('.skill-two').each(function(){
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
	    $('.skill-one').each(function(){
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
	    $('.skill-three').each(function(){
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
	    $('.h2').each(function(){
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
	    $('.input-all').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("swing");
	        }
	    });
	});
});

$(function () {
	$(window).scroll(function() {
	    $('.btn-form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
});

$('.parallax').on('mousemove', (e) => {
	const x = e.pageX / $(window).width();
	const y = e.pageY / $(window).height();

	$('.title').css(
		'transform',
		'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)'
	);

	$('.travel').css(
		'transform',
		'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)'
	);

	$('.p').css(
		'transform',
		'translate(' + x * 10 + 'px, ' + y * 10 + 'px)'
	);
});

var granimInstance = new Granim({
    element: '.header',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});