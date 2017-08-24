$(document).ready(function(){
	$("#votebox").height($(window).height());
	$(window).resize(function(){
		$("#votebox").height($(window).height());
	})
	$("#submitvote").click(function(){
		setTimeout(function() {
			//$("#tipspage").removeAttr("style");
		}, 500);
		//$("#tipspage").attr("style","display:none;");
	})
});