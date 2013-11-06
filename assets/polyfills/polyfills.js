(function() {
	Modernizr.load({
  test: Modernizr.borderradius && Modernizr.boxshadow && Modernizr.cssgradients,
  nope: '/assets/polyfills/pie/pie.1.0.js',
  callback: function () {
    if (window.PIE) {
        $('.pie').each(function() {
            PIE.attach(this);
        });
    }
  }
});

}());