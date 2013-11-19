/*yepnope的ie!prefix的插件用来判断IE版本(ie, ie5, ie6, ie7, ie8, ie9, iegt5, iegt6, iegt7, iegt8, ielt7, ielt8, ielt9,, ielt10)*/

//CSS3 pie 可以让IE 6 7 8 9支持部分圆角，阴影，渐变背景功能,修复IE6 PNG24背景透明度。
yepnope({
  test: Modernizr.borderradius && Modernizr.boxshadow && Modernizr.cssgradients,
  nope: 'ielt10!assets/polyfills/pie/pie.1.0.js',
  complete: function() {
    console.log("PIE loaded!");
    if (window.PIE) {
      $('.fix_ie_css3').each(function() {
        PIE.attach(this);
      });
    }
  }
});

//修复IE6 PNG24 img背景透明问题。
yepnope({
  load: 'ie6!assets/polyfills/DD_belatedPNG/DD_belatedPNG_0.0.8a-min.js',
  complete: function() {
    DD_belatedPNG.fix('*,img,background');
  }

});

//修复IE9以下版本不支持Canvas 的问题。
/*yepnope({
	test: Modernizr.canvas,
	nope: 'ielt10!assets/polyfills/explorerCanvas/excanvas.compiled.js',
	}); 
*/
