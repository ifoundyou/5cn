$(function() {
    //全局前缀
    car2.prefixJS='http://img0.hx.com/magazine0120/js/';
    car2.prefixCSS='http://img0.hx.com/magazine0120/css/';
    car2.prefixImg='http://img0.hx.com/magazine0120/img/';
    $("<link>").attr({ rel: "stylesheet",
        type: "text/css",
        href: car2.prefixCSS+"addnew20150120.css?v=5"
    }).appendTo("head");
    $("<link>").attr({ rel: "stylesheet",
        type: "text/css",
        href: car2.prefixCSS+"www5cn.css"
    }).appendTo("head");
    
    var msg_html = '<span id="lomark"></span>';
    var msgapp = '<span class="foots"><span class="tg"><img src="http://img0.hx.com/magazine/img/last_ad_r1_c1.png" /></span>';
    msgapp += '<span class="foot_img">';
    var msgappend = '</span></span></span>';

    var urlstr = $("#popularizeurl").val();
    if (!urlstr) {
        urlstr = location.href;
    }
    $.ajax({//拿js文件地址和推荐数据和浏览数据
        url:'http://www.5.cn/Somehandle/rmajax/getAdFrom',
        data:'url='+urlstr,
        dataType:'json',
        type:'POST',
        success:function(data){
            if(!data)return;
            car2.jsUrl=data['adlist'];
            $(".ad_foot").empty();
            $("#wx-link").remove(); 
            if(car2.if5>=car2._pageNum-5){//原路返回时如果跳到最后三页，那么重载最后两页的内容
                car2.fetchJs(2);//控制器   
                car2.fetchJs(5);//控制器   
                car2.loaded=true;
                car2['p'+(car2._pageNum-4)]='once';
            }
            //埋值
            var hidden=document.body.appendChild(document.createElement('div'));
            hidden.style.display='none';
            hidden.innerHTML=   '<input id="isRecommend" type="hidden" value="'+data['isRecommend']+'" />'+
                                '<input id="bfd_liulan" type="hidden" value="'+data['viewnum']+'" />'+
                                '<input id="taginfo" type="hidden" value="'+data['taginfo']+'" />';
        }
    });
    //baifenbai
    (function() {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        var html = '';
        html += "window['_BFD'] = window['_BFD'] || {};";
        html += "_BFD.client_id = 'C5cn';";
        html += "_BFD.script = document.createElement('script');";
        html += "_BFD.script.type = 'text/javascript';";
        html += "_BFD.script.async = true;";
        html += "_BFD.script.charset = 'utf-8';";
        html += "_BFD.script.src = (('https:' == ";
        html += "document.location.protocol?'https://ssl-static1':'http://static1')+'.bfdcdn.com/service/5cn/5cn.js');";
        html += "document.getElementsByTagName('head')[0].appendChild(_BFD.script);";
        s.innerHTML = html;
        document.body.appendChild(s);
    })();
    $(".page-list").prev("a").hide();
});
function gourl(id, urlstr) {
    $.post("http://www.5.cn/Rmajax/viewadadd", "id=" + id, function(msgstr) {
        //window.alert(msgstr);
        location = urlstr;
    });
}