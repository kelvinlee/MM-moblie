(function(a){a.fn.UItoTop=function(e){var b=a.extend({text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1200,easingType:"linear"},e),c="#"+b.containerID,d="#"+b.containerHoverID;a("body").append('<a href="#" id="'+b.containerID+'">'+b.text+"</a>");a(c).hide().click(function(){a("html, body").animate({scrollTop:0},b.scrollSpeed,b.easingType);return false}).prepend('<span id="'+
b.containerHoverID+'"></span>')/* .hover(function(){a(d,this).stop().animate({opacity:1},600,"linear")},function(){a(d,this).stop().animate({opacity:0},700,"linear")}) */;a(window).scroll(function(){var d=a(window).scrollTop();typeof document.body.style.maxHeight==="undefined"&&a(c).css({position:"absolute",top:a(window).scrollTop()+a(window).height()-50});d>b.min?a(c).fadeIn(b.inDelay):a(c).fadeOut(b.Outdelay)})}})(jQuery);
