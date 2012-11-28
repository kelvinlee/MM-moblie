$(function(){
	jQuery().UItoTop({ scrollSpeed: 200}); 
	$("#btn-new-search").die("click").live("click",function(){
		if ($("#newsearch").val().length>0) {
			$("#searchform").submit();
			$("#newsearch").val("");
		}
	});
	//点击加入购物车 动画效果 animate for cart.
	$("[name=addtocart]").die("click").live("click",function(){
		var $p = $(this).parents("li");
		var $e = $p.find("[name=product-img]");
		var $b = $(this).parents(".ui-page").find("[name=my-bag]"); 
		var $n = $e.clone().css({position:"fixed",top:($e.offset().top-$(window).scrollTop())+"px",left:$e.offset().left+"px"});
		console.log(($b.offset().top-$(window).scrollTop()-100)+","+($b.offset().left+$b.width()/2-$n.width()/2));
		if ($p.find("[name=Quantity]").length>0&&$("[name=Quantity]").val()>1){
			for (var i=0;i<$("[name=Quantity]").val();i++) {
				setTimeout(function(){
				var $nn = $n.clone();
				$("body").append($nn);
				console.log(($b.offset().top-$(window).scrollTop()-100)+","+($b.offset().left+$b.width()/2-$nn.width()/2));
				$nn.animate({top:($b.offset().top-$(window).scrollTop()-100)+"px",left:($b.offset().left+$b.width()/2-$nn.width()/2)+"px"},400,function(){
					$(this).animate({top:"+=100px",left:"+="+$(this).width()/2+"px",width:"0px"},200,function(){
						$(this).remove();
						addCartnum($b);
					})
				});
				},220*i);
			}
		}else{
			$("body").append($n);
			$n.animate({top:($b.offset().top-$(window).scrollTop()-100)+"px",left:($b.offset().left+$b.width()/2-$n.width()/2)+"px"},400,function(){
				$(this).animate({top:"+=100px",left:"+="+$(this).width()/2+"px",width:"0px"},200,function(){
					$(this).remove();
					addCartnum($b);
				})
			});
		}
		return false;
	});
});
function addCartnum($b) {
	if ($("[name=cart-num]").length>0) {
		var $e = $("[name=cart-num]");
		$e.html( parseInt($e.html()) +1);
		$e.animate({"font-size":"20px"},30,function(){
			setTimeout(function(){ $e.css({"font-size":"12px"}); },40);
		});
	}else{
		$b.find(".ui-btn-text").append('<i class="cart-num" name="cart-num">0</i>');
		addCartnum();
	}
}
$("#login").live("pagecreate",function(){
	$('input[type=password], input[type=email]', '.form').iTextClear();
});	