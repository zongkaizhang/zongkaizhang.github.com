$(document).ready(function(){
/*return top*/
(function(){
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$("#top").fadeIn(500);
		} else {
			$("#top").fadeOut(500);
		}
	});
	$("#top").click(function() {
		$("html,body").animate({scrollTop: "0"}, 500);
	});

	$(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});
})();
/*category menu click*/   
(function(){
    $(".cates").hide();
    $(".category-list li:first-child").css({"background-color": "#CE2323","color":"#FFFFFF"});
    $(".category-list li")
    $(".category-list li").bind("click",function(){
        $(this).css({"background-color": "#CE2323","color":"#FFFFFF"}).siblings().css({"background-color":"transparent","color":"#000000"});
        var cateName = $(this).attr("data-cate");
        $(".cate-posts > ul[data-cate != "+cateName+"]").hide(280);
        $(".cate-posts > ul[data-cate = "+cateName+"]").show(400);
    }); 
})();

/*right catalog*/
(function(){
   if (typeof $('#markdown-toc').html() === 'undefined') {
        $('.catalog-menu').hide();
    } else {
        $('.catalog-menu .catalog-menu-content').html($('#markdown-toc').html());
    } 
})();

/*homepage*/
(function(){
    var pull = $('#pull');
    menu = $('nav ul');
    menuHeight  = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
})();
});
