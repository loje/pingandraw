(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);


$(document).ready(function(){
	$("#bigwall").height($(window).height() - $("#header").height() - $("#underbar").height());

	// var underSwiper = new Swiper('.swiper-under',{
	// 	loop: true,
	// 	autoplay: 3000,
	// 	direction : 'horizontal',
	// 	slidesPerView : 1,//'auto'
	// 	keyboardControl : true,//开启方向键盘控制 <和>
	// });

			var drawresultSwiper = new Swiper('.swiper-drawresult',{
				loop: false,
				autoplay: 1000,
				direction : 'horizontal',
				slidesPerView : 1,//'auto'
				//effect : 'cube',

				autoplayDisableOnInteraction : false,

				// 如果需要前进后退按钮
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
			}); 

			$("#drawresultstop").click(function(){
				$("#drawresultstop").attr("style","display:none;");
				$("#drawresultstart").removeAttr("style");
				drawresultSwiper.stopAutoplay();
			});
			$("#drawresultstart").click(function(){
				$("#drawresultstart").attr("style","display:none;");
				$("#drawresultstop").removeAttr("style");
				drawresultSwiper.startAutoplay();
			});
			$("#backdraw").click(function(){
				$("#drawresultstop").attr("style","display:none;");
				$("#drawresultstart").removeAttr("style");
				drawresultSwiper.stopAutoplay();
			});

			$(".drawresult-table").height($(".drawresult-box").height()-$(".drawresult-box h3").height() - 20);
	

	$("#signinpage").height($(".swiper-wallpage").height());
	$("#votepage").height($(".swiper-wallpage").height());
	$("#drawpage").height($(".swiper-wallpage").height());

	$("#drawbox").height($("#drawwall").height()-$("#drawtitle").height() -20);
	$("#drawresultpage").height($("#drawresult").height()-$("#drawtitle").height() -40);
	$(".prize-pic").width($("#prize").width() - 12);
	$(".prize-pic").height($("#prize").width() - 12);

	$("#drawstop").attr("style","display:none;");

	$("#draw").addClass("drawz-index");
	$(".draw").addClass("ani-opacity");
	$("#seeresult").click(function(){
		$("#draw").removeClass("drawz-index");
		$("#drawresult").addClass("drawz-index");
		$(".swiper-drawresult .swiper-wrapper").addClass("ani-opacity");
		$(".drawresult").addClass("ani-opacity");
		$(".draw").removeClass("ani-opacity");
	});

	$("#backdraw").click(function(){
		$("#drawresult").removeClass("drawz-index");
		$("#draw").addClass("drawz-index");
		$(".swiper-drawresult .swiper-wrapper").removeClass("ani-opacity");
		$(".drawresult").removeClass("ani-opacity");
		$(".draw").addClass("ani-opacity");
	});

	var lte = $(".drawman-te").children(".thumbnail").length;
	var lone = $(".drawman-one").children(".thumbnail").length;
	var ltwo = $(".drawman-two").children(".thumbnail").length;
	var lthree = $(".drawman-three").children(".thumbnail").length;
	var drawval = $(".drawsort select").val();

	//抽奖人数
	var count = 0;
	var res = new Array();
	var new_jc = new Array();

	var str = 0;

	$(mywx).each(function(i,e){
		if(e){
			var jiangchi = '';
			var jiangchi = '<div class="jc_'+myphone[i]+'" data-num="'+myphone[i]+'">'+e+'</div>';
			$(".clone").append(jiangchi);
		}
	});

	for(i=0;i<5;i++){
		var one = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawman-one').append(one);
		var rone = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawresult-one').append(rone);
	}

	for(i=0;i<10;i++){
		var twoone = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawman-two-one').append(twoone);
		var rtwoone = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawresult-two-one').append(rtwoone);
		var twotwo = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawman-two-two').append(twotwo);
		var rtwotwo = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawresult-two-two').append(rtwotwo);
		var twothree = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawman-two-three').append(twothree);
		var rtwothree = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawresult-two-three').append(rtwothree);
		var twofour = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawman-two-four').append(twofour);
		var rtwofour = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawresult-two-four').append(rtwofour);
		var twofive = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawman-two-five').append(twofive);
		var rtwofive = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawresult-two-five').append(rtwofive);
	}

	for(i=0;i<35;i++){
		var threeone = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawman-three-one').append(threeone);
		var rthreeone = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawresult-three-one').append(rthreeone);
	}
	for(i=0;i<35;i++){
		var threetwo = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawman-three-two').append(threetwo);
		var rthreetwo = '<div class="thumbnail"><div class="caption"><h2 data-name="">待抽奖</h2><p data-name=""></p></div></div>';
		$('.drawresult-three-two').append(rthreetwo);
	}

	
	//抽特等奖
	function intervalte(){
		beat();
	}

	//抽一等奖
	function intervalone(){
		beat();
	}

	//抽二等奖1-10
	function intervaltwoone(){
		beat();
	}

	//抽二等奖11-20
	function intervaltwotwo(){
		beat();
	}

	//抽二等奖21-30
	function intervaltwothree(){
		beat();
	}

	//抽二等奖31-40
	function intervaltwofour(){
		beat();
	}

	//抽二等奖41-50
	function intervaltwofive(){
		beat();
	}

	//抽三等奖1-35
	function intervalthreeone(){
		beat();
	}

	//抽三等奖36-70
	function intervalthreetwo(){
		beat();
	}

	//抽特等奖
	function intervalbuchou(){
		beat();
	}

	$(".drawsort select").change(function(){
		if($(this).val() == "all"){
			$(".drawman-all").removeAttr("style");
			$(".drawman-te").attr("style","display:none;");
			$(".drawman-one").attr("style","display:none;");
			$(".drawman-two-one").attr("style","display:none;");
			$(".drawman-two-two").attr("style","display:none;");
			$(".drawman-two-three").attr("style","display:none;");
			$(".drawman-two-four").attr("style","display:none;");
			$(".drawman-two-five").attr("style","display:none;");
			$(".drawman-three-one").attr("style","display:none;");
			$(".drawman-three-two").attr("style","display:none;");
			$(".drawman-buchou").attr("style","display:none;");
		}else if($(this).val() == "te"){
			$(".drawman-all").attr("style","display:none;");
			$(".drawman-te").removeAttr("style");
			$(".drawman-one").attr("style","display:none;");
			$(".drawman-two-one").attr("style","display:none;");
			$(".drawman-two-two").attr("style","display:none;");
			$(".drawman-two-three").attr("style","display:none;");
			$(".drawman-two-four").attr("style","display:none;");
			$(".drawman-two-five").attr("style","display:none;");
			$(".drawman-three-one").attr("style","display:none;");
			$(".drawman-three-two").attr("style","display:none;");
			$(".drawman-buchou").attr("style","display:none;");
		}else if($(this).val() == "1"){
			$(".drawman-all").attr("style","display:none;");
			$(".drawman-te").attr("style","display:none;");
			$(".drawman-one").removeAttr("style");
			$(".drawman-two-one").attr("style","display:none;");
			$(".drawman-two-two").attr("style","display:none;");
			$(".drawman-two-three").attr("style","display:none;");
			$(".drawman-two-four").attr("style","display:none;");
			$(".drawman-two-five").attr("style","display:none;");
			$(".drawman-three-one").attr("style","display:none;");
			$(".drawman-three-two").attr("style","display:none;");
			$(".drawman-buchou").attr("style","display:none;");
		}else if($(this).val() == "21"){
			$(".drawman-all").attr("style","display:none;");
			$(".drawman-te").attr("style","display:none;");
			$(".drawman-one").attr("style","display:none;");
			$(".drawman-two-one").removeAttr("style");
			$(".drawman-two-two").attr("style","display:none;");
			$(".drawman-two-three").attr("style","display:none;");
			$(".drawman-two-four").attr("style","display:none;");
			$(".drawman-two-five").attr("style","display:none;");
			$(".drawman-three-one").attr("style","display:none;");
			$(".drawman-three-two").attr("style","display:none;");
			$(".drawman-buchou").attr("style","display:none;");
		}else if($(this).val() == "22"){
			$(".drawman-all").attr("style","display:none;");
			$(".drawman-te").attr("style","display:none;");
			$(".drawman-one").attr("style","display:none;");
			$(".drawman-two-one").attr("style","display:none;");
			$(".drawman-two-two").removeAttr("style");
			$(".drawman-two-three").attr("style","display:none;");
			$(".drawman-two-four").attr("style","display:none;");
			$(".drawman-two-five").attr("style","display:none;");
			$(".drawman-three-one").attr("style","display:none;");
			$(".drawman-three-two").attr("style","display:none;");
			$(".drawman-buchou").attr("style","display:none;");
		}else if($(this).val() == "23"){
			$(".drawman-all").attr("style","display:none;");
			$(".drawman-te").attr("style","display:none;");
			$(".drawman-one").attr("style","display:none;");
			$(".drawman-two-one").attr("style","display:none;");
			$(".drawman-two-two").attr("style","display:none;");
			$(".drawman-two-three").removeAttr("style");
			$(".drawman-two-four").attr("style","display:none;");
			$(".drawman-two-five").attr("style","display:none;");
			$(".drawman-three-one").attr("style","display:none;");
			$(".drawman-three-two").attr("style","display:none;");
			$(".drawman-buchou").attr("style","display:none;");
		}else if($(this).val() == "24"){
			$(".drawman-all").attr("style","display:none;");
			$(".drawman-te").attr("style","display:none;");
			$(".drawman-one").attr("style","display:none;");
			$(".drawman-two-one").attr("style","display:none;");
			$(".drawman-two-two").attr("style","display:none;");
			$(".drawman-two-three").attr("style","display:none;");
			$(".drawman-two-four").removeAttr("style");
			$(".drawman-two-five").attr("style","display:none;");
			$(".drawman-three-one").attr("style","display:none;");
			$(".drawman-three-two").attr("style","display:none;");
			$(".drawman-buchou").attr("style","display:none;");
		}else if($(this).val() == "25"){
			$(".drawman-all").attr("style","display:none;");
			$(".drawman-te").attr("style","display:none;");
			$(".drawman-one").attr("style","display:none;");
			$(".drawman-two-one").attr("style","display:none;");
			$(".drawman-two-two").attr("style","display:none;");
			$(".drawman-two-three").attr("style","display:none;");
			$(".drawman-two-four").attr("style","display:none;");
			$(".drawman-two-five").removeAttr("style");
			$(".drawman-three-one").attr("style","display:none;");
			$(".drawman-three-two").attr("style","display:none;");
			$(".drawman-buchou").attr("style","display:none;");
		}else if($(this).val() == "31"){
			$(".drawman-all").attr("style","display:none;");
			$(".drawman-te").attr("style","display:none;");
			$(".drawman-one").attr("style","display:none;");
			$(".drawman-two-one").attr("style","display:none;");
			$(".drawman-two-two").attr("style","display:none;");
			$(".drawman-two-three").attr("style","display:none;");
			$(".drawman-two-four").attr("style","display:none;");
			$(".drawman-two-five").attr("style","display:none;");
			$(".drawman-three-one").removeAttr("style");
			$(".drawman-three-two").attr("style","display:none;");
			$(".drawman-buchou").attr("style","display:none;");
		}else if($(this).val() == "32"){
			$(".drawman-all").attr("style","display:none;");
			$(".drawman-te").attr("style","display:none;");
			$(".drawman-one").attr("style","display:none;");
			$(".drawman-two-one").attr("style","display:none;");
			$(".drawman-two-two").attr("style","display:none;");
			$(".drawman-two-three").attr("style","display:none;");
			$(".drawman-two-four").attr("style","display:none;");
			$(".drawman-two-five").attr("style","display:none;");
			$(".drawman-three-one").attr("style","display:none;");
			$(".drawman-three-two").removeAttr("style");
			$(".drawman-buchou").attr("style","display:none;");
		}else if($(this).val() == "buchou"){
			$(".drawman-all").attr("style","display:none;");
			$(".drawman-te").attr("style","display:none;");
			$(".drawman-one").attr("style","display:none;");
			$(".drawman-two-one").attr("style","display:none;");
			$(".drawman-two-two").attr("style","display:none;");
			$(".drawman-two-three").attr("style","display:none;");
			$(".drawman-two-four").attr("style","display:none;");
			$(".drawman-two-five").attr("style","display:none;");
			$(".drawman-three-one").attr("style","display:none;");
			$(".drawman-three-two").attr("style","display:none;");
			$(".drawman-buchou").removeAttr("style");
		}
	});

	//开始对应奖项抽奖
	$("#drawnow").click(function(){
		new_jc = [];
		$(".clone div").each(function(i,e){
			var ss = $(this).data('num');
			new_jc.push(ss);
		});
		// console.log(new_jc);
		if($(".drawsort select").val() == "all"){
			alert("你忘了选择奖项");
		}else if($(".drawsort select").val() == "te"){
			if($(".drawman-te .thumbnail .caption h2").text() !== "待抽奖"){
				alert("本奖项已完成抽奖！");
				return false;
			}else{
				count = 1;

				$("#drawnow").attr("style","display:none;");
				$("#drawstop").removeAttr("style");
				intervalte();
				$(".drawsort select").attr("disabled","disabled");	
			}
		}else if($(".drawsort select").val() == "1"){
			if($(".drawman-one .thumbnail:first-child .caption h2").text() !== "待抽奖"){
				alert("本奖项已完成抽奖！");
				return false;
			}else{
				count = 5;
				$("#drawnow").attr("style","display:none;");
				$("#drawstop").removeAttr("style");
				intervalone();
				$(".drawsort select").attr("disabled","disabled");
			}
		}else if($(".drawsort select").val() == "21"){
			if($(".drawman-two-one .thumbnail:first-child .caption h2").text() !== "待抽奖"){
				alert("二等奖1-10名已经完成抽奖！");
				return false;
			}else{
				count = 10;

				$("#drawnow").attr("style","display:none;");
				$("#drawstop").removeAttr("style");
				intervaltwoone();
				$(".drawsort select").attr("disabled","disabled");
			}
		}else if($(".drawsort select").val() == "22"){
			if($(".drawman-two-two .thumbnail:first-child .caption h2").text() !== "待抽奖"){
				alert("二等奖11-21名已经完成抽奖！");
				return false;
			}else{
				count = 10;

				$("#drawnow").attr("style","display:none;");
				$("#drawstop").removeAttr("style");
				intervaltwotwo();
				$(".drawsort select").attr("disabled","disabled");
			}
		}else if($(".drawsort select").val() == "23"){
			if($(".drawman-two-three .thumbnail:first-child .caption h2").text() !== "待抽奖"){
				alert("二等奖21-30名已经完成抽奖！");
				return false;
			}else{
				count = 10;

				$("#drawnow").attr("style","display:none;");
				$("#drawstop").removeAttr("style");
				intervaltwothree();
				$(".drawsort select").attr("disabled","disabled");
			}
		}else if($(".drawsort select").val() == "24"){
			if($(".drawman-two-four .thumbnail:first-child .caption h2").text() !== "待抽奖"){
				alert("二等奖31-40名已经完成抽奖！");
				return false;
			}else{
				count = 10;

				$("#drawnow").attr("style","display:none;");
				$("#drawstop").removeAttr("style");
				intervaltwofour();
				$(".drawsort select").attr("disabled","disabled");
			}
		}else if($(".drawsort select").val() == "25"){
			if($(".drawman-two-five .thumbnail:first-child .caption h2").text() !== "待抽奖"){
				alert("二等奖41-50名已经完成抽奖！");
				return false;
			}else{
				count = 10;

				$("#drawnow").attr("style","display:none;");
				$("#drawstop").removeAttr("style");
				intervaltwofive();
				$(".drawsort select").attr("disabled","disabled");
			}
		}else if($(".drawsort select").val() == "31"){
			if($(".drawman-three-one .thumbnail:first-child .caption h2").text() !== "待抽奖"){
				alert("三等奖1-35名已经完成抽奖！");
				return false;
			}else{
				count = 35;

				$("#drawnow").attr("style","display:none;");
				$("#drawstop").removeAttr("style");
				intervalthreeone();
				$(".drawsort select").attr("disabled","disabled");
			}
		}else if($(".drawsort select").val() == "32"){
			if($(".drawman-three-two .thumbnail:first-child .caption h2").text() !== "待抽奖"){
				alert("三等奖36-70名已经完成抽奖！");
				return false;
			}else{
				count = 35;

				$("#drawnow").attr("style","display:none;");
				$("#drawstop").removeAttr("style");
				intervalthreetwo();
				$(".drawsort select").attr("disabled","disabled");
			}
		}else if($(".drawsort select").val() == "buchou"){
			if($(".drawman-buchou .thumbnail .caption h2").text() !== "待抽奖"){
				alert("本奖项已完成抽奖！");
				return false;
			}else{
				count = 1;

				$("#drawnow").attr("style","display:none;");
				$("#drawstop").removeAttr("style");
				intervalte();
				$(".drawsort select").attr("disabled","disabled");	
			}
		}
	});
	$("#drawstop").click(function(){
		clearTimeout(g_Timer);
		$(res).each(function(i,e){
			console.log(e);
			$(".jc_"+e).remove();
		});
		$("#drawstop").attr("style","display:none;");
		$("#drawnow").removeAttr("style");
		$(".drawsort select").removeAttr("disabled");

		if($(".drawman-te .thumbnail .caption h2").text() !== "待抽奖" & $(".drawman-one .thumbnail:first-child .caption h2").text() !== "待抽奖" & $(".drawman-two-one .thumbnail:first-child .caption h2").text() !== "待抽奖" & $(".drawman-two-two .thumbnail:first-child .caption h2").text() !== "待抽奖" & $(".drawman-two-three .thumbnail:first-child .caption h2").text() !== "待抽奖" & $(".drawman-two-four .thumbnail:first-child .caption h2").text() !== "待抽奖" & $(".drawman-two-five .thumbnail:first-child .caption h2").text() !== "待抽奖" & $(".drawman-three-one .thumbnail:first-child .caption h2").text() !== "待抽奖" & $(".drawman-three-two .thumbnail:first-child .caption h2").text() !== "待抽奖"){
			$(".seeresult").removeAttr("style");
		}
	});

	function beat() {
		res = [];
		g_Timer = setTimeout(beat, 100);
		updateRndNum();
	}

	function updateRndNum(){
		var arr = getArrayItems(new_jc,count);
		res = arr;
		var ccc = $(".drawsort select").val();
		console.log(ccc);
		switch(ccc){
			case 'te':
				$(arr).each(function(i,e){
					var name = $(".jc_"+e).text();
					$(".drawman-te .thumbnail p").text(e);
					$(".drawman-te .thumbnail h2").text(name);
					$(".drawresult-te .thumbnail p").text(e);
					$(".drawresult-te .thumbnail h2").text(name);
				});
				break;
			case '1':
				console.log(arr);
				$(arr).each(function(i,e){
					var name = $(".jc_"+e).text();
					var n = i+1;
					$(".drawman-one .thumbnail:nth-child("+n+") p").text(e);
					$(".drawman-one .thumbnail:nth-child("+n+") h2").text(name);
					$(".drawresult-one .thumbnail:nth-child("+n+") p").text(e);
					$(".drawresult-one .thumbnail:nth-child("+n+") h2").text(name);
				});
				break;
			case '21':
				$(arr).each(function(i,e){
					var name = $(".jc_"+e).text();
					var n = i+1;
					$(".drawman-two-one .thumbnail:nth-child("+n+") p").text(e);
					$(".drawman-two-one .thumbnail:nth-child("+n+") h2").text(name);
					$(".drawresult-two-one .thumbnail:nth-child("+n+") p").text(e);
					$(".drawresult-two-one .thumbnail:nth-child("+n+") h2").text(name);
				});
				break;
			case '22':
				$(arr).each(function(i,e){
					var name = $(".jc_"+e).text();
					var n = i+1;
					$(".drawman-two-two .thumbnail:nth-child("+n+") p").text(e);
					$(".drawman-two-two .thumbnail:nth-child("+n+") h2").text(name);
					$(".drawresult-two-two .thumbnail:nth-child("+n+") p").text(e);
					$(".drawresult-two-two .thumbnail:nth-child("+n+") h2").text(name);
				});
				break;
			case '23':
				$(arr).each(function(i,e){
					var name = $(".jc_"+e).text();
					var n = i+1;
					$(".drawman-two-three .thumbnail:nth-child("+n+") p").text(e);
					$(".drawman-two-three .thumbnail:nth-child("+n+") h2").text(name);
					$(".drawresult-two-three .thumbnail:nth-child("+n+") p").text(e);
					$(".drawresult-two-three .thumbnail:nth-child("+n+") h2").text(name);
				});
				break;
			case '24':
				$(arr).each(function(i,e){
					var name = $(".jc_"+e).text();
					var n = i+1;
					$(".drawman-two-four .thumbnail:nth-child("+n+") p").text(e);
					$(".drawman-two-four .thumbnail:nth-child("+n+") h2").text(name);
					$(".drawresult-two-four .thumbnail:nth-child("+n+") p").text(e);
					$(".drawresult-two-four .thumbnail:nth-child("+n+") h2").text(name);
				});
				break;
			case '25':
				$(arr).each(function(i,e){
					var name = $(".jc_"+e).text();
					var n = i+1;
					$(".drawman-two-five .thumbnail:nth-child("+n+") p").text(e);
					$(".drawman-two-five .thumbnail:nth-child("+n+") h2").text(name);
					$(".drawresult-two-five .thumbnail:nth-child("+n+") p").text(e);
					$(".drawresult-two-five .thumbnail:nth-child("+n+") h2").text(name);
				});
				break;
				
			case "31":
				$(arr).each(function(i,e){
					console.log(i);
					var name = $(".jc_"+e).text();
					var n = i+1;
					$(".drawman-three-one .thumbnail:nth-child("+n+") p").text(e);
					$(".drawman-three-one .thumbnail:nth-child("+n+") h2").text(name);
					$(".drawresult-three-one .thumbnail:nth-child("+n+") p").text(e);
					$(".drawresult-three-one .thumbnail:nth-child("+n+") h2").text(name);
				});
				break;
			case "32":
				$(arr).each(function(i,e){
					console.log(i);
					var name = $(".jc_"+e).text();
					var n = i+1;
					$(".drawman-three-two .thumbnail:nth-child("+n+") p").text(e);
					$(".drawman-three-two .thumbnail:nth-child("+n+") h2").text(name);
					$(".drawresult-three-two .thumbnail:nth-child("+n+") p").text(e);
					$(".drawresult-three-two .thumbnail:nth-child("+n+") h2").text(name);
				});
				break;
			case 'buchou':
				$(arr).each(function(i,e){
					var name = $(".jc_"+e).text();
					$(".drawman-buchou .thumbnail p").text(e);
					$(".drawman-buchou .thumbnail h2").text(name);
					$(".drawresult-buchou .thumbnail p").text(e);
					$(".drawresult-buchou .thumbnail h2").text(name);
				});
				break;
			default:
				return false;
		}
			
		return arr;
	}

	function getArrayItems(arr, num) {
		//新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
		var temp_array = new Array();
		for (var index in arr) {
			temp_array.push(arr[index]);
		}
		//取出的数值项,保存在此数组
		var return_array = new Array();
		for (var i = 0; i<num; i++) {
			//判断如果数组还有可以取出的元素,以防下标越界
			if (temp_array.length>0) {
				//在数组中产生一个随机索引
				var arrIndex = Math.floor(Math.random()*temp_array.length);
				//将此随机索引的对应的数组元素值复制出来
				return_array[i] = temp_array[arrIndex];
				//然后删掉此索引的数组元素,这时候temp_array变为新的数组
				temp_array.splice(arrIndex, 1);
			} else {
				//数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
				break;
			}
		}
		return return_array;
	}

})