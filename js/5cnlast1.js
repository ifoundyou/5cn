car2.fetch({//传地址，拿尾页内容和广告
	url:'http://www.5.cn/Somehandle/rmajax/getAd',
	data:'jsname=5cnlast1.js&id='+5+'&url='+location.href,
	dataType:'json',
	success:function(msg){
		render_pageLast1.init(msg);
 	}
});
$("<link>").attr({ rel: "stylesheet",
    type: "text/css",
    href: car2.prefixCSS+"5cnlast1.css"
}).appendTo("head");
var render_pageLast1={
	init:function(opts){
		this.exec(opts);
	},
	exec:function(opts){
		//组装数据和结构
		var pages=document.querySelector('.translate-back').children,
			length=pages.length,
			div2=document.createElement('div'),//尾页2
			//尾页2
			html2=  '<p class="page-list">您可能还会喜欢的杂志</p>'+
				  	'<div class="ad_foot">'+
				    '<span id="lomark"></span>'+
				    '<div id="list_box">'+
				   	'<div class="ad2_box">'+
				    '<div class="magazine_list">'+
				    '<ul>',
			_html2=	'<li class="l first">'+
						'<a href="http://mp.weixin.qq.com/s?__biz=MjM5MjQyODk5OA==&amp;mid=202586818&amp;idx=1&amp;sn=3599d89ce6198ffffb293e0370880a7e#rd">'+
					        '<div class="left">'+
						        '<img src="http://img0.hx.com/magazine/img/ads_logo.png" />'+
						   	'</div>'+
						    '<div class="right">'+
						        '<h2><em>我为你传媒</em><br /><i>www.5.cn</i></h2>'+
						        '<p style="margin-top:1em;" class="adlogo"><img src="http://img0.hx.com/magazine/img/ads_wx.png" /></p>'+
					        '</div>'+
				        '</a>'+
			        '</li>';


		//尾页2
		div2.className='page-con j-txtWrap lazy-finish';
		div2.setAttribute('data-src','http://img.800.cn/END3.jpg');
		div2.setAttribute('data-position','50% 50%');
		div2.setAttribute('data-size','cover');
		div2.style='background-image: url(http://img.800.cn/END3.jpg); background-size: cover; height: 901px; background-position: 50% 50%;';

		for(i=0,l=opts.list.length;i<l;i++){
			_html2+='<li class="'+((i%2==0)?'r':'l')+'">'+//偶数为r，奇数为l
						'<a href="'+opts.list[i].url+'">'+
					        '<div class="left">'+
					           	'<img src="'+opts.list[i].picpath+'" />'+
					        '</div>'+
					        '<div class="right"> '+
						        '<h2>'+opts.list[i].name+'</h2>'+
						        '<p class="liulan">浏览:<i>'+opts.list[i].viewnum+'</i></p>'+
					        '</div>'+
			          	'</a>'+
			       	'</li>';
		}
		_html2+='</ul>'+
				'</div>'+
				'</div>'+
				'<div style="clear:both;"></div>'+
				'</div>'+(opts.adinfo?'<span class="foots">'+//存在广告就拼，不存在就不拼
												'<span class="tg">'+
													'<img src="http://img0.hx.com/magazine/img/last_ad_r1_c1.png" /></span>'+
												'<span class="foot_img">'+
												    '<div>'+
												     	'<a href="'+opts.adinfo[0].url+'"><img src="'+opts.adinfo[0].imgpath+'" /></a>'+
												    '</div>'+
											    '</span>'+
										'</span>':'');
		html2+=_html2;
		div2.innerHTML=html2;//组装结束

		//重载尾页二
		var target=pages[length-1].children.length==1?0:1;
		pages[length-1].replaceChild(div2,pages[length-1].children[target]);//重载成功
	}
};
