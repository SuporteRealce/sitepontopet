$('.btn-menu-responsivo').click(function(){
	$(this).toggleClass('toggle');
	// $('.menu-responsivo').toggleClass('menu-responsivo-ativo');
	$('.menu-responsivo ul').toggleClass('ul-ativo');
});

if($('. ').find('ul')){
	$('.menu-principal .submenu').prev().append('<i class="fa fa-plus"></i>');
} else {
}

if($('.menu-responsivo').find('ul')){
	$('.menu-responsivo .submenu').prev().append('<i class="fa fa-plus"></i>');
} else {
}

$('.menu-responsivo ul li').click(function(){
	$(this).find('.submenu').toggleClass('submenu-ativo');
});

$(window).on('scroll', function(){
	var posicaoAtual = $(window).scrollTop();
   	var posicaoDiv = $('.teste').position().top >= 0;

   	if(posicaoAtual>=(posicaoDiv)) {
   		$('.menu-principal').addClass('menu-principal-fixado');
   		$('.menu-responsivo').addClass('menu-principal-fixado');
   	} else {
   		$('.menu-principal').removeClass('menu-principal-fixado');
   		$('.menu-responsivo').removeClass('menu-principal-fixado');
   	}
});