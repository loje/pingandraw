$(document).ready(function(){
	$("#govote").click(function(){
		$("#votebox").removeAttr("style");
		$("#messagebox").attr("style","display:none;");
	});
	$("#gowall").click(function(){
		$("#messagebox").removeAttr("style");
		$("#votebox").attr("style","display:none;");
	});


	$("#messagebtn").click(function(){
		$("#tipspage").removeAttr("style");
		setTimeout(function() {
			$("#tipspage").attr("style","display:none;");
		}, 1000);
	})

	$(".voteit .radio label").click(function(){
		$(".voteit").attr("style","display:none;");
	});
})