$(function(){
	$("#navigation a").click(function(){ 
		if ($(this).parents("li:first").find(">ul").length>0) { 
			$("#navigation>ul ul").hide();
			var $h = $(this).parents("li:first").find(">ul");
			$(this).parents("li:first").find(">ul").show();
			$(this).parents("ul").show();
			var top = -($(this).parents("li:first").index()*$(this).parents("li:first").height());
			$(this).parents("li:first").find(">ul").css({top:top}); 
			var h = $h.find(">li").length*$h.find(">li:first").height()+20;
			//console.log(h);
			$("#navigation>ul").stop(false, true).animate({
                left: "-=100%"
            },
            300);
            $("#navigation").stop(false, true).animate({
                height: h+"px"
            },
            300);
            gotosroll();
            $("#list-title").hide();
            $("#list-title2").show();
            $("[name=data-list-title]").attr("data-old",$("[name=data-list-title]").html()).html($(this).html());
            $("[name=data-list-title]").attr("data-h-old",$("[name=data-list-title]").attr("data-h")).attr("data-h",h);
		return false;
		} 
	});
	$("[name=back-list-btn]").click(function(){
		
		$("[name=data-list-title]").html($("[name=data-list-title]").attr("data-old"));
		$("#navigation>ul").stop(false, true).animate({
            left: "+=100%"
        },
        300);
        if (( parseInt($("#navigation>ul").css("left")) + $("#navigation>ul").width() )>=0){
			$("#list-title").show();
            $("#list-title2").hide();
            var h = $("#navigation>ul>li").length*$("#navigation>ul>li:first").height()+20;
            $("#navigation").stop(false, true).animate({
	            height: h+"px"
	        },
	        300);
		}else{
	        $("#navigation").stop(false, true).animate({
	            height: $("[name=data-list-title]").attr("data-h-old")+"px"
	        },
	        300);
        }
        $("[name=data-list-title]").attr("data-h",$("[name=data-list-title]").attr("data-h-old"));
        gotosroll();
        return false;
	});
	$("#navigation li").addClass("ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c");
	$("#navigation li>div").addClass("ui-btn-inner ui-li");
	$("#navigation li>div>div").addClass("ui-btn-text");
	$("#navigation li>div>div>a").addClass("ui-link-inherit");
	$("#navigation li span").addClass("ui-icon ui-icon-arrow-r ui-icon-shadow");
	$("#navigation ul").each(function(){
		$(this).css({margin:"0px"}).addClass("ui-listview ui-listview-inset ui-shadow"); 
		//$(">li:last",this).addClass("ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-bottom ui-li-last");
	});
	function gotosroll() {
	 	console.log( $("#navigation").offset().top );
	 	$("html, body").animate({scrollTop:($("#navigation").offset().top-34)+"px"},300);
	 	
	} 
});