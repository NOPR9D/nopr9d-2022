(function (e) {
	function t(t) {
		for (
			var n, r, o = t[0], h = t[1], c = t[2], l = 0, d = [];
			l < o.length;
			l++
		)
			(r = o[l]),
				Object.prototype.hasOwnProperty.call(a, r) && a[r] && d.push(a[r][0]),
				(a[r] = 0);
		for (n in h) Object.prototype.hasOwnProperty.call(h, n) && (e[n] = h[n]);
		u && u(t);
		while (d.length) d.shift()();
		return s.push.apply(s, c || []), i();
	}
	function i() {
		for (var e, t = 0; t < s.length; t++) {
			for (var i = s[t], n = !0, o = 1; o < i.length; o++) {
				var h = i[o];
				0 !== a[h] && (n = !1);
			}
			n && (s.splice(t--, 1), (e = r((r.s = i[0]))));
		}
		return e;
	}
	var n = {},
		a = { app: 0 },
		s = [];
	function r(t) {
		if (n[t]) return n[t].exports;
		var i = (n[t] = { i: t, l: !1, exports: {} });
		return e[t].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
	}
	(r.m = e),
		(r.c = n),
		(r.d = function (e, t, i) {
			r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
		}),
		(r.r = function (e) {
			'undefined' !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(r.t = function (e, t) {
			if ((1 & t && (e = r(e)), 8 & t)) return e;
			if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
			var i = Object.create(null);
			if (
				(r.r(i),
				Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
				2 & t && 'string' != typeof e)
			)
				for (var n in e)
					r.d(
						i,
						n,
						function (t) {
							return e[t];
						}.bind(null, n)
					);
			return i;
		}),
		(r.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e['default'];
					  }
					: function () {
							return e;
					  };
			return r.d(t, 'a', t), t;
		}),
		(r.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(r.p = '/');
	var o = (window['webpackJsonp'] = window['webpackJsonp'] || []),
		h = o.push.bind(o);
	(o.push = t), (o = o.slice());
	for (var c = 0; c < o.length; c++) t(o[c]);
	var u = h;
	s.push([0, 'chunk-vendors']), i();
})({
	0: function (e, t, i) {
		e.exports = i('cd49');
	},
	'426a': function (e, t, i) {
		'use strict';
		i('cb86');
	},
	'89be': function (e, t, i) {
		'use strict';
		i('8ba0');
	},
	'8ba0': function (e, t, i) {},
	cb86: function (e, t, i) {},
	cd49: function (e, t, i) {
		'use strict';
		i.r(t);
		i('e260'), i('e6cf'), i('cca6'), i('a79d');
		var n = i('7a23'),
			a = { class: 'container-fluid' };
		function s(e, t, i, s, r, o) {
			var h = Object(n['v'])('router-view');
			return Object(n['q'])(), Object(n['e'])('div', a, [Object(n['g'])(h)]);
		}
		var r = i('d4ec'),
			o = i('bee2'),
			h = i('262e'),
			c = i('2caf'),
			u = i('ce1f'),
			l = (i('ade3'), i('5530'), i('99af'), i('f526')),
			d = function (e) {
				return '<path  d="'.concat(e, '"></path>');
			},
			m = (function (e) {
				Object(h['a'])(i, e);
				var t = Object(c['a'])(i);
				function i() {
					return Object(r['a'])(this, i), t.apply(this, arguments);
				}
				return (
					Object(o['a'])(i, [
						{
							key: 'getShape',
							value: function () {
								return d(
									'M 39.8 47.7 L 64.05 3.65 A 5.675 5.675 0 0 1 64.399 3.103 Q 64.796 2.558 65.21 2.335 A 1.384 1.384 0 0 1 65.4 2.25 A 3.406 3.406 0 0 1 65.896 2.118 Q 66.42 2.017 67.154 2.002 A 12.635 12.635 0 0 1 67.4 2 L 74.55 2 L 74.55 73.65 L 66.05 73.65 L 66.05 21 A 50.268 50.268 0 0 1 66.07 19.629 A 61.411 61.411 0 0 1 66.1 18.75 Q 66.15 17.55 66.25 16.3 L 41.7 61.1 A 5.243 5.243 0 0 1 40.833 62.274 A 3.586 3.586 0 0 1 38.2 63.35 L 36.8 63.35 A 3.624 3.624 0 0 1 33.895 61.977 A 5.617 5.617 0 0 1 33.3 61.1 L 8.2 16.15 Q 8.35 17.45 8.425 18.7 A 44.013 44.013 0 0 1 8.481 19.9 A 33.802 33.802 0 0 1 8.5 21 L 8.5 73.65 L 0 73.65 L 0 2 L 7.15 2 A 10.931 10.931 0 0 1 7.869 2.022 Q 8.658 2.074 9.15 2.25 A 1.624 1.624 0 0 1 9.641 2.541 Q 10.021 2.859 10.385 3.454 A 6.647 6.647 0 0 1 10.5 3.65 L 35.25 47.75 Q 35.95 48.95 36.475 50.275 Q 37 51.6 37.5 52.95 A 45.351 45.351 0 0 1 38.413 50.596 A 40.935 40.935 0 0 1 38.55 50.275 Q 39.1 49 39.8 47.7 Z'
								);
							},
						},
					]),
					i
				);
			})(l['CustomShape']),
			p = (function (e) {
				Object(h['a'])(i, e);
				var t = Object(c['a'])(i);
				function i() {
					return Object(r['a'])(this, i), t.apply(this, arguments);
				}
				return (
					Object(o['a'])(i, [
						{
							key: 'getShape',
							value: function () {
								return d(
									'M 133.7 23 L 105.45 88.6 A 5.507 5.507 0 0 1 104.981 89.446 A 4.073 4.073 0 0 1 104.325 90.2 Q 103.827 90.643 102.934 90.759 A 5.319 5.319 0 0 1 102.25 90.8 L 95.65 90.8 L 104.9 70.7 L 84 23 L 91.7 23 A 3.704 3.704 0 0 1 92.424 23.066 Q 92.848 23.151 93.179 23.344 A 2.006 2.006 0 0 1 93.5 23.575 A 3.982 3.982 0 0 1 94.092 24.221 A 3.265 3.265 0 0 1 94.45 24.85 L 108 56.75 Q 108.45 57.85 108.775 58.95 Q 109.1 60.05 109.35 61.2 Q 109.7 60.05 110.05 58.95 A 36.341 36.341 0 0 1 110.739 56.987 A 40.211 40.211 0 0 1 110.85 56.7 L 124 24.85 Q 124.3 24.05 125.025 23.525 A 2.722 2.722 0 0 1 126.005 23.068 A 2.598 2.598 0 0 1 126.6 23 L 133.7 23 Z'
								);
							},
						},
					]),
					i
				);
			})(l['CustomShape']),
			v = (function (e) {
				Object(h['a'])(i, e);
				var t = Object(c['a'])(i);
				function i() {
					return Object(r['a'])(this, i), t.apply(this, arguments);
				}
				return (
					Object(o['a'])(i, [
						{
							key: 'getShape',
							value: function () {
								return d(
									'M 152.9 2 L 152.9 65.5 L 183.9 65.5 L 183.9 73.65 L 143.2 73.65 L 143.2 2 L 152.9 2 Z'
								);
							},
						},
					]),
					i
				);
			})(l['CustomShape']),
			f = (function (e) {
				Object(h['a'])(i, e);
				var t = Object(c['a'])(i);
				function i() {
					return Object(r['a'])(this, i), t.apply(this, arguments);
				}
				return (
					Object(o['a'])(i, [
						{
							key: 'getShape',
							value: function () {
								return d(
									'M 230.4 41.25 L 230.4 73.65 L 226.45 73.65 Q 225.523 73.65 224.851 73.447 A 3.165 3.165 0 0 1 224.35 73.25 Q 223.55 72.85 223.3 71.55 L 222.3 66.85 A 60.946 60.946 0 0 1 219.839 68.954 A 50.506 50.506 0 0 1 218.4 70.075 Q 216.5 71.5 214.4 72.475 Q 212.3 73.45 209.925 73.95 A 22.817 22.817 0 0 1 207.097 74.353 A 29.853 29.853 0 0 1 204.65 74.45 A 18.691 18.691 0 0 1 200.603 74.024 A 16.577 16.577 0 0 1 199.125 73.625 A 12.942 12.942 0 0 1 195.644 71.925 A 11.89 11.89 0 0 1 194.65 71.15 Q 192.75 69.5 191.625 66.975 A 12.493 12.493 0 0 1 190.747 64.031 Q 190.5 62.617 190.5 61 A 11 11 0 0 1 191.855 55.747 A 13.226 13.226 0 0 1 192.15 55.225 Q 193.617 52.758 196.684 50.785 A 21.949 21.949 0 0 1 197.475 50.3 A 24.912 24.912 0 0 1 200.765 48.71 Q 202.487 48.017 204.531 47.435 A 52.477 52.477 0 0 1 207.1 46.775 Q 211.655 45.722 217.764 45.358 A 107.359 107.359 0 0 1 221.65 45.2 L 221.65 41.25 Q 221.65 37.433 220.593 34.82 A 9.297 9.297 0 0 0 219.125 32.325 A 8.103 8.103 0 0 0 214.702 29.641 Q 213.313 29.3 211.65 29.3 A 21.405 21.405 0 0 0 209.357 29.416 Q 208.181 29.543 207.178 29.809 A 10.953 10.953 0 0 0 206.175 30.125 Q 203.95 30.95 202.325 31.975 A 89.898 89.898 0 0 0 201.17 32.716 Q 200.601 33.087 200.101 33.427 A 48.773 48.773 0 0 0 199.525 33.825 A 5.141 5.141 0 0 1 198.611 34.344 Q 197.901 34.65 197.2 34.65 Q 196.3 34.65 195.625 34.175 Q 194.95 33.7 194.55 33 L 192.95 30.15 A 30.807 30.807 0 0 1 198.454 25.888 A 26.451 26.451 0 0 1 202 24.1 A 26.557 26.557 0 0 1 209.514 22.258 A 32.393 32.393 0 0 1 212.75 22.1 A 21.995 21.995 0 0 1 216.762 22.45 A 16.935 16.935 0 0 1 220.3 23.5 A 15.801 15.801 0 0 1 224.815 26.359 A 14.817 14.817 0 0 1 225.85 27.4 A 15.926 15.926 0 0 1 228.689 31.934 A 19.217 19.217 0 0 1 229.25 33.45 A 23.623 23.623 0 0 1 230.276 38.536 A 29.036 29.036 0 0 1 230.4 41.25 Z M 221.65 61.4 L 221.65 50.85 Q 215.5 51.05 211.2 51.825 A 42.076 42.076 0 0 0 208.316 52.443 Q 206.974 52.784 205.839 53.187 A 19.122 19.122 0 0 0 204.2 53.85 Q 202.234 54.76 201.05 55.909 A 6.71 6.71 0 0 0 200.275 56.8 Q 199.05 58.5 199.05 60.6 A 10.329 10.329 0 0 0 199.172 62.231 Q 199.332 63.229 199.7 64.05 A 6.995 6.995 0 0 0 200.631 65.587 A 6.058 6.058 0 0 0 201.45 66.425 A 6.777 6.777 0 0 0 203.636 67.646 A 7.974 7.974 0 0 0 204.05 67.775 A 11.252 11.252 0 0 0 206.231 68.158 A 13.502 13.502 0 0 0 207.3 68.2 A 20.226 20.226 0 0 0 209.784 68.054 A 15.952 15.952 0 0 0 211.6 67.725 Q 213.55 67.25 215.275 66.375 Q 217 65.5 218.575 64.25 A 27.67 27.67 0 0 0 220.895 62.178 A 31.598 31.598 0 0 0 221.65 61.4 Z'
								);
							},
						},
					]),
					i
				);
			})(l['CustomShape']),
			g = (function (e) {
				Object(h['a'])(i, e);
				var t = Object(c['a'])(i);
				function i() {
					return Object(r['a'])(this, i), t.apply(this, arguments);
				}
				return (
					Object(o['a'])(i, [
						{
							key: 'getShape',
							value: function () {
								return d(
									'M 249.95 73.65 L 244.2 73.65 L 244.2 0 L 253.15 0 L 253.15 30.3 Q 256.3 26.65 260.375 24.425 A 18.204 18.204 0 0 1 267.071 22.348 A 22.815 22.815 0 0 1 269.7 22.2 A 20.276 20.276 0 0 1 274.381 22.722 A 17.048 17.048 0 0 1 277.65 23.85 A 16.057 16.057 0 0 1 283.69 28.762 A 18.329 18.329 0 0 1 283.7 28.775 A 20.899 20.899 0 0 1 286.149 32.95 A 28.308 28.308 0 0 1 287.55 36.875 Q 288.9 41.7 288.9 48 A 36.906 36.906 0 0 1 288.254 55.016 A 31.82 31.82 0 0 1 287.4 58.425 A 26.924 26.924 0 0 1 285.08 63.823 A 22.882 22.882 0 0 1 283.075 66.775 Q 280.25 70.3 276.175 72.325 A 19.44 19.44 0 0 1 269.486 74.223 A 23.907 23.907 0 0 1 267 74.35 Q 262.418 74.35 259.126 72.689 A 13.035 13.035 0 0 1 258.675 72.45 A 18.575 18.575 0 0 1 253.434 68.077 A 21.857 21.857 0 0 1 252.7 67.15 L 252.25 71.75 Q 251.898 73.42 250.388 73.622 A 3.302 3.302 0 0 1 249.95 73.65 Z M 253.15 36.95 L 253.15 61.45 A 17.626 17.626 0 0 0 255.187 63.809 Q 256.738 65.298 258.475 66.1 A 14.731 14.731 0 0 0 263.242 67.366 A 17.952 17.952 0 0 0 265 67.45 A 15.888 15.888 0 0 0 269.677 66.798 A 12.044 12.044 0 0 0 275.9 62.4 A 16.863 16.863 0 0 0 278.464 57.266 Q 279.7 53.332 279.7 48 A 46.977 46.977 0 0 0 279.556 44.209 Q 279.41 42.421 279.12 40.866 A 24.635 24.635 0 0 0 278.825 39.5 Q 277.95 35.95 276.3 33.675 A 10.229 10.229 0 0 0 273.811 31.217 A 9.424 9.424 0 0 0 272.25 30.35 Q 269.85 29.3 266.8 29.3 A 16.001 16.001 0 0 0 262.659 29.816 A 13.159 13.159 0 0 0 259.175 31.3 Q 255.9 33.3 253.15 36.95 Z'
								);
							},
						},
					]),
					i
				);
			})(l['CustomShape']),
			y = (function (e) {
				Object(h['a'])(i, e);
				var t = Object(c['a'])(i);
				function i() {
					return Object(r['a'])(this, i), t.apply(this, arguments);
				}
				return (
					Object(o['a'])(i, [
						{
							key: 'getShape',
							value: function () {
								return d(
									'M 335.15 23 L 335.15 26.8 Q 335.15 27.75 334.8 28.625 A 6.379 6.379 0 0 1 333.968 30.112 A 5.982 5.982 0 0 1 333.9 30.2 L 306.5 66.7 L 334.15 66.7 L 334.15 73.65 L 296 73.65 L 296 69.95 Q 296 69.445 296.196 68.805 A 6.845 6.845 0 0 1 296.325 68.425 Q 296.65 67.55 297.25 66.75 L 324.8 30 L 297.55 30 L 297.55 23 L 335.15 23 Z'
								);
							},
						},
					]),
					i
				);
			})(l['CustomShape']),
			w = (function (e) {
				Object(h['a'])(i, e);
				var t = Object(c['a'])(i);
				function i() {
					return Object(r['a'])(this, i), t.apply(this, arguments);
				}
				return (
					Object(o['a'])(i, [
						{
							key: 'getShape',
							value: function () {
								return d(
									' M 30.96 25.16 V 4.56 h 0.56 c 0.41 0 0.75 -0.34 0.75 -0.75 V 0.75 c 0 -0.41 -0.34 -0.75 -0.75 -0.75 H 14.85 c -0.41 0 -0.75 0.34 -0.75 0.75 v 3.06 c 0 0.41 0.34 0.75 0.75 0.75 h 0.55 v 20.362 C 7.95 28.28 2.98 35.71 2.98 43.79 C 2.98 54.94 12.04 64 23.19 64 c 11.14 0 20.21 -9.06 20.306 -19.654 C 43.4 35.72 38.42 28.28 30.96 25.16 z M 23.251 61.308 c -7.25 -0.274 -10.054 -3.351 -10.533 -3.625 c -0.41 -0.547 -5.859 -2.974 -6.817 -14.328 c 0.525 -6.875 3.808 -13.44 12.083 -16.381 V 4.56 h 10.98 v 2.41 h 0.032 v 2.52 h 0.032 v 2.52 h -0.032 v 2.52 h 0.032 v 2.52 h -0.032 v 1.6 c 0 0.48 -0.069 2.51 -0.137 8.46 c 3.899 1.573 11.195 6.087 11.662 17.258 C 40.35 54.195 31.8 60.692 23.251 61.308 z'
								);
							},
						},
					]),
					i
				);
			})(l['CustomShape']),
			b = (function (e) {
				Object(h['a'])(i, e);
				var t = Object(c['a'])(i);
				function i() {
					return Object(r['a'])(this, i), t.apply(this, arguments);
				}
				return (
					Object(o['a'])(i, [
						{
							key: 'getShape',
							value: function () {
								return d(
									'M 5.947 44.072 a 10.8 10.8 0 1 1 34.5 -1 a 10.8 10.8 0 1 1 -34.4 1.7'
								);
							},
						},
					]),
					i
				);
			})(l['CustomShape']);
		function x() {
			Object(l['addShape'])('M', m),
				Object(l['addShape'])('y', p),
				Object(l['addShape'])('L', v),
				Object(l['addShape'])('a', f),
				Object(l['addShape'])('b', g),
				Object(l['addShape'])('z', y),
				Object(l['addShape'])('largeBeaker', w),
				Object(l['addShape'])('largeBeakerContent', b);
		}
		var A = (function (e) {
				Object(h['a'])(i, e);
				var t = Object(c['a'])(i);
				function i() {
					return Object(r['a'])(this, i), t.apply(this, arguments);
				}
				return (
					Object(o['a'])(i, [
						{
							key: 'mounted',
							value: function () {
								x();
							},
						},
					]),
					i
				);
			})(u['b']),
			j = (i('89be'), i('6b0d')),
			O = i.n(j);
		const k = O()(A, [['render', s]]);
		var L = k,
			S = i('5502'),
			P = Object(S['a'])({
				state: {},
				mutations: {},
				actions: {},
				modules: {},
			}),
			M = i('6c02');
		function z(e, t, i, a, s, r) {
			var o = Object(n['v'])('Header'),
				h = Object(n['v'])('Intro'),
				c = Object(n['v'])('Content');
			return (
				Object(n['q'])(),
				Object(n['e'])(
					n['a'],
					null,
					[
						Object(n['g'])(o, { class: 'position-absolute' }),
						Object(n['g'])(h),
						Object(n['g'])(c),
					],
					64
				)
			);
		}
		var T = i('9ab4');
		function C(e, t, i, a, s, r) {
			return Object(n['q'])(), Object(n['e'])('div', null, 'content');
		}
		var R = (function (e) {
			Object(h['a'])(i, e);
			var t = Object(c['a'])(i);
			function i() {
				return Object(r['a'])(this, i), t.apply(this, arguments);
			}
			return (
				Object(o['a'])(i, [
					{
						key: 'mounted',
						value: function () {
							console.log('hi');
						},
					},
				]),
				i
			);
		})(u['b']);
		R = Object(T['a'])([Object(u['a'])({ props: {} })], R);
		var Q = R;
		const D = O()(Q, [['render', C]]);
		var I = D;
		function H(e, t, i, a, s, r) {
			return (
				Object(n['q'])(),
				Object(n['e'])('div', null, 'En phase de test, revenez plus tard ;)')
			);
		}
		var E = (function (e) {
			Object(h['a'])(i, e);
			var t = Object(c['a'])(i);
			function i() {
				return Object(r['a'])(this, i), t.apply(this, arguments);
			}
			return i;
		})(u['b']);
		E = Object(T['a'])(
			[
				Object(u['a'])({
					props: {},
					mounted: function () {
						console.log('hi');
					},
				}),
			],
			E
		);
		var B = E;
		const W = O()(B, [['render', H]]);
		var F = W,
			U = { class: 'container' },
			V = Object(n['f'])(
				'div',
				{ class: 'row' },
				[
					Object(n['f'])('div', { class: 'col' }, [
						Object(n['f'])('div', { class: 'intro_wrap' }, [
							Object(n['f'])('div', {
								class: 'intro_reveal',
								id: 'intro_reveal',
							}),
						]),
					]),
				],
				-1
			),
			Z = { class: 'row' };
		function _(e, t, i, a, s, r) {
			var o = Object(n['v'])('Canvas');
			return (
				Object(n['q'])(),
				Object(n['e'])('div', U, [
					V,
					Object(n['f'])('div', Z, [
						Object(n['g'])(o, { title: 'webgl-canvas' }),
					]),
				])
			);
		}
		var X = ['id'];
		function Y(e, t, i, a, s, r) {
			return (
				Object(n['q'])(),
				Object(n['e'])(
					'canvas',
					{
						class: Object(n['m'])(e.title),
						id: e.title,
						width: '240',
						height: '240',
					},
					null,
					10,
					X
				)
			);
		}
		var q = i('5a89'),
			G =
				(i('b85c'),
				i('d3b7'),
				i('6062'),
				i('3ca3'),
				i('ddb0'),
				i('159b'),
				i('07ac'),
				i('b65f'),
				i('1da1')),
			N =
				(i('96cf'),
				(function () {
					function e(t, i) {
						Object(r['a'])(this, e), (this.scene = t), (this.camera = i);
					}
					return (
						Object(o['a'])(e, [
							{
								key: 'init',
								value: (function () {
									var e = Object(G['a'])(
										regeneratorRuntime.mark(function e() {
											return regeneratorRuntime.wrap(function (e) {
												while (1)
													switch ((e.prev = e.next)) {
														case 0:
															console.log('hi');
														case 1:
														case 'end':
															return e.stop();
													}
											}, e);
										})
									);
									function t() {
										return e.apply(this, arguments);
									}
									return t;
								})(),
							},
							{
								key: 'resize',
								value: function (e, t) {
									console.log(e);
								},
							},
							{ key: 'update', value: function (e) {} },
						]),
						e
					);
				})()),
			J =
				(i('4c53'),
				i('a434'),
				Math.PI,
				Math.PI,
				Math.PI,
				Math.PI,
				Math.PI,
				Math.PI,
				function (e, t, i, n, a) {
					var s = Math.max(Math.min(e, i), t),
						r = i - t,
						o = (s - t) / r,
						h = a - n,
						c = n + o * h;
					return c;
				}),
			K = function (e, t, i, n) {
				return i * Math.sin((e / n) * (Math.PI / 2)) + t;
			},
			$ = i('34ad'),
			ee = i('0ca5'),
			te = (function () {
				function e() {
					Object(r['a'])(this, e),
						(this.loadingManager = new q['R']()),
						(this.loader = new $['a'](this.loadingManager));
					var t = new ee['a']();
					t.setDecoderPath('/js/libs/draco/'), this.loader.setDRACOLoader(t);
				}
				return (
					Object(o['a'])(e, [
						{
							key: 'createAsync',
							value: function () {
								var e = this;
								return new Promise(function (t, i) {
									e.loader.load(
										'/three/Ship.glb',
										function (i) {
											i.scene.scale.set(1.5, 1.5, 1.5),
												i.scene.position.set(0, 100, 0),
												i.scene.traverse(function (e) {
													e.isObject3D &&
														((e.receiveShadow = !0), (e.castShadow = !0));
												}),
												(e.mesh = i),
												t(!0);
										},
										function (e) {
											console.log((e.loaded / e.total) * 100 + '% loaded');
										},
										function (e) {
											console.log(e), console.log('An error happened'), i(!1);
										}
									);
								});
							},
						},
					]),
					e
				);
			})(),
			ie = function e() {
				Object(r['a'])(this, e),
					(this.ennemiesInUse = []),
					(this.mesh = new q['hb']());
			},
			ne = (function () {
				function e(t) {
					Object(r['a'])(this, e),
						(this.color = t),
						(this.geom = new q['Bb']()),
						(this.material = new q['Z']({
							color: this.color,
							shininess: 0,
							specular: 16777215,
							flatShading: !0,
						})),
						(this.mesh = new q['W'](this.geom, this.material)),
						(this.mesh.castShadow = !0),
						(this.angle = 0),
						(this.dist = 0);
				}
				return (
					Object(o['a'])(e, [
						{
							key: 'update',
							value: function (e) {
								console.log('update');
							},
						},
					]),
					e
				);
			})(),
			ae = (function () {
				function e() {
					Object(r['a'])(this, e),
						(this.hemisphereLight = new q['z'](11184810, 0, 0.9)),
						(this.shadowLight = new q['r'](16777215, 0.9)),
						(this.ambiantLight = new q['a'](14452852, 0.5)),
						this.shadowLight.position.set(150, 350, 350),
						(this.shadowLight.castShadow = !0),
						(this.shadowLight.shadow.camera.left = -400),
						(this.shadowLight.shadow.camera.right = 400),
						(this.shadowLight.shadow.camera.top = 400),
						(this.shadowLight.shadow.camera.bottom = -400),
						(this.shadowLight.shadow.camera.near = 1),
						(this.shadowLight.shadow.camera.far = 1e3),
						(this.shadowLight.shadow.mapSize.width = 2048),
						(this.shadowLight.shadow.mapSize.height = 2048);
				}
				return (
					Object(o['a'])(e, [{ key: 'update', value: function (e) {} }]), e
				);
			})(),
			se =
				(i('b0c0'),
				(function () {
					function e(t) {
						Object(r['a'])(this, e),
							(this.nBlocs = 3 + Math.floor(3 * Math.random())),
							(this.mesh = new q['W']()),
							(this.mesh.name = 'cloud'),
							(this.geom = new q['j'](20, 20, 20)),
							(this.material = new q['Z']({ color: t.white, flatShading: !0 }));
						for (var i = 0; i < this.nBlocs; i++) {
							var n = new q['W'](this.geom, this.material);
							(n.position.x = 15 * i),
								(n.position.y = 10 * Math.random()),
								(n.position.z = 10 * Math.random()),
								(n.rotation.z = Math.random() * Math.PI * 2),
								(n.rotation.y = Math.random() * Math.PI * 2);
							var a = 0.1 + 0.9 * Math.random();
							n.scale.set(a, a, a),
								(n.castShadow = !0),
								(n.receiveShadow = !0),
								this.mesh.add(n);
						}
					}
					return (
						Object(o['a'])(e, [
							{
								key: 'rotate',
								value: function () {
									var e = this;
									this.mesh.children.forEach(function (t, i) {
										(e.mesh.children[i].rotation.z +=
											0.005 * Math.random() * (i + 1)),
											(e.mesh.children[i].rotation.y +=
												0.002 * Math.random() * (i + 1));
									});
								},
							},
						]),
						e
					);
				})()),
			re = (function () {
				function e(t) {
					Object(r['a'])(this, e),
						(this.nClouds = 20),
						(this.stepAngle = (2 * Math.PI) / this.nClouds),
						(this.clouds = []),
						(this.mesh = new q['hb']());
					for (var i = 0; i < this.nClouds; i++) {
						var n = new se(t),
							a = this.stepAngle * i,
							s = 750 + 200 * Math.random();
						(n.mesh.position.y = Math.sin(a) * s),
							(n.mesh.position.x = Math.cos(a) * s),
							(n.mesh.rotation.z = a + Math.PI / 2),
							(n.mesh.position.z = -400 - 400 * Math.random());
						var o = 1 + 2 * Math.random();
						n.mesh.scale.set(o, o, o),
							this.clouds.push(n),
							this.mesh.add(n.mesh);
					}
				}
				return (
					Object(o['a'])(e, [
						{
							key: 'moveClouds',
							value: function () {
								var e = this;
								this.clouds.forEach(function (t, i) {
									e.clouds[i].rotate();
								});
							},
						},
					]),
					e
				);
			})(),
			oe =
				(i('fb6a'),
				(function () {
					function e() {
						Object(r['a'])(this, e),
							(this.audioType = ''),
							(this.audioListener = new q['f']()),
							(this.audioLoader = new q['g']()),
							(this.audio = new q['d'](this.audioListener)),
							(this._audio = new Audio()),
							(this.audioAnalyser = new q['e'](this.audio, 512)),
							this._audio.canPlayType('audio/mpeg')
								? (this.audioType = 'mp3')
								: '' != this._audio.canPlayType('audio/ogg; codecs="vorbis"') &&
								  (this.audioType = 'ogg');
					}
					return (
						Object(o['a'])(e, [
							{
								key: 'load',
								value: function () {
									var e = this;
									return new Promise(function (t, i) {
										e.audioLoader.load(
											'/three/KUWAGO-Colors.'.concat(e.audioType),
											function (i) {
												e.audio.setBuffer(i),
													e.audio.setLoop(!0),
													e.audio.setVolume(0.5),
													t(!0);
											},
											function () {
												console.log('on progress');
											},
											function (e) {
												t(!1);
											}
										);
									});
								},
							},
							{
								key: 'ftt',
								value: function () {
									var e = this.audioAnalyser.getFrequencyData();
									console.log(e);
									var t = e.slice(0, e.length / 2 - 1),
										i =
											t.reduce(function (e, t) {
												return e + t;
											}, 0) / t.length,
										n = e.slice(e.length / 2 - 1, e.length - 1),
										a =
											t.reduce(function (e, t) {
												return e + t;
											}, 0) / t.length,
										s = Math.max(t),
										r = i,
										o = a,
										h = s / t.length,
										c = r / t.length,
										u = o / n.length;
									return {
										lowerAvg: r,
										lowerAvgFr: c,
										lowerHalfArray: t,
										lowerHalfArrayAvg: i,
										lowerMax: s,
										lowerMaxFr: h,
										upperAvg: o,
										upperAvgFr: u,
										upperHalfArray: n,
										upperHalfArrayAvg: a,
									};
								},
							},
							{
								key: 'update',
								value: function (e) {
									this.ftt();
								},
							},
						]),
						e
					);
				})()),
			he = function e(t) {
				Object(r['a'])(this, e),
					(this.geom = new q['q'](600, 600, 800, 40, 10)),
					(this.material = new q['Z']({
						color: t.blue,
						opacity: 6,
						flatShading: !0,
					})),
					(this.mesh = new q['W'](this.geom, this.material)),
					(this.mesh.receiveShadow = !0),
					this.geom.applyMatrix4(new q['V']().makeRotationX(-Math.PI / 2));
			},
			ce = (function () {
				function e() {
					Object(r['a'])(this, e),
						(this.loadingManager = new q['R']()),
						(this.ready = !1),
						(this.colors = {
							red: 15881030,
							white: 14209233,
							brown: 5845806,
							pink: 16095342,
							brownDark: 2300175,
							blue: 6865856,
						}),
						(this.cameraPosition = { x: 0, y: 100, z: 200 }),
						(this.speed = 0),
						(this.initSpeed = 35e-5),
						(this.baseSpeed = 35e-5),
						(this.targetBaseSpeed = 35e-5),
						(this.incrementSpeedByTime = 25e-7),
						(this.incrementSpeedByLevel = 5e-6),
						(this.distanceForSpeedUpdate = 100),
						(this.speedLastUpdate = 0),
						(this.distance = 0),
						(this.ratioSpeedDistance = 50),
						(this.energy = 100),
						(this.ratioSpeedEnergy = 3),
						(this.blankEnergy = !1),
						(this.level = 1),
						(this.levelLastUpdate = 0),
						(this.distanceForLevelUpdate = 1e3),
						(this.planeDefaultHeight = 100),
						(this.planeAmpHeight = 80),
						(this.planeAmpWidth = 75),
						(this.planeMoveSensivity = 0.005),
						(this.planeRotXSensivity = 8e-4),
						(this.planeRotZSensivity = 4e-4),
						(this.planeFallSpeed = 0.001),
						(this.planeMinSpeed = 1.2),
						(this.planeMaxSpeed = 1.6),
						(this.planeSpeed = 0),
						(this.planeCollisionDisplacementX = 0),
						(this.planeCollisionSpeedX = 0),
						(this.planeCollisionDisplacementY = 0),
						(this.planeCollisionSpeedY = 0),
						(this.seaRadius = 600),
						(this.seaLength = 800),
						(this.seaRotationSpeed = 0.006),
						(this.wavesMinAmp = 5),
						(this.wavesMaxAmp = 20),
						(this.wavesMinSpeed = 0.001),
						(this.wavesMaxSpeed = 0.003),
						(this.cameraFarPos = 500),
						(this.cameraNearPos = 150),
						(this.cameraSensivity = 0.002),
						(this.coinDistanceTolerance = 15),
						(this.coinValue = 3),
						(this.coinsSpeed = 0.5),
						(this.coinLastSpawn = 0),
						(this.distanceForCoinsSpawn = 100),
						(this.ennemyDistanceTolerance = 10),
						(this.ennemyValue = 10),
						(this.ennemiesSpeed = 0.6),
						(this.ennemyLastSpawn = 0),
						(this.nEnnemies = 0),
						(this.distanceForEnnemiesSpawn = 50),
						(this.status = 'playing'),
						(this.deltaTime = 0),
						(this.newTime = new Date().getTime()),
						(this.oldTime = new Date().getTime()),
						(this.ennemiesPool = []),
						(this.particlesPool = []),
						(this.particlesInUse = []),
						(this.mousePosition = { x: 0, y: 0 }),
						(this.mouseTarget = { x: 0, y: 0 }),
						(this.fieldOfView = 50),
						(this.aspectRatio = window.innerWidth / window.innerHeight),
						(this.nearPlane = 0.1),
						(this.farPlane = 1e4);
				}
				return (
					Object(o['a'])(e, [
						{
							key: 'importSceneCameraRenderer',
							value: function (e, t, i) {
								return (
									(this.scene = e), (this.camera = t), (this.renderer = i), this
								);
							},
						},
						{
							key: 'init',
							value: (function () {
								var e = Object(G['a'])(
									regeneratorRuntime.mark(function e() {
										return regeneratorRuntime.wrap(
											function (e) {
												while (1)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(this.ennemiesHolder = new ie()),
																(this.energyBar = document.getElementById('')),
																(this.fieldDistance =
																	document.getElementById('')),
																(this.replayMessage =
																	document.getElementById('')),
																(this.fieldLevel = document.getElementById('')),
																(this.levelCircle =
																	document.getElementById('')),
																(this.sound = new oe()),
																this.createScene(),
																this.createLights(),
																this.createWorld(),
																(e.next = 12),
																this.createPlane()
															);
														case 12:
															return (e.next = 14), this.createAudio();
														case 14:
															this.createSky(),
																(this.ready = !0),
																this.play(),
																document.addEventListener(
																	'mousemove',
																	this.handleMouseMove.bind(this),
																	!1
																);
														case 18:
														case 'end':
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								function t() {
									return e.apply(this, arguments);
								}
								return t;
							})(),
						},
						{ key: 'play', value: function () {} },
						{
							key: 'createAudio',
							value: (function () {
								var e = Object(G['a'])(
									regeneratorRuntime.mark(function e() {
										return regeneratorRuntime.wrap(
											function (e) {
												while (1)
													switch ((e.prev = e.next)) {
														case 0:
															return (e.next = 2), this.sound.load();
														case 2:
															this.camera.add(this.sound.audioListener);
														case 3:
														case 'end':
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								function t() {
									return e.apply(this, arguments);
								}
								return t;
							})(),
						},
						{
							key: 'createScene',
							value: function () {
								var e = this.cameraPosition,
									t = e.x,
									i = e.y,
									n = e.z;
								(this.camera.position.x = t),
									(this.camera.position.y = i),
									(this.camera.position.z = n),
									(this.camera['fov'] = this.fieldOfView),
									(this.camera['aspect'] = this.aspectRatio),
									(this.camera['far'] = this.farPlane),
									(this.camera['near'] = this.nearPlane),
									this.camera.updateProjectionMatrix();
							},
						},
						{
							key: 'createLights',
							value: function () {
								(this.light = new ae()),
									this.scene.add(this.light.hemisphereLight),
									this.scene.add(this.light.shadowLight),
									this.scene.add(this.light.ambiantLight);
							},
						},
						{
							key: 'createPlane',
							value: (function () {
								var e = Object(G['a'])(
									regeneratorRuntime.mark(function e() {
										return regeneratorRuntime.wrap(
											function (e) {
												while (1)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(this.airPlaine = new te()),
																(e.next = 3),
																this.airPlaine.createAsync()
															);
														case 3:
															this.scene.add(this.airPlaine.mesh.scene);
														case 4:
														case 'end':
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								function t() {
									return e.apply(this, arguments);
								}
								return t;
							})(),
						},
						{
							key: 'createWorld',
							value: function () {
								(this.world = new he(this.colors)),
									(this.world.mesh.position.y = -600),
									this.scene.add(this.world.mesh);
							},
						},
						{
							key: 'createSky',
							value: function () {
								(this.sky = new re(this.colors)),
									(this.sky.mesh.position.y = -600),
									this.scene.add(this.sky.mesh);
							},
						},
						{
							key: 'update',
							value: function (e) {
								(this.mouseTarget.y = J(
									this.mousePosition.y,
									-0.75,
									0.75,
									25,
									175
								)),
									(this.mouseTarget.x = J(
										this.mousePosition.x,
										-0.75,
										0.75,
										-100,
										100
									)),
									this.updateAirPlaine(),
									this.updateWorld(),
									this.updateSky(),
									this.updateCameraFov();
							},
						},
						{
							key: 'updateCameraFov',
							value: function () {
								(this.camera.fov = J(this.mousePosition.x, -1, 1, 40, 80)),
									this.camera.updateProjectionMatrix();
							},
						},
						{
							key: 'updateAirPlaine',
							value: function () {
								(this.airPlaine.mesh.scene.position.y +=
									0.1 *
									(this.mouseTarget.y - this.airPlaine.mesh.scene.position.y)),
									(this.airPlaine.mesh.scene.rotation.x +=
										9e-4 *
										(this.mouseTarget.y -
											this.airPlaine.mesh.scene.position.y)),
									(this.airPlaine.mesh.scene.position.z =
										0.0128 *
										(this.mouseTarget.y -
											this.airPlaine.mesh.scene.position.y)),
									(this.airPlaine.mesh.scene.position.x =
										0.0064 *
										(this.airPlaine.mesh.scene.position.y -
											this.mouseTarget.y));
							},
						},
						{
							key: 'updateWorld',
							value: function () {
								this.world.mesh.rotation.z += 0.0025;
							},
						},
						{
							key: 'updateSky',
							value: function () {
								this.sky.mesh.rotation.z += 0.005;
							},
						},
						{
							key: 'updateEnergy',
							value: function () {
								(this.energy -=
									this.speed * this.deltaTime * this.ratioSpeedEnergy),
									(this.energy = Math.max(0, this.energy)),
									(this.energyBar.style.right = 100 - this.energy + '%'),
									(this.energyBar.style.backgroundColor =
										this.energy < 50 ? '#f25346' : '#68c3c0'),
									this.energy < 30
										? (this.energyBar.style.animationName = 'blinking')
										: (this.energyBar.style.animationName = 'none'),
									this.energy < 1 && (this.status = 'this.ver');
							},
						},
						{
							key: 'addEnergy',
							value: function () {
								(this.energy += this.coinValue),
									(this.energy = Math.min(this.energy, 100));
							},
						},
						{
							key: 'removeEnergy',
							value: function () {
								(this.energy -= this.ennemyValue),
									(this.energy = Math.max(0, this.energy));
							},
						},
						{
							key: 'createEnnemies',
							value: function () {
								for (var e = 0; e < 10; e++) {
									var t = new ne(this.colors.red);
									this.ennemiesPool.push(t);
								}
								(this.ennemiesHolder = new ie()),
									this.scene.add(this.ennemiesHolder.mesh);
							},
						},
						{
							key: 'spawnEnnemises',
							value: function () {
								for (var e = 0; e < this.nEnnemies; e++) {
									var t,
										i = void 0;
									if (this.ennemiesPool.length)
										i =
											null !== (t = this.ennemiesPool.pop()) && void 0 !== t
												? t
												: new ne(this.colors.red);
									else i = new ne(this.colors.red);
									(i.angle = -0.1 * e),
										(i.dist =
											this.seaRadius +
											this.planeDefaultHeight +
											(2 * Math.random() - 1) * (this.planeAmpHeight - 20)),
										(i.mesh.position.y =
											-this.seaRadius + Math.sin(i.angle) * i.dist),
										(i.mesh.position.x = Math.cos(i.angle) * i.dist),
										this.ennemiesHolder.mesh.add(i.mesh),
										this.ennemiesHolder.ennemiesInUse.push(i);
								}
							},
						},
						{
							key: 'rotateEnnemies',
							value: function () {
								for (
									var e = 0;
									e < this.ennemiesHolder.ennemiesInUse.length;
									e++
								) {
									var t = this.ennemiesHolder.ennemiesInUse[e];
									(t.angle += this.speed * this.deltaTime * this.ennemiesSpeed),
										t.angle > 2 * Math.PI && (t.angle -= 2 * Math.PI),
										(t.mesh.position.y =
											-this.seaRadius + Math.sin(t.angle) * t.dist),
										(t.mesh.position.x = Math.cos(t.angle) * t.dist),
										(t.mesh.rotation.z += 0.1 * Math.random()),
										(t.mesh.rotation.y += 0.1 * Math.random());
									var i = this.airPlaine.mesh.position
											.clone()
											.sub(t.mesh.position.clone()),
										n = i.length();
									n < this.ennemyDistanceTolerance
										? (this.particlesHolder.spawnParticles(
												t.mesh.position.clone(),
												15,
												this.colors.red,
												3
										  ),
										  this.ennemiesPool.unshift(
												this.ennemiesHolder.ennemiesInUse.splice(e, 1)[0]
										  ),
										  this.ennemiesHolder.mesh.remove(t.mesh),
										  (this.planeCollisionSpeedX = (100 * i.x) / n),
										  (this.planeCollisionSpeedY = (100 * i.y) / n),
										  (this.light.ambiantLight.intensity = 2),
										  this.removeEnergy(),
										  e--)
										: t.angle > Math.PI &&
										  (this.ennemiesPool.unshift(
												this.ennemiesHolder.ennemiesInUse.splice(e, 1)[0]
										  ),
										  this.ennemiesHolder.mesh.remove(t.mesh),
										  e--);
								}
							},
						},
						{
							key: 'handleMouseMove',
							value: function (e) {
								this.mousePosition = {
									x: (e.clientX / window.innerWidth) * 2 - 1,
									y: 1 - (e.clientY / window.innerHeight) * 2,
								};
							},
						},
					]),
					e
				);
			})(),
			ue = function e(t, i, n) {
				Object(r['a'])(this, e),
					(this.engine = new ce()),
					this.engine.importSceneCameraRenderer(t, i, n);
			},
			le =
				(i('cfc3'),
				i('907a'),
				i('9a8c'),
				i('a975'),
				i('735e'),
				i('c1ac'),
				i('d139'),
				i('3a7b'),
				i('d5d6'),
				i('82f8'),
				i('e91f'),
				i('60bd'),
				i('5f96'),
				i('3280'),
				i('3fcc'),
				i('ca91'),
				i('25a1'),
				i('cd26'),
				i('3c5d'),
				i('2954'),
				i('649e'),
				i('219c'),
				i('170b'),
				i('b39a'),
				i('72f7'),
				i('84c3'),
				'precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D uTexture;\n\nvarying vec2 vPUv;\nvarying vec2 vUv;\n\nvoid main() {\n\tvec4 color = vec4(0.0);\n\tvec2 uv = vUv;\n\tvec2 puv = vPUv;\n\n\t// pixel color\n\tvec4 colA = texture2D(uTexture, puv);\n\n\t// greyscale\n\tfloat grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;\n\tvec4 colB = vec4(grey, grey, grey, 1.0);\n\n\t// circle\n\tfloat border = 0.3;\n\tfloat radius = 0.5;\n\tfloat dist = radius - distance(uv, vec2(0.5));\n\tfloat t = smoothstep(0.0, border, dist);\n\n\t// final color\n\tcolor = colB;\n\tcolor.a = t;\n\n\tgl_FragColor = color;\n}'),
			de =
				'precision highp float;\n#define GLSLIFY 1\n\nattribute float pindex;\nattribute vec3 position;\nattribute vec3 offset;\nattribute vec2 uv;\nattribute float angle;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float uTime;\nuniform float uRandom;\nuniform float uDepth;\nuniform float uSize;\nuniform vec2 uTextureSize;\nuniform sampler2D uTexture;\nuniform sampler2D uTouch;\n\nvarying vec2 vPUv;\nvarying vec2 vUv;\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nfloat random(float n) {\n\treturn fract(sin(n) * 43758.5453123);\n}\n\nvoid main() {\n\tvUv = uv;\n\n\t// particle uv\n\tvec2 puv = offset.xy / uTextureSize;\n\tvPUv = puv;\n\n\t// pixel color\n\tvec4 colA = texture2D(uTexture, puv);\n\tfloat grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;\n\n\t// displacement\n\tvec3 displaced = offset;\n\t// randomise\n\tdisplaced.xy += vec2(random(pindex) - 0.5, random(offset.x + pindex) - 0.5) * uRandom;\n\tfloat rndz = (random(pindex) + snoise(vec2(pindex * 0.1, uTime * 0.1)));\n\tdisplaced.z += rndz * (random(pindex) * 2.0 * uDepth);\n\t// center\n\tdisplaced.xy -= uTextureSize * 0.5;\n\n\t// touch\n\tfloat t = texture2D(uTouch, puv).r;\n\tdisplaced.z += t * 20.0 * rndz;\n\tdisplaced.x += cos(angle) * t * 20.0 * rndz;\n\tdisplaced.y += sin(angle) * t * 20.0 * rndz;\n\n\t// particle size\n\tfloat psize = (snoise(vec2(uTime, pindex) * 0.5) + 2.0);\n\tpsize *= max(grey, 0.2);\n\tpsize *= uSize;\n\n\t// final position\n\tvec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);\n\tmvPosition.xyz += position * psize;\n\tvec4 finalPosition = projectionMatrix * mvPosition;\n\n\tgl_Position = finalPosition;\n}',
			me = i('e98f'),
			pe = i.n(me),
			ve = (function () {
				function e() {
					var t = this;
					Object(r['a'])(this, e),
						(this.uniforms = {
							uTime: { value: 0 },
							uRandom: { value: 1 },
							uDepth: { value: 2 },
							uSize: { value: 0 },
							uTextureSize: { value: 0 },
							uTexture: { value: this.texture },
							uTouch: { value: null },
						}),
						(this.dontDrawDarkerPoints = !0),
						(this.loader = new q['Db']()),
						(this.container = new q['hb']()),
						this.loader.load('/three/science.jpg', function (e) {
							(t.texture = e),
								(t.texture.minFilter = q['M']),
								(t.texture.magFilter = q['M']),
								(t.texture.format = q['rb']),
								(t.width = e.image.width),
								(t.height = e.image.height),
								(t.numPoints = t.width * t.height),
								(t.uniforms.uTextureSize.value = new q['Hb'](
									t.width,
									t.height
								));
						}),
						(this.geo = new q['C']()),
						(this.positions = new q['k'](new Float32Array(12), 3)),
						this.positions.setXYZ(0, -0.5, 0.5, 0),
						this.positions.setXYZ(1, 0.5, 0.5, 0),
						this.positions.setXYZ(2, -0.5, -0.5, 0),
						this.positions.setXYZ(3, 0.5, -0.5, 0),
						this.geo.setAttribute('position', this.positions),
						(this.uvs = new q['k'](new Float32Array(8), 2)),
						this.uvs.setXYZ(0, 0, 0, 0),
						this.uvs.setXYZ(1, 1, 0, 0),
						this.uvs.setXYZ(2, 0, 1, 0),
						this.uvs.setXYZ(3, 1, 1, 0),
						this.geo.setAttribute('uv', this.uvs),
						this.geo.setIndex(
							new q['k'](new Uint16Array([0, 2, 1, 2, 3, 1]), 1)
						),
						(this.indices = new Uint16Array(this.numPoints)),
						(this.offsets = new Float32Array(3 * this.numPoints)),
						(this.angles = new Float32Array(this.numPoints));
					for (var i = 0; i < this.numPoints; i++)
						(this.offsets[3 * i + 0] = i % this.width),
							(this.offsets[3 * i + 1] = Math.floor(i / this.width)),
							(this.indices[i] = i),
							(this.angles[i] = Math.random() * Math.PI);
					this.geo.setAttribute('pindex', new q['B'](this.indices, 1, !1)),
						this.geo.setAttribute('offset', new q['B'](this.offsets, 3, !1)),
						this.geo.setAttribute('angle', new q['B'](this.angles, 1, !1)),
						console.log(de),
						(this.material = new q['sb']({
							uniforms: this.uniforms,
							vertexShader: pe()(de),
							fragmentShader: pe()(le),
							depthTest: !1,
							transparent: !0,
						})),
						(this.object3D = new q['W'](this.geo, this.material)),
						this.container.add(this.object3D);
				}
				return (
					Object(o['a'])(e, [
						{
							key: 'resize',
							value: function (e, t) {
								console.log(e);
							},
						},
					]),
					e
				);
			})(),
			fe =
				(i('cb29'),
				(function () {
					function e(t) {
						Object(r['a'])(this, e),
							(this.size = 64),
							(this.maxAge = 120),
							(this.radius = 0.15),
							(this.parent = t),
							(this.size = 64),
							(this.maxAge = 120),
							(this.radius = 0.15),
							(this.trail = []),
							(this.canvas = document.createElement('canvas')),
							(this.canvas.width = this.canvas.height = this.size),
							(this.ctx = this.canvas.getContext('2d')),
							(this.ctx.fillStyle = 'black'),
							this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height),
							(this.texture = new q['Cb'](this.canvas)),
							(this.canvas.id = 'touchTexture'),
							(this.canvas.style.width = this.canvas.style.height =
								''.concat(this.canvas.width, 'px'));
					}
					return (
						Object(o['a'])(e, [
							{
								key: 'resize',
								value: function (e, t) {
									console.log(e);
								},
							},
							{
								key: 'clear',
								value: function () {
									(this.ctx.fillStyle = 'black'),
										this.ctx.fillRect(
											0,
											0,
											this.canvas.width,
											this.canvas.height
										);
								},
							},
							{
								key: 'addTouch',
								value: function (e) {
									var t = 0,
										i = this.trail[this.trail.length - 1];
									if (i) {
										var n = i.x - e.x,
											a = i.y - e.y,
											s = n * n + a * a;
										t = Math.min(1e4 * s, 1);
									}
									this.trail.push({ x: e.x, y: e.y, age: 0, force: t });
								},
							},
							{
								key: 'drawTouch',
								value: function (e) {
									var t = { x: e.x * this.size, y: (1 - e.y) * this.size },
										i = 1;
									(i =
										e.age < 0.3 * this.maxAge
											? K(e.age / (0.3 * this.maxAge), 0, 1, 1)
											: K(
													1 - (e.age - 0.3 * this.maxAge) / (0.7 * this.maxAge),
													0,
													1,
													1
											  )),
										(i *= e.force);
									var n = this.size * this.radius * i,
										a = this.ctx.createRadialGradient(
											t.x,
											t.y,
											0.25 * n,
											t.x,
											t.y,
											n
										);
									a.addColorStop(0, 'rgba(255, 255, 255, 0.2)'),
										a.addColorStop(1, 'rgba(0, 0, 0, 0.0)'),
										this.ctx.beginPath(),
										(this.ctx.fillStyle = a),
										this.ctx.arc(t.x, t.y, n, 0, 2 * Math.PI),
										this.ctx.fill();
								},
							},
							{
								key: 'update',
								value: function (e) {
									var t = this;
									this.clear(),
										this.trail.forEach(function (e, i) {
											e.age++, e.age > t.maxAge && t.trail.splice(i, 1);
										}),
										this.trail.forEach(function (e, i) {
											t.drawTouch(e);
										}),
										(this.texture.needsUpdate = !0);
								},
							},
						]),
						e
					);
				})()),
			ge = (function () {
				function e() {
					Object(r['a'])(this, e),
						(this.loadingManager = new q['R']()),
						(this.cameraPosition = { x: 0, y: 0, z: 300 }),
						(this.ready = !1),
						(this.fieldOfView = 50),
						(this.aspectRatio = window.innerWidth / window.innerHeight),
						(this.nearPlane = 1),
						(this.farPlane = 1e4);
				}
				return (
					Object(o['a'])(e, [
						{
							key: 'importSceneCameraRenderer',
							value: function (e, t, i) {
								return (
									(this.scene = e), (this.camera = t), (this.renderer = i), this
								);
							},
						},
						{
							key: 'createScene',
							value: function () {
								var e = this.cameraPosition,
									t = e.x,
									i = e.y,
									n = e.z;
								(this.camera.position.x = t),
									(this.camera.position.y = i),
									(this.camera.position.z = n),
									(this.camera['fov'] = this.fieldOfView),
									(this.camera['aspect'] = this.aspectRatio),
									(this.camera['far'] = this.farPlane),
									(this.camera['near'] = this.nearPlane),
									this.camera.updateProjectionMatrix();
							},
						},
						{
							key: 'createWorld',
							value: function () {
								(this.particles = new ve()),
									this.scene.add(this.particles.container);
							},
						},
						{
							key: 'init',
							value: (function () {
								var e = Object(G['a'])(
									regeneratorRuntime.mark(function e() {
										var t = this;
										return regeneratorRuntime.wrap(function (e) {
											while (1)
												switch ((e.prev = e.next)) {
													case 0:
														return e.abrupt(
															'return',
															new Promise(function (e, i) {
																t.createScene(),
																	t.createWorld(),
																	t.initTouch(),
																	(t.ready = !0),
																	e(!0);
															})
														);
													case 1:
													case 'end':
														return e.stop();
												}
										}, e);
									})
								);
								function t() {
									return e.apply(this, arguments);
								}
								return t;
							})(),
						},
						{
							key: 'initTouch',
							value: function () {
								this.touch || (this.touch = new fe(this)),
									(this.particles.object3D.material.uniforms.uTouch.value =
										this.touch.texture);
							},
						},
						{
							key: 'update',
							value: function (e, t) {
								this.particles.object3D &&
									(this.touch && this.touch.update(e),
									(this.particles.object3D.material.uniforms.uTime.value += e));
							},
						},
					]),
					e
				);
			})(),
			ye = function e(t, i, n) {
				Object(r['a'])(this, e),
					(this.engine = new ge()),
					this.engine.importSceneCameraRenderer(t, i, n);
			},
			we = i('8710'),
			be = (function () {
				function e(t) {
					Object(r['a'])(this, e),
						(this.animationAction = []),
						(this.promiseToResolve = []),
						(this.loader = new we['a'](t));
				}
				return (
					Object(o['a'])(e, [
						{
							key: 'addAnimationToResolve',
							value: function (e, t) {
								var i = this;
								this.promiseToResolve.push(
									this.loader.load('/three/' + e, function (e) {
										var t = new q['c'](e).clipAction(e.animations[0]);
										i.animationAction.push(t);
									})
								);
							},
						},
						{
							key: 'loadAsync',
							value: function () {
								return Promise.all(this.promiseToResolve);
							},
						},
						{
							key: 'update',
							value: function (e) {
								console.log('update');
							},
						},
					]),
					e
				);
			})(),
			xe = (function () {
				function e() {
					Object(r['a'])(this, e),
						(this.hemisphereLight = new q['z'](11184810, 0, 0.9)),
						(this.shadowLight = new q['r'](16777215, 0.9)),
						(this.ambiantLight = new q['a'](14452852, 0.5)),
						this.shadowLight.position.set(150, 350, 350),
						(this.shadowLight.castShadow = !0),
						(this.shadowLight.shadow.camera.left = -400),
						(this.shadowLight.shadow.camera.right = 400),
						(this.shadowLight.shadow.camera.top = 400),
						(this.shadowLight.shadow.camera.bottom = -400),
						(this.shadowLight.shadow.camera.near = 1),
						(this.shadowLight.shadow.camera.far = 1e3),
						(this.shadowLight.shadow.mapSize.width = 2048),
						(this.shadowLight.shadow.mapSize.height = 2048);
				}
				return (
					Object(o['a'])(e, [{ key: 'update', value: function (e) {} }]), e
				);
			})(),
			Ae = (function () {
				function e(t) {
					Object(r['a'])(this, e),
						(this.modelReady = !1),
						(this.animationAction = []),
						(this.loadingManager = t),
						(this.loader = new we['a'](this.loadingManager));
				}
				return (
					Object(o['a'])(e, [
						{
							key: 'createAsync',
							value: function () {
								var e = this;
								return new Promise(function (t, i) {
									e.loader.load('/three/MaleBot.fbx', function (i) {
										i.scale.set(0.5, 0.5, 0.5),
											i.position.set(0, 0, 0),
											i.traverse(function (e) {
												e.isObject3D &&
													((e.receiveShadow = !0), (e.castShadow = !0));
											}),
											(e.mesh = i),
											(e.mixer = new q['c'](i)),
											t(!0);
									});
								});
							},
						},
					]),
					e
				);
			})(),
			je = function e(t) {
				Object(r['a'])(this, e),
					(this.geom = new q['kb'](600, 600)),
					(this.material = new q['X']({ color: t.blue })),
					(this.mesh = new q['W'](this.geom, this.material)),
					(this.mesh.receiveShadow = !0);
			},
			Oe = (function () {
				function e() {
					Object(r['a'])(this, e),
						(this.ready = !1),
						(this.loadingManager = new q['R']()),
						(this.colors = {
							red: 15881030,
							white: 14209233,
							brown: 5845806,
							pink: 16095342,
							brownDark: 2300175,
							blue: 6865856,
							black: 0,
						}),
						(this.cameraPosition = { x: 0, y: 100, z: 500 }),
						(this.status = 'playing'),
						(this.deltaTime = 0),
						(this.newTime = new Date().getTime()),
						(this.oldTime = new Date().getTime()),
						(this.mousePosition = { x: 0, y: 0 }),
						(this.mouseTarget = { x: 0, y: 0 }),
						(this.fieldOfView = 50),
						(this.aspectRatio = window.innerWidth / window.innerHeight),
						(this.nearPlane = 0.1),
						(this.farPlane = 1e4);
				}
				return (
					Object(o['a'])(e, [
						{
							key: 'importSceneCameraRenderer',
							value: function (e, t, i) {
								return (
									(this.scene = e), (this.camera = t), (this.renderer = i), this
								);
							},
						},
						{
							key: 'resolveAnimation',
							value: function () {
								this.animation.addAnimationToResolve(
									'Thriller_Part_1.fbx',
									'thriller_1'
								);
							},
						},
						{
							key: 'init',
							value: (function () {
								var e = Object(G['a'])(
									regeneratorRuntime.mark(function e() {
										return regeneratorRuntime.wrap(
											function (e) {
												while (1)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(this.scene.background = new q['o'](
																	this.colors.black
																)),
																(this.animation = new be(this.loadingManager)),
																this.createScene(),
																this.createLights(),
																this.createWorld(),
																this.resolveAnimation(),
																(e.next = 8),
																this.animation.loadAsync()
															);
														case 8:
															return (e.next = 10), this.createUser();
														case 10:
															(this.ready = !0),
																document.addEventListener(
																	'mousemove',
																	this.handleMouseMove.bind(this),
																	!1
																);
														case 12:
														case 'end':
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								function t() {
									return e.apply(this, arguments);
								}
								return t;
							})(),
						},
						{ key: 'play', value: function () {} },
						{
							key: 'createScene',
							value: function () {
								var e = this.cameraPosition,
									t = e.x,
									i = e.y,
									n = e.z;
								(this.camera.position.x = t),
									(this.camera.position.y = i),
									(this.camera.position.z = n),
									(this.camera['fov'] = this.fieldOfView),
									(this.camera['aspect'] = this.aspectRatio),
									(this.camera['far'] = this.farPlane),
									(this.camera['near'] = this.nearPlane),
									this.camera.updateProjectionMatrix();
							},
						},
						{
							key: 'createUser',
							value: (function () {
								var e = Object(G['a'])(
									regeneratorRuntime.mark(function e() {
										var t;
										return regeneratorRuntime.wrap(
											function (e) {
												while (1)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(t = new Ae(this.loadingManager)),
																(e.next = 3),
																t.createAsync()
															);
														case 3:
															console.log(this.animation.animationAction),
																(this.user = t),
																(this.user.mixer.timeScale = 1 / 3),
																this.user.mixer
																	.clipAction(
																		this.animation.animationAction[0].getClip()
																	)
																	.play(),
																this.scene.add(this.user.mesh);
														case 8:
														case 'end':
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								function t() {
									return e.apply(this, arguments);
								}
								return t;
							})(),
						},
						{
							key: 'createLights',
							value: function () {
								(this.light = new xe()),
									this.scene.add(this.light.hemisphereLight),
									this.scene.add(this.light.shadowLight),
									this.scene.add(this.light.ambiantLight);
							},
						},
						{
							key: 'createWorld',
							value: function () {
								(this.world = new je(this.colors)),
									(this.world.mesh.position.y = -600),
									this.scene.add(this.world.mesh);
							},
						},
						{
							key: 'update',
							value: function (e) {
								(this.mouseTarget.y = J(
									this.mousePosition.y,
									-0.75,
									0.75,
									25,
									175
								)),
									(this.mouseTarget.x = J(
										this.mousePosition.x,
										-0.75,
										0.75,
										-100,
										100
									)),
									this.user && this.user.mixer.update(e);
							},
						},
						{
							key: 'updateCameraFov',
							value: function () {
								(this.camera.fov = J(this.mousePosition.x, -1, 1, 40, 80)),
									this.camera.updateProjectionMatrix();
							},
						},
						{
							key: 'updateWorld',
							value: function () {
								this.world.mesh.rotation.z += 0.0025;
							},
						},
						{
							key: 'handleMouseMove',
							value: function (e) {
								this.mousePosition = {
									x: (e.clientX / window.innerWidth) * 2 - 1,
									y: 1 - (e.clientY / window.innerHeight) * 2,
								};
							},
						},
					]),
					e
				);
			})(),
			ke = function e(t, i, n) {
				Object(r['a'])(this, e),
					(this.ready = !1),
					(this.engine = new Oe()),
					this.engine.importSceneCameraRenderer(t, i, n);
			},
			Le = (function () {
				function e(t) {
					Object(r['a'])(this, e),
						(this.renderer = new q['Lb']({
							canvas: t,
							antialias: !0,
							powerPreference: 'high-performance',
							preserveDrawingBuffer: !1,
							stencil: !1,
						})),
						this.renderer.setPixelRatio(window.devicePixelRatio),
						this.renderer.setClearColor('white', 1),
						(this.renderer.shadowMap.enabled = !0);
					var i = 45,
						n = window.innerWidth / window.innerHeight,
						a = 1,
						s = 100;
					(this.camera = new q['jb'](i, n, a, s)),
						(this.scene = new q['ub']()),
						(this.scene.background = new q['o'](255)),
						(this.actualView = this.initAppIntro()),
						this.actualView.engine.init();
				}
				return (
					Object(o['a'])(e, [
						{
							key: 'initAppIntro',
							value: function () {
								return new ke(this.scene, this.camera, this.renderer);
							},
						},
						{
							key: 'initInteractiveParticles',
							value: function () {
								return new ye(this.scene, this.camera, this.renderer);
							},
						},
						{
							key: 'initAviator',
							value: function () {
								return new ue(this.scene, this.camera, this.renderer);
							},
						},
						{
							key: 'initSpaceFlight',
							value: function () {
								return new N(this.scene, this.camera);
							},
						},
						{
							key: 'onWindowResize',
							value: function (e, t) {
								this.renderer.setSize(e, t),
									(this.camera.aspect = e / t),
									this.camera.updateProjectionMatrix();
							},
						},
						{
							key: 'update',
							value: function (e, t) {
								this.actualView.engine.ready &&
									this.actualView.engine.update(e, t),
									this.renderer.clear(),
									this.renderer.render(this.scene, this.camera);
							},
						},
					]),
					e
				);
			})(),
			Se = (function () {
				function e() {
					var t = this;
					Object(r['a'])(this, e),
						(this.progressLoaded = 0),
						(this.resize = function () {
							t.view.onWindowResize(window.innerWidth, window.innerHeight);
						});
					var i = document.getElementById('webgl-canvas');
					(this.view = new Le(i)),
						(this.clock = new q['n'](!1)),
						this.clock.start(),
						this.resize(),
						(this.view.actualView.engine.loadingManager.onLoad = function () {
							t.view.actualView.ready = !0;
						}),
						(this.view.actualView.engine.loadingManager.onProgress = function (
							e,
							i,
							n
						) {
							console.log(e),
								console.log(i),
								(t.progressLoaded = Math.trunc(i)),
								console.log(t.progressLoaded),
								console.log(n);
						}),
						this.update.bind(this)(),
						window.addEventListener('resize', this.resize);
				}
				return (
					Object(o['a'])(e, [
						{
							key: 'update',
							value: function () {
								this.view.actualView.ready &&
									this.view.update(
										this.clock.getElapsedTime() / 1e3,
										this.clock.getDelta()
									),
									requestAnimationFrame(this.update.bind(this));
							},
						},
					]),
					e
				);
			})(),
			Pe = (function (e) {
				Object(h['a'])(i, e);
				var t = Object(c['a'])(i);
				function i() {
					return Object(r['a'])(this, i), t.apply(this, arguments);
				}
				return i;
			})(u['b']);
		Pe = Object(T['a'])(
			[
				Object(u['a'])({
					props: { title: { type: String } },
					mounted: function () {
						new Se();
					},
				}),
			],
			Pe
		);
		var Me = Pe;
		const ze = O()(Me, [['render', Y]]);
		var Te = ze,
			Ce = (function (e) {
				Object(h['a'])(i, e);
				var t = Object(c['a'])(i);
				function i() {
					return Object(r['a'])(this, i), t.apply(this, arguments);
				}
				return i;
			})(u['b']);
		Ce = Object(T['a'])(
			[
				Object(u['a'])({
					components: { Canvas: Te },
					props: {},
					mounted: function () {
						new Se();
					},
				}),
			],
			Ce
		);
		var Re = Ce;
		i('426a');
		const Qe = O()(Re, [['render', _]]);
		var De = Qe,
			Ie = (function (e) {
				Object(h['a'])(i, e);
				var t = Object(c['a'])(i);
				function i() {
					return Object(r['a'])(this, i), t.apply(this, arguments);
				}
				return i;
			})(u['b']);
		Ie = Object(T['a'])(
			[Object(u['a'])({ components: { Content: I, Header: F, Intro: De } })],
			Ie
		);
		var He = Ie;
		const Ee = O()(He, [['render', z]]);
		var Be = Ee;
		function We(e, t, i, a, s, r) {
			var o = Object(n['v'])('Canvas', !0);
			return Object(n['q'])(), Object(n['d'])(o, { title: 'webgl-canvas' });
		}
		var Fe = (function (e) {
			Object(h['a'])(i, e);
			var t = Object(c['a'])(i);
			function i() {
				return Object(r['a'])(this, i), t.apply(this, arguments);
			}
			return i;
		})(u['b']);
		Fe = Object(T['a'])([Object(u['a'])({ components: { Canvas: Te } })], Fe);
		var Ue = Fe;
		const Ve = O()(Ue, [['render', We]]);
		var Ze = Ve,
			_e = [
				{ path: '/', name: 'Home', component: Be },
				{ path: '/canvas', name: 'Canvas', component: Ze },
				{ path: '/:pathMatch(.*)*', redirect: { name: 'Home' } },
			],
			Xe = Object(M['a'])({ history: Object(M['b'])(), routes: _e }),
			Ye = Object(n['c'])(L);
		Ye.use(P), Ye.use(Xe), Ye.mount('#app');
	},
});
//# sourceMappingURL=app.c3d08f98.js.map
