
$(function(){
    $("#shoppingcar").fullpage({
        navigation: true, 
        sectionsColor: ["#f9dd67", "#84a2d4", "#ef674d", "#ffeedd", "#cf4759", "#85d9ed", "#8ac060", "#84d9ed"],

        afterLoad: function(a, index) {
            //干掉所有的js动画
            $(".section img, .section div").attr("style", "");
            //如果动画没有执行完，就让它强制结束
            $(".section img, .section div").stop();

            //给第二屏添加动画
            if (index == 2) {
                // jquery动画的参数解释： 第一个参数： 动画执行完之后的终点位置， 第二参数： 动画执行时间， 第三个参数： 动画执行效果， 第四个： 回调函数
                $(".search01").animate({marginLeft: -111}, 1000, "easeOutBack", function(){
                    console.log($(this));
                    //右侧的搜索框隐藏 
                    $(this).hide();
                    //中间的搜索框显示后，延迟0.5s，缩小并移动到右上角
                    $(".search02").show().delay(500).animate({marginLeft: 130, bottom: 450, height: 30}, 1000);
                    //沙发从右下角放大显示
                    $(".sofas").delay(500).animate({height: 218}, 1000);
                });
            }
        }
    });
})

/* 
总结： 
1. jquery动画的参数解释： 第一个参数： 动画执行完之后的终点位置， 第二参数： 动画执行时间， 第三个参数： 动画执行效果， 第四个： 回调函数

2. jquery动画执行的原理： 给需要添加动画的 dom 元素设置了 style的属性

3. 离开某一屏进入下屏的时候， 一定会调用 afterLoad 方法，在这个方法里面， 先把所有的js动画添加的style属性清空掉， 动画就还原了， 再去执行该屏应该有的动画
*/

/*
第二屏的动画的梳理： 
0. 一开始时， 中间有一个带文字的搜索框是隐藏的；沙发是缩小在右下角
1. 左边的搜索框先移动到屏幕的中央
2. 左边的搜索框隐藏， 中间的搜索框显示， 延迟0.5移后，缩小并移动到右上角
3. 与此同时， 沙发从右下角慢慢变大
*/
