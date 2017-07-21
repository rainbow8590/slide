;(function($){
    $.fn.extend({
        slide:function(options){
            var defaults = {
                "parent" : this,
                "num":0
            }
            var option = $.extend({},defaults,options);

            var timer = null;
            var ul = $(option.parent).find('ul')
            var lis = $(option.parent).find('ul li')
            var wid = lis.width()
            var len = lis.length;

            //把第一张图片克隆一份添加到最后
            lis.eq(0).clone().appendTo(ul);
            lis =  $(option.parent).find('ul li')
            len = lis.length;

            timer = setInterval(autoplay,2000);

            //鼠标经过
            $(option.parent).mouseover(function(){
                $(option.leftArrow).show();
                $(option.rightArrow).show();
                clearInterval(timer)
            }).mouseout(function(){
                timer = setInterval(autoplay,2000);
                $(option.leftArrow).hide();
                $(option.rightArrow).hide();
            });

            //右箭头点击
            $(option.rightArrow).click(function(){
                autoplay(); 
            })
            //左箭头点击
            $(option.leftArrow).click(function(){
                prev(); 
            })

            //小圆点的点击事件
            $(option.parent).find('ol li').click(function(){
                $(this).addClass(option.dotCur).siblings().removeClass(option.dotCur);
                option.num = $(this).index()
                //让图片轮播
                play();
            })

            //向右运动
            function autoplay(){
                option.num++;
                play();
            }

            //向左点击
            function prev(){
                option.num--;
                play()

            }

            function play(){
                if(option.num > lis.length-1){
                    option.num = 1;
                    ul.css('left',0)
                }
                if(option.num < 0){
                    option.num  = len - 2;
                    ul.css('left',-(len-1)*wid)
                }
                if(option.num == lis.length -1){
                    $(option.parent).find('ol li').eq(0).addClass(option.dotCur).siblings().removeClass(option.dotCur)  
                }else{
                    $(option.parent).find('ol li').eq(option.num).addClass(option.dotCur).siblings().removeClass(option.dotCur)
                }

                ul.stop().animate({
                    left: -option.num * wid
                },500)
            }
        }
    })
})(jQuery);