car2.fetch({//传地址，拿尾页内容和广告
	url:'http://www.5.cn/Somehandle/rmajax/getAd',
	data:'jsname=bdlast2.js&id='+2+'&url='+location.href,
	dataType:'json',
	success:function(msg){
		render_pageLast2.init(msg);
 	}
});

var render_pageLast2={
	init:function(opts){
		this.exec(opts);
	},
	exec:function(opts){
		//组装数据和结构
		var pages=document.querySelector('.translate-back').children,
			length=pages.length,
			div=document.createElement('div'),//尾页1
			//尾页1
			html=	'<div class="user_box">'+
				        '<div class="user_pic">'+
				            '<a href="'+opts.userinfo.url+'"><img src="'+opts.userinfo.image+'" /></a>'+
				        '</div>'+
				        '<div class="user_name">'+
				            '<span><em>'+opts.userinfo.name+'</em>作品集</span>'+
				        '</div>'+
			    	'</div>'+((opts.userlist.isbe==1)?'<p class="no_info">该作者没有杂志，小编为您推荐以下精彩杂志</p>':'')+
			    	'<ul class="list_mag" id="list">',
			_html='';
		//尾页1
		div.className='ads_last';

		for(var i=0,l=opts.userlist.list.length;i<l;i++){
			_html+='<li '+((i+1)%3?'':'class=last_one')+'>'+
						'<a href="'+opts.userlist.list[i].url+'">'+
				      	'<div class="img_box">'+
				       		'<img src="'+opts.userlist.list[i].picpath+'" />'+
				      	'</div><p class="tit">'+opts.userlist.list[i].name+'</p><p class="read">浏览:<i>'+opts.userlist.list[i].viewnum+'</i></p></a>'+
			      	'</li>';
		}
		_html+='</ul>';
		html+=_html;

		opts.adinfo&&(html+='<span class="tg">'+//有第一条广告就拼，没有第一条广告就不
									'<img src="http://img0.hx.com/magazine/img/last_ad_r1_c1.png" />'+
							'</span>'+ 
							'<div class="user_ads">'+
							   '<a href="'+(opts.adinfo[1]?opts.adinfo[1].url:opts.adinfo[0].url)+'">'+//有第二条广告就拼，没有第二条就拼第一条
							   		'<img src="'+(opts.adinfo[1]?opts.adinfo[1].imgpath:opts.adinfo[0].imgpath)+'" />'+
							   '</a>'+
							   '<p>更多精彩杂志请看下一页</p>'+
							'</div>');
		!opts.adinfo&&(html+='<span class="tg">'+//有第一条广告就拼，没有第一条广告就不
									'<img src="http://img0.hx.com/magazine/img/last_ad_r1_c1.png" />'+
							'</span>'+ 
							'<div class="user_ads">'+
							   '<p>更多精彩杂志请看下一页</p>'+
							'</div>');
		
		div.innerHTML=html;


		//重载尾页一
		pages[length-2].replaceChild(div,pages[length-2].children[0]);//重载成功

		//百度嵌入广告20:3(无关闭按钮)
		var bd_ad1 = document.createElement('script');
			bd_ad1.type = 'text/javascript';
			bd_ad1.innerHTML = '(window.cpro_mobile_slot=window.cpro_mobile_slot||[]).push({id:"u1897388"});';
		var bd_ad2 = document.createElement('script');
			bd_ad2.type = 'text/javascript';
			bd_ad2.src = 'http://cpro.baidustatic.com/cpro/ui/cm.js';
		$('.user_ads').prepend('<div id="cpro_u1897388"></div>');
		$('body').append(bd_ad1);
		$('body').append(bd_ad2);
		$('#cpro_u1897388').next('a').hide();
	}
};
