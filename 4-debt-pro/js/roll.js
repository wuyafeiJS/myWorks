// JavaScript Document

var scrollPic_xc = new ScrollPicleft();
    scrollPic_xc.scrollContId = "scollImg_xc"; // 内容容器ID""
    scrollPic_xc.arrLeftId = "LeftID_xc"; //左箭头ID
    scrollPic_xc.arrRightId = "RightID_xc"; //右箭头ID
    scrollPic_xc.frameWidth = 767; //显示框宽度
    scrollPic_xc.pageWidth = 192; //翻页宽度
    scrollPic_xc.speed = 10; //移动速度(单位毫秒，越小越快)
    scrollPic_xc.space = 10; //每次移动像素(单位px，越大越快)
    scrollPic_xc.autoPlay = true; //自动播放
    scrollPic_xc.autoPlayTime = 3; //自动播放间隔时间(秒)
    scrollPic_xc.initialize(); //初始化
	
	
	
	
	
	 $("#cg0").addClass("cur");
    $("#shk_NewsInfo0").show();
    function ShowCheckNewsInfo(index) {
        $(".news_t ul li").each(function (i) {
            if (index == i) {
                $(this).addClass("cur");
                $("#shk_NewsInfo" + i).show();
                $("#news_more").attr("href", $(".news_t ul").find("li.cur.htm").find("a").attr("href"));
            } else {
                $(this).removeClass("cur");
                $("#shk_NewsInfo" + i).hide();
            }
        });
    }
    $(".news_t").find("ul").find("li:last").addClass("nones");
	
	
	
	
	

		
		
		
		
		
		
		  $(".links_c").find("a:last").addClass("nones");
		  
		  
		  
		  
		  
		  if ($("div.right").height() > 900) {
                $("#righttuijian").hide().next("div.rightbot").hide();
            } else {
                $("#lefttuijian").hide();
            }
            //显示方式
            var showtype = "2";
            //当前栏目的ID
            var columnid = "29";
            switch (showtype) {
                case "3":
                    if (columnid == 0) {
                        $("#newslistbox dl").attr("class", "").addClass("dl_hon");
                    } else if (columnid == 0) {
                        $("#newslistbox dl").attr("class", "").addClass("dl_pho");
                    } else {
                        reDrawImage(0);
                    }
                    break;
                default:
                    if (columnid == 40) {
                        $("#newslistbox dl").attr("class", "").addClass("dl_pho");
                    } else {
                        reDrawImage(1);
                    }
                    break;
            }
            function reDrawImage(isdetails) {
                if (isdetails) {
                    $("#newslistbox dl img").each(function () {
                        $(this).get(0).onload = function () { DrawImage(this, 200, 120, 1); }
                    });
                } else {
                    $("#newslistbox dl img").each(function () {
                        $(this).get(0).onload = function () { DrawImage(this, 200, 144, 1); }
                    });
                }
            }