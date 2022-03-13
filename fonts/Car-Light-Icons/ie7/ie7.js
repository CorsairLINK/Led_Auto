/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Car-Light-Icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'car_bars': '&#xe900;',
		'car_gear': '&#xe901;',
		'car_lock-open': '&#xe902;',
		'car_lock': '&#xe903;',
		'car_shoe-prints': '&#xe904;',
		'car_sliders': '&#xe905;',
		'car_user': '&#xe906;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/car_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
