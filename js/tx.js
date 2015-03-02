fetch_gdt();
function fetch_gdt(){//拿广点通广告
	var s = document.createElement('script');
    s.type = 'text/javascript';
    s.id = "gdt-3040907075825692";
    var html = 'var TencentGDT=TencentGDT||[];TencentGDT.push({posid:"1070707009501268",appid:"1103442220",type:"interstitial",showmask:true,onClose:function(){console.log("close")},onFail:function(){console.log("fail")},onInterstitialLoaded:function(){GDT.showWindow()}});(function(){var doc=document,h=doc.getElementsByTagName("head")[0],s=doc.createElement("script");s.async=true;s.src="http://qzs.qq.com/qzone/biz/res/i.js";h&&h.insertBefore(s,h.firstChild)})();';
    s.innerHTML = html;
    document.body.appendChild(s);
}
car2.fetch({//上传广点通访问量
	url:'http://www.5.cn/Somehandle/rmajax/getAd',
	data:'jsname='+car2.jsUrl[4]+'&id='+4+'&url='+location.href
});

