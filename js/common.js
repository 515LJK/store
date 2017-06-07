 //设置html字体大小
(function(){
	var html = document.documentElement;
	var iWidth = html.getBoundingClientRect().width;
	html.style.fontSize = iWidth/18.75+'px';
})();

$(function(){
	/*判断html高度*/
	(function(){

		if( $('html').innerHeight()<$(window).height() ){
			$('html').css('height','100%');
		}else{
			$('html').css('height','auto');
		}

	})();

	/*订单详情快递信息图标垂直居中*/
	(function(){
		var $wrap = $('.courier-wrap');
		var $img = $wrap.find('img');
		var oHeight = $img.innerHeight();
		var Oheight = $wrap.innerHeight();
		var height = (Oheight - oHeight)/2;

		$wrap.css('lineHeight',Oheight/20+'rem');
		$img.css('marginTop',height);

	})();

})