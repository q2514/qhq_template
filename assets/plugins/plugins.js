// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
try{if(window.console&&window.console.log){
console.log("\n懒得爬楼，于是人们发明了电梯；\n懒得走路，于是人们制造出汽车；\n懒得计算，于是人们发明了计算机\n……\n做个聪明的“懒人”\n避免无聊的、机械的、重复的劳动，以最快速有效的方式完成工作。\n\n本站兼容IE6+ 、Chrome、Safari、Firefox、Opera等主流浏览器，并兼顾智能手机上的表现。\n本站的原则是：牛B的浏览器，表现牛B的效果，并对古董级的浏览器优雅降级。");
console.log("\n设计：%c飘枫剑客","color:green");
console.log("\n邮箱：%cq2514#qq.com（请把#换成@）","color:green");
}}catch(e){};