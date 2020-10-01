$("#n_main").css('height', window.innerHeight);
$(".p_tile").css('height', window.innerHeight/4);
$(".p_img").css('height', window.innerHeight/4);
$(".b_img").css('height', window.innerHeight/4);
$("#main").html('<style> .p_tile:hover .p_hover{ height: '+window.innerHeight/4+'px !important; } </style>');

$(window).resize(function(){

	$("#n_main").css('height', window.innerHeight);
	$(".p_tile").css('height', window.innerHeight/4);
	$(".p_img").css('height', window.innerHeight/4);
	$(".b_img").css('height', window.innerHeight/4);
	$("#main").html('<style> .p_tile:hover .p_hover{ height: '+window.innerHeight/4+'px !important; } </style>');

});

// --- SHOW SCROLL --- \\

// SHOW / HIDE

var elementsShowable = new Array(

	'#am_photo',
	'.am_subtitle',
	'#s_a',
	'#s_b',
	'#s_d',
	'#s_e',
	'#s_f',
	'#s_g',
	'#s_h',
	'#s_i',
	'#s_j',
	'#pa_a',
	'.c_a',
	'.am_p'

);

$(window).scroll(function(){

	var eShow = new Array();
	

	for(var j=0;j<elementsShowable.length;j++){
	
		eShow[j] = $(elementsShowable[j]).offset().top;
		var scrollCoordsTop = $(window).scrollTop();
		
		if(eShow[j] <= scrollCoordsTop+window.innerHeight-250){

			$(elementsShowable[j]).css('opacity',1);
					
		};
		
	};
	
});

// HEIGHT 0 / 100

var s_elementsShowable = new Array(

	'#s_g1',
	'#s_g2',
	'#s_g3',
	'#s_g4',
	'#s_g5',
	'#s_g6',
	'#s_g7'

);
var s_heights = new Array(

	0,
	20,
	30,
	50,
	55,
	60,
	125

);

$(window).scroll(function(){

	var s_eShow = new Array();
	

	for(var k=0;k<s_elementsShowable.length;k++){
	
		s_eShow[k] = $(s_elementsShowable[k]).offset().top;
		var s_scrollCoordsTop = $(window).scrollTop();
		
		if(s_eShow[k] <= s_scrollCoordsTop+window.innerHeight-250){
			
			if(window.innerWidth > 599){
			$(s_elementsShowable[k]).css('height', s_heights[k]+'px');} else{
			
			$(s_elementsShowable[k]).css('width', s_heights[k]+'px');
			};
					
		};
		
	};
	
});

// ETAPY 

$(window).scroll(function(){

	var sg_elementCoords = $('.s_tiles').offset().top;
	var sg_scrollCoords = $(window).scrollTop();
	
	if(sg_elementCoords <= sg_scrollCoords+window.innerHeight-250){
	
		$("#st_1")
		.queue(function(as){$(this).css("background-size","125%"); as();}).delay(500)
		.queue(function(as){$("#st_1").css("background-size","100%"); as();}).delay(500)
		.queue(function(as){$("#st_2").css("background-size","125%"); as();}).delay(500)
		.queue(function(as){$("#st_2").css("background-size","100%"); as();}).delay(500)
		.queue(function(as){$("#st_3").css("background-size","125%"); as();}).delay(500)
		.queue(function(as){$("#st_3").css("background-size","100%"); as();}).delay(500)
		.queue(function(as){$("#st_4").css("background-size","125%"); as();}).delay(500)
		.queue(function(as){$("#st_4").css("background-size","100%"); as();}).delay(500)
		.queue(function(as){$("#st_5").css("background-size","125%"); as();}).delay(500)
		.queue(function(as){$("#st_5").css("background-size","100%");});
	
	};

});

// KONTAKT

$(window).scroll(function(){

	var c_elementCoords = $('.c_textarea').offset().top;
	var c_scrollCoords = $(window).scrollTop();
	
	if(c_elementCoords <= c_scrollCoords+window.innerHeight-250){
	
		$(".c_textarea")
		.queue(function(as){$(this).css("background","#FFFF99"); as();}).delay(800)
		.queue(function(as){$(this).css("background","#FFFFFF"); as();}).delay(800)
		.queue(function(as){$(this).css("background","#FFFF99"); as();}).delay(800)
		.queue(function(as){$(this).css("background","#FFFFFF"); as();}).delay(800)
		.queue(function(as){$(this).css("background","#FFFF99"); as();}).delay(800)
		.queue(function(as){$(this).css("background","#FFFFFF");});

	
	};

});

// KONTAKT -> IKONKI

$(window).scroll(function(){

	var ca_elementCoords = $('.c_contact_box').offset().top;
	var ca_scrollCoords = $(window).scrollTop();
	
	if(ca_elementCoords <= ca_scrollCoords+window.innerHeight-250){
	
		$("#c_b")
		.queue(function(as){$(this).css("-webkit-transform","scale(1.2)"); as();}).delay(500)
		.queue(function(as){$(this).css("-webkit-transform","scale(1)"); as();}).delay(500)
		.queue(function(as){$("#c_c").css("-webkit-transform","scale(1.2)"); as();}).delay(500)
		.queue(function(as){$("#c_c").css("-webkit-transform","scale(1)");});

	
	};

});


// --- STELLAR --- \\

$(window).stellar({

	hideDistantElements: false,
	responsive: true,
	horizontalScrolling: false

});

// --- REGUŁY PEGS --- \\

/*

$(window).scroll(function(){
    $("#b_left.b_left_fixed").css("top",Math.max(0,690-$(this).scrollTop()));
});
*/

$(document).ready(function() {
	$("nav").sticky({topSpacing:0});
});



var elemCoords = new Array(

	'main', 
	'about_me', 
	'skills', 
	'portfolio', 
	'partnership', 
	'contact'

);


$(window).scroll(function(){
	
	var element_coords = new Array();
	
	for(var i=0;i<elemCoords.length;i++){
	
		element_coords[i] = $("#"+elemCoords[i]).offset().top;
		var scroll_coords = $(window).scrollTop();
		
		if(element_coords[i] <= scroll_coords+400){

			var pg = elemCoords[i];

			$('.m_element').removeClass('active');
			$('.m_spi').removeClass('active');
			$('.m_melement').removeClass('active');
			$('#melement'+pg).addClass('active');
			$('#bmelement'+pg).addClass('active');
			$('#cmelement'+pg).addClass('active');
			$('#dmelement'+pg).addClass('active');
					
		};
		
	};
});

// --- PAGE LOADER --- \\

var page = window.location.hash.substring(1);


$('.m_element').removeClass('active');
$('.m_spi').removeClass('active');
$('.m_melement').removeClass('active');
$('#melement'+page).addClass('active');
$('#bmelement'+page).addClass('active');
$('#cmelement'+page).addClass('active');
$('#dmelement'+page).addClass('active');


$(window).bind('hashchange', function(){

	var newpage = window.location.hash.substring(1);
	if(!newpage){var newpage='main';};

	$('.m_element').removeClass('active');
	$('.m_spi').removeClass('active');
	$('.m_melement').removeClass('active');
	$('#melement'+newpage).addClass('active');
	$('#bmelement'+newpage).addClass('active');
	$('#cmelement'+newpage).addClass('active');
	$('#dmelement'+newpage).addClass('active');
	
});

// --- SMOOTH SCROLL --- \\


	/* BY LOAD FROM URL BAR */

if(page){

$(window).load(function(){
    $('html, body').animate({
        scrollTop: $('#'+page).offset().top-55
    }, 2000);
});

};

	/* BY LINK */


$(window).load(function(){
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-55
    }, 2000);

    return false;
});
}); 

	/* BY HASH CHANGE FROM URL BAR ON THE SAME PAGE */
	
$(window).bind('hashchange', function(){
	$(window).load(function(){
		$('html, body').animate({
			scrollTop: $(window.location.hash).offset().top-55
		}, 2000);
	});

});

/* MENU HIGHLIGHTER */

