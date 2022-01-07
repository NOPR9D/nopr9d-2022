/* eslint-disable @typescript-eslint/no-empty-function */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

/* PrismJS 1.26.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+actionscript+apacheconf+bash+basic+brainfuck+c+csharp+cpp+git+glsl+hlsl+http+hsts+ignore+java+javadoc+javadoclike+json+json5+jsonp+js-templates+kotlin+markdown+markup-templating+php+php-extras+powershell+sass+scss+shell-session+sql+swift+twig+typescript+visual-basic+wasm+yaml&plugins=line-highlight+line-numbers+show-invisibles+custom-class+show-language+highlight-keywords+autoloader+keep-markup+normalize-whitespace+data-uri-highlight+toolbar+copy-to-clipboard+download-button+filter-highlight-all+treeview */
var _self =
		'undefined' != typeof window
			? window
			: 'undefined' != typeof WorkerGlobalScope &&
			  self instanceof WorkerGlobalScope
			? self
			: {},
	Prism = (function (u) {
		var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
			n = 0,
			e = {},
			M = {
				manual: u.Prism && u.Prism.manual,
				disableWorkerMessageHandler:
					u.Prism && u.Prism.disableWorkerMessageHandler,
				util: {
					encode: function e(n) {
						return n instanceof W
							? new W(n.type, e(n.content), n.alias)
							: Array.isArray(n)
							? n.map(e)
							: n
									.replace(/&/g, '&amp;')
									.replace(/</g, '&lt;')
									.replace(/\u00a0/g, ' ');
					},
					type: function (e) {
						return Object.prototype.toString.call(e).slice(8, -1);
					},
					objId: function (e) {
						return (
							e.__id || Object.defineProperty(e, '__id', { value: ++n }), e.__id
						);
					},
					clone: function t(e, r) {
						var a, n;
						switch (((r = r || {}), M.util.type(e))) {
							case 'Object':
								if (((n = M.util.objId(e)), r[n])) return r[n];
								for (var i in ((a = {}), (r[n] = a), e))
									e.hasOwnProperty(i) && (a[i] = t(e[i], r));
								return a;
							case 'Array':
								return (
									(n = M.util.objId(e)),
									r[n]
										? r[n]
										: ((a = []),
										  (r[n] = a),
										  e.forEach(function (e, n) {
												a[n] = t(e, r);
										  }),
										  a)
								);
							default:
								return e;
						}
					},
					getLanguage: function (e) {
						for (; e; ) {
							var n = t.exec(e.className);
							if (n) return n[1].toLowerCase();
							e = e.parentElement;
						}
						return 'none';
					},
					setLanguage: function (e, n) {
						(e.className = e.className.replace(RegExp(t, 'gi'), '')),
							e.classList.add('language-' + n);
					},
					currentScript: function () {
						if ('undefined' == typeof document) return null;
						if ('currentScript' in document) return document.currentScript;
						try {
							throw new Error();
						} catch (e) {
							var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) ||
								[])[1];
							if (n) {
								var t = document.getElementsByTagName('script');
								for (var r in t) if (t[r].src == n) return t[r];
							}
							return null;
						}
					},
					isActive: function (e, n, t) {
						for (var r = 'no-' + n; e; ) {
							var a = e.classList;
							if (a.contains(n)) return !0;
							if (a.contains(r)) return !1;
							e = e.parentElement;
						}
						return !!t;
					},
				},
				languages: {
					plain: e,
					plaintext: e,
					text: e,
					txt: e,
					extend: function (e, n) {
						var t = M.util.clone(M.languages[e]);
						for (var r in n) t[r] = n[r];
						return t;
					},
					insertBefore: function (t, e, n, r) {
						var a = (r = r || M.languages)[t],
							i = {};
						for (var l in a)
							if (a.hasOwnProperty(l)) {
								if (l == e)
									for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
								n.hasOwnProperty(l) || (i[l] = a[l]);
							}
						var s = r[t];
						return (
							(r[t] = i),
							M.languages.DFS(M.languages, function (e, n) {
								n === s && e != t && (this[e] = i);
							}),
							i
						);
					},
					DFS: function e(n, t, r, a) {
						a = a || {};
						var i = M.util.objId;
						for (var l in n)
							if (n.hasOwnProperty(l)) {
								t.call(n, l, n[l], r || l);
								var o = n[l],
									s = M.util.type(o);
								'Object' !== s || a[i(o)]
									? 'Array' !== s || a[i(o)] || ((a[i(o)] = !0), e(o, t, l, a))
									: ((a[i(o)] = !0), e(o, t, null, a));
							}
					},
				},
				plugins: {},
				highlightAll: function (e, n) {
					M.highlightAllUnder(document, e, n);
				},
				highlightAllUnder: function (e, n, t) {
					var r = {
						callback: t,
						container: e,
						selector:
							'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
					};
					M.hooks.run('before-highlightall', r),
						(r.elements = Array.prototype.slice.apply(
							r.container.querySelectorAll(r.selector)
						)),
						M.hooks.run('before-all-elements-highlight', r);
					for (var a, i = 0; (a = r.elements[i++]); )
						M.highlightElement(a, !0 === n, r.callback);
				},
				highlightElement: function (e, n, t) {
					var r = M.util.getLanguage(e),
						a = M.languages[r];
					M.util.setLanguage(e, r);
					var i = e.parentElement;
					i && 'pre' === i.nodeName.toLowerCase() && M.util.setLanguage(i, r);
					var l = { element: e, language: r, grammar: a, code: e.textContent };
					function o(e) {
						(l.highlightedCode = e),
							M.hooks.run('before-insert', l),
							(l.element.innerHTML = l.highlightedCode),
							M.hooks.run('after-highlight', l),
							M.hooks.run('complete', l),
							t && t.call(l.element);
					}
					if (
						(M.hooks.run('before-sanity-check', l),
						(i = l.element.parentElement) &&
							'pre' === i.nodeName.toLowerCase() &&
							!i.hasAttribute('tabindex') &&
							i.setAttribute('tabindex', '0'),
						!l.code)
					)
						return M.hooks.run('complete', l), void (t && t.call(l.element));
					if ((M.hooks.run('before-highlight', l), l.grammar))
						if (n && u.Worker) {
							var s = new Worker(M.filename);
							(s.onmessage = function (e) {
								o(e.data);
							}),
								s.postMessage(
									JSON.stringify({
										language: l.language,
										code: l.code,
										immediateClose: !0,
									})
								);
						} else o(M.highlight(l.code, l.grammar, l.language));
					else o(M.util.encode(l.code));
				},
				highlight: function (e, n, t) {
					var r = { code: e, grammar: n, language: t };
					return (
						M.hooks.run('before-tokenize', r),
						(r.tokens = M.tokenize(r.code, r.grammar)),
						M.hooks.run('after-tokenize', r),
						W.stringify(M.util.encode(r.tokens), r.language)
					);
				},
				tokenize: function (e, n) {
					var t = n.rest;
					if (t) {
						for (var r in t) n[r] = t[r];
						delete n.rest;
					}
					var a = new i();
					return (
						I(a, a.head, e),
						(function e(n, t, r, a, i, l) {
							for (var o in r)
								if (r.hasOwnProperty(o) && r[o]) {
									var s = r[o];
									s = Array.isArray(s) ? s : [s];
									for (var u = 0; u < s.length; ++u) {
										if (l && l.cause == o + ',' + u) return;
										var c = s[u],
											g = c.inside,
											f = !!c.lookbehind,
											h = !!c.greedy,
											d = c.alias;
										if (h && !c.pattern.global) {
											var v = c.pattern.toString().match(/[imsuy]*$/)[0];
											c.pattern = RegExp(c.pattern.source, v + 'g');
										}
										for (
											var p = c.pattern || c, m = a.next, y = i;
											m !== t.tail && !(l && y >= l.reach);
											y += m.value.length, m = m.next
										) {
											var k = m.value;
											if (t.length > n.length) return;
											if (!(k instanceof W)) {
												var x,
													b = 1;
												if (h) {
													if (!(x = z(p, y, n, f)) || x.index >= n.length)
														break;
													var w = x.index,
														A = x.index + x[0].length,
														P = y;
													for (P += m.value.length; P <= w; )
														(m = m.next), (P += m.value.length);
													if (
														((P -= m.value.length),
														(y = P),
														m.value instanceof W)
													)
														continue;
													for (
														var E = m;
														E !== t.tail &&
														(P < A || 'string' == typeof E.value);
														E = E.next
													)
														b++, (P += E.value.length);
													b--, (k = n.slice(y, P)), (x.index -= y);
												} else if (!(x = z(p, 0, k, f))) continue;
												var w = x.index,
													L = x[0],
													S = k.slice(0, w),
													O = k.slice(w + L.length),
													j = y + k.length;
												l && j > l.reach && (l.reach = j);
												var C = m.prev;
												S && ((C = I(t, C, S)), (y += S.length)), q(t, C, b);
												var N = new W(o, g ? M.tokenize(L, g) : L, d, L);
												if (((m = I(t, C, N)), O && I(t, m, O), 1 < b)) {
													var _ = { cause: o + ',' + u, reach: j };
													e(n, t, r, m.prev, y, _),
														l && _.reach > l.reach && (l.reach = _.reach);
												}
											}
										}
									}
								}
						})(e, a, n, a.head, 0),
						(function (e) {
							var n = [],
								t = e.head.next;
							for (; t !== e.tail; ) n.push(t.value), (t = t.next);
							return n;
						})(a)
					);
				},
				hooks: {
					all: {},
					add: function (e, n) {
						var t = M.hooks.all;
						(t[e] = t[e] || []), t[e].push(n);
					},
					run: function (e, n) {
						var t = M.hooks.all[e];
						if (t && t.length) for (var r, a = 0; (r = t[a++]); ) r(n);
					},
				},
				Token: W,
			};
		function W(e, n, t, r) {
			(this.type = e),
				(this.content = n),
				(this.alias = t),
				(this.length = 0 | (r || '').length);
		}
		function z(e, n, t, r) {
			e.lastIndex = n;
			var a = e.exec(t);
			if (a && r && a[1]) {
				var i = a[1].length;
				(a.index += i), (a[0] = a[0].slice(i));
			}
			return a;
		}
		function i() {
			var e = { value: null, prev: null, next: null },
				n = { value: null, prev: e, next: null };
			(e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
		}
		function I(e, n, t) {
			var r = n.next,
				a = { value: t, prev: n, next: r };
			return (n.next = a), (r.prev = a), e.length++, a;
		}
		function q(e, n, t) {
			for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
			((n.next = r).prev = n), (e.length -= a);
		}
		if (
			((u.Prism = M),
			(W.stringify = function n(e, t) {
				if ('string' == typeof e) return e;
				if (Array.isArray(e)) {
					var r = '';
					return (
						e.forEach(function (e) {
							r += n(e, t);
						}),
						r
					);
				}
				var a = {
						type: e.type,
						content: n(e.content, t),
						tag: 'span',
						classes: ['token', e.type],
						attributes: {},
						language: t,
					},
					i = e.alias;
				i &&
					(Array.isArray(i)
						? Array.prototype.push.apply(a.classes, i)
						: a.classes.push(i)),
					M.hooks.run('wrap', a);
				var l = '';
				for (var o in a.attributes)
					l +=
						' ' +
						o +
						'="' +
						(a.attributes[o] || '').replace(/"/g, '&quot;') +
						'"';
				return (
					'<' +
					a.tag +
					' class="' +
					a.classes.join(' ') +
					'"' +
					l +
					'>' +
					a.content +
					'</' +
					a.tag +
					'>'
				);
			}),
			!u.document)
		)
			return (
				u.addEventListener &&
					(M.disableWorkerMessageHandler ||
						u.addEventListener(
							'message',
							function (e) {
								var n = JSON.parse(e.data),
									t = n.language,
									r = n.code,
									a = n.immediateClose;
								u.postMessage(M.highlight(r, M.languages[t], t)),
									a && u.close();
							},
							!1
						)),
				M
			);
		var r = M.util.currentScript();
		function a() {
			M.manual || M.highlightAll();
		}
		if (
			(r &&
				((M.filename = r.src),
				r.hasAttribute('data-manual') && (M.manual = !0)),
			!M.manual)
		) {
			var l = document.readyState;
			'loading' === l || ('interactive' === l && r && r.defer)
				? document.addEventListener('DOMContentLoaded', a)
				: window.requestAnimationFrame
				? window.requestAnimationFrame(a)
				: window.setTimeout(a, 16);
		}
		return M;
	})(_self);
'undefined' != typeof module && module.exports && (module.exports = Prism),
	'undefined' != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
	comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
	prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
	doctype: {
		pattern:
			/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: !0,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: !0,
				greedy: !0,
				inside: null,
			},
			string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
			punctuation: /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/i,
			name: /[^\s<>'"]+/,
		},
	},
	cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
	tag: {
		pattern:
			/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: !0,
		inside: {
			tag: {
				pattern: /^<\/?[^\s>\/]+/,
				inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
				},
			},
			punctuation: /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: { namespace: /^[^\s>\/:]+:/ },
			},
		},
	},
	entity: [
		{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
		/&#x?[\da-f]{1,8};/i,
	],
}),
	(Prism.languages.markup.tag.inside['attr-value'].inside.entity =
		Prism.languages.markup.entity),
	(Prism.languages.markup.doctype.inside['internal-subset'].inside =
		Prism.languages.markup),
	Prism.hooks.add('wrap', function (a) {
		'entity' === a.type &&
			(a.attributes.title = a.content.replace(/&amp;/, '&'));
	}),
	Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
		value: function (a, e) {
			var s = {};
			(s['language-' + e] = {
				pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
				lookbehind: !0,
				inside: Prism.languages[e],
			}),
				(s.cdata = /^<!\[CDATA\[|\]\]>$/i);
			var t = {
				'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s },
			};
			t['language-' + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
			var n = {};
			(n[a] = {
				pattern: RegExp(
					'(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)'.replace(
						/__/g,
						function () {
							return a;
						}
					),
					'i'
				),
				lookbehind: !0,
				greedy: !0,
				inside: t,
			}),
				Prism.languages.insertBefore('markup', 'cdata', n);
		},
	}),
	Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
		value: function (a, e) {
			Prism.languages.markup.tag.inside['special-attr'].push({
				pattern: RegExp(
					'(^|["\'\\s])(?:' +
						a +
						')\\s*=\\s*(?:"[^"]*"|\'[^\']*\'|[^\\s\'">=]+(?=[\\s>]))',
					'i'
				),
				lookbehind: !0,
				inside: {
					'attr-name': /^[^\s=]+/,
					'attr-value': {
						pattern: /=[\s\S]+/,
						inside: {
							value: {
								pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
								lookbehind: !0,
								alias: [e, 'language-' + e],
								inside: Prism.languages[e],
							},
							punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
						},
					},
				},
			});
		},
	}),
	(Prism.languages.html = Prism.languages.markup),
	(Prism.languages.mathml = Prism.languages.markup),
	(Prism.languages.svg = Prism.languages.markup),
	(Prism.languages.xml = Prism.languages.extend('markup', {})),
	(Prism.languages.ssml = Prism.languages.xml),
	(Prism.languages.atom = Prism.languages.xml),
	(Prism.languages.rss = Prism.languages.xml);
!(function (s) {
	var e =
		/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
	(s.languages.css = {
		comment: /\/\*[\s\S]*?\*\//,
		atrule: {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				rule: /^@[\w-]+/,
				'selector-function-argument': {
					pattern:
						/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: !0,
					alias: 'selector',
				},
				keyword: {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: !0,
				},
			},
		},
		url: {
			pattern: RegExp(
				'\\burl\\((?:' + e.source + '|(?:[^\\\\\r\n()"\']|\\\\[^])*)\\)',
				'i'
			),
			greedy: !0,
			inside: {
				function: /^url/i,
				punctuation: /^\(|\)$/,
				string: { pattern: RegExp('^' + e.source + '$'), alias: 'url' },
			},
		},
		selector: {
			pattern: RegExp(
				'(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
					e.source +
					')*(?=\\s*\\{)'
			),
			lookbehind: !0,
		},
		string: { pattern: e, greedy: !0 },
		property: {
			pattern:
				/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: !0,
		},
		important: /!important\b/i,
		function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
		punctuation: /[(){};:,]/,
	}),
		(s.languages.css.atrule.inside.rest = s.languages.css);
	var t = s.languages.markup;
	t && (t.tag.addInlined('style', 'css'), t.tag.addAttribute('style', 'css'));
})(Prism);
Prism.languages.clike = {
	comment: [
		{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
		{ pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
	],
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0,
	},
	'class-name': {
		pattern:
			/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: !0,
		inside: { punctuation: /[.\\]/ },
	},
	keyword:
		/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	boolean: /\b(?:false|true)\b/,
	function: /\b\w+(?=\()/,
	number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	punctuation: /[{}[\];(),.:]/,
};
(Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern:
				/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: !0,
		},
	],
	keyword: [
		{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
		{
			pattern:
				/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: !0,
		},
	],
	function:
		/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	number: {
		pattern: RegExp(
			'(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])'
		),
		lookbehind: !0,
	},
	operator:
		/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
})),
	(Prism.languages.javascript['class-name'][0].pattern =
		/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
	Prism.languages.insertBefore('javascript', 'keyword', {
		regex: {
			pattern:
				/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
			lookbehind: !0,
			greedy: !0,
			inside: {
				'regex-source': {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: !0,
					alias: 'language-regex',
					inside: Prism.languages.regex,
				},
				'regex-delimiter': /^\/|\/$/,
				'regex-flags': /^[a-z]+$/,
			},
		},
		'function-variable': {
			pattern:
				/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
			alias: 'function',
		},
		parameter: [
			{
				pattern:
					/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern:
					/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern:
					/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern:
					/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
	}),
	Prism.languages.insertBefore('javascript', 'string', {
		hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
		'template-string': {
			pattern:
				/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
			greedy: !0,
			inside: {
				'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
				interpolation: {
					pattern:
						/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
					lookbehind: !0,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation',
						},
						rest: Prism.languages.javascript,
					},
				},
				string: /[\s\S]+/,
			},
		},
		'string-property': {
			pattern:
				/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
			lookbehind: !0,
			greedy: !0,
			alias: 'property',
		},
	}),
	Prism.languages.insertBefore('javascript', 'operator', {
		'literal-property': {
			pattern:
				/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
			lookbehind: !0,
			alias: 'property',
		},
	}),
	Prism.languages.markup &&
		(Prism.languages.markup.tag.addInlined('script', 'javascript'),
		Prism.languages.markup.tag.addAttribute(
			'on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)',
			'javascript'
		)),
	(Prism.languages.js = Prism.languages.javascript);
(Prism.languages.actionscript = Prism.languages.extend('javascript', {
	keyword:
		/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
	operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/,
})),
	(Prism.languages.actionscript['class-name'].alias = 'function'),
	delete Prism.languages.actionscript.parameter,
	delete Prism.languages.actionscript['literal-property'],
	Prism.languages.markup &&
		Prism.languages.insertBefore('actionscript', 'string', {
			xml: {
				pattern:
					/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
				lookbehind: !0,
				inside: Prism.languages.markup,
			},
		});
Prism.languages.apacheconf = {
	comment: /#.*/,
	'directive-inline': {
		pattern:
			/(^[\t ]*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|Type|UserFile|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|Limit(?:InternalRecursion|Request(?:Body|Fields|FieldSize|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|SRPUnknownUserSeed|SRPVerifierFile|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UserName|UseStapling|VerifyClient|VerifyDepth)|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
		lookbehind: !0,
		alias: 'property',
	},
	'directive-block': {
		pattern:
			/<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b.*>/i,
		inside: {
			'directive-block': {
				pattern: /^<\/?\w+/,
				inside: { punctuation: /^<\/?/ },
				alias: 'tag',
			},
			'directive-block-parameter': {
				pattern: /.*[^>]/,
				inside: {
					punctuation: /:/,
					string: {
						pattern: /("|').*\1/,
						inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ },
					},
				},
				alias: 'attr-value',
			},
			punctuation: />/,
		},
		alias: 'tag',
	},
	'directive-flags': { pattern: /\[(?:[\w=],?)+\]/, alias: 'keyword' },
	string: {
		pattern: /("|').*\1/,
		inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ },
	},
	variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/,
	regex: /\^?.*\$|\^.*\$?/,
};
!(function (e) {
	var t =
			'\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
		n = {
			pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
			lookbehind: !0,
			alias: 'punctuation',
			inside: null,
		},
		a = {
			bash: n,
			environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
			variable: [
				{
					pattern: /\$?\(\([\s\S]+?\)\)/,
					greedy: !0,
					inside: {
						variable: [
							{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
							/^\$\(\(/,
						],
						number:
							/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
						operator:
							/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
						punctuation: /\(\(?|\)\)?|,|;/,
					},
				},
				{
					pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
					greedy: !0,
					inside: { variable: /^\$\(|^`|\)$|`$/ },
				},
				{
					pattern: /\$\{[^}]+\}/,
					greedy: !0,
					inside: {
						operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
						punctuation: /[\[\]]/,
						environment: {
							pattern: RegExp('(\\{)' + t),
							lookbehind: !0,
							alias: 'constant',
						},
					},
				},
				/\$(?:\w+|[#?*!@$])/,
			],
			entity:
				/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
		};
	(e.languages.bash = {
		shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
		comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
		'function-name': [
			{
				pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
				lookbehind: !0,
				alias: 'function',
			},
			{ pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
		],
		'for-or-select': {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: 'variable',
			lookbehind: !0,
		},
		'assign-left': {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
			inside: {
				environment: {
					pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
					lookbehind: !0,
					alias: 'constant',
				},
			},
			alias: 'variable',
			lookbehind: !0,
		},
		string: [
			{
				pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
				lookbehind: !0,
				greedy: !0,
				inside: a,
			},
			{
				pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
				lookbehind: !0,
				greedy: !0,
				inside: { bash: n },
			},
			{
				pattern:
					/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
				lookbehind: !0,
				greedy: !0,
				inside: a,
			},
			{ pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
			{
				pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
				greedy: !0,
				inside: { entity: a.entity },
			},
		],
		environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
		variable: a.variable,
		function: {
			pattern:
				/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		keyword: {
			pattern:
				/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		builtin: {
			pattern:
				/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
			lookbehind: !0,
			alias: 'class-name',
		},
		boolean: {
			pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
		operator: {
			pattern:
				/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
			inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } },
		},
		punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
	}),
		(n.inside = e.languages.bash);
	for (
		var o = [
				'comment',
				'function-name',
				'for-or-select',
				'assign-left',
				'string',
				'environment',
				'function',
				'keyword',
				'builtin',
				'boolean',
				'file-descriptor',
				'operator',
				'punctuation',
				'number',
			],
			s = a.variable[1].inside,
			i = 0;
		i < o.length;
		i++
	)
		s[o[i]] = e.languages.bash[o[i]];
	e.languages.shell = e.languages.bash;
})(Prism);
Prism.languages.basic = {
	comment: { pattern: /(?:!|REM\b).+/i, inside: { keyword: /^REM/i } },
	string: { pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/, greedy: !0 },
	number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
	keyword:
		/\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SELECT CASE|SHARED|SHELL|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
	function:
		/\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
	operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
	punctuation: /[,;:()]/,
};
Prism.languages.brainfuck = {
	pointer: { pattern: /<|>/, alias: 'keyword' },
	increment: { pattern: /\+/, alias: 'inserted' },
	decrement: { pattern: /-/, alias: 'deleted' },
	branching: { pattern: /\[|\]/, alias: 'important' },
	operator: /[.,]/,
	comment: /\S+/,
};
(Prism.languages.c = Prism.languages.extend('clike', {
	comment: {
		pattern:
			/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: !0,
	},
	string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
	'class-name': {
		pattern:
			/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
		lookbehind: !0,
	},
	keyword:
		/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
	function: /\b[a-z_]\w*(?=\s*\()/i,
	number:
		/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
	operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
})),
	Prism.languages.insertBefore('c', 'string', {
		char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 },
	}),
	Prism.languages.insertBefore('c', 'string', {
		macro: {
			pattern:
				/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
			lookbehind: !0,
			greedy: !0,
			alias: 'property',
			inside: {
				string: [
					{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
					Prism.languages.c.string,
				],
				char: Prism.languages.c.char,
				comment: Prism.languages.c.comment,
				'macro-name': [
					{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
					{
						pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
						lookbehind: !0,
						alias: 'function',
					},
				],
				directive: {
					pattern: /^(#\s*)[a-z]+/,
					lookbehind: !0,
					alias: 'keyword',
				},
				'directive-hash': /^#/,
				punctuation: /##|\\(?=[\r\n])/,
				expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c },
			},
		},
	}),
	Prism.languages.insertBefore('c', 'function', {
		constant:
			/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
	}),
	delete Prism.languages.c.boolean;
!(function (s) {
	function a(e, s) {
		return e.replace(/<<(\d+)>>/g, function (e, n) {
			return '(?:' + s[+n] + ')';
		});
	}
	function t(e, n, s) {
		return RegExp(a(e, n), s || '');
	}
	function e(e, n) {
		for (var s = 0; s < n; s++)
			e = e.replace(/<<self>>/g, function () {
				return '(?:' + e + ')';
			});
		return e.replace(/<<self>>/g, '[^\\s\\S]');
	}
	var n =
			'bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void',
		r = 'class enum interface record struct',
		i =
			'add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)',
		o =
			'abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield';
	function l(e) {
		return '\\b(?:' + e.trim().replace(/ /g, '|') + ')\\b';
	}
	var d = l(r),
		p = RegExp(l(n + ' ' + r + ' ' + i + ' ' + o)),
		c = l(r + ' ' + i + ' ' + o),
		u = l(n + ' ' + r + ' ' + o),
		g = e('<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>', 2),
		b = e('\\((?:[^()]|<<self>>)*\\)', 2),
		h = '@?\\b[A-Za-z_]\\w*\\b',
		f = a('<<0>>(?:\\s*<<1>>)?', [h, g]),
		m = a('(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*', [c, f]),
		k = '\\[\\s*(?:,\\s*)*\\]',
		y = a('<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?', [m, k]),
		w = a('(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?', [
			a('\\(<<0>>+(?:,<<0>>+)+\\)', [
				a('[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>', [g, b, k]),
			]),
			m,
			k,
		]),
		v = { keyword: p, punctuation: /[<>()?,.:[\]]/ },
		x = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",
		$ = '"(?:\\\\.|[^\\\\"\r\n])*"';
	(s.languages.csharp = s.languages.extend('clike', {
		string: [
			{
				pattern: t('(^|[^$\\\\])<<0>>', ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),
				lookbehind: !0,
				greedy: !0,
			},
			{ pattern: t('(^|[^@$\\\\])<<0>>', [$]), lookbehind: !0, greedy: !0 },
		],
		'class-name': [
			{
				pattern: t('(\\busing\\s+static\\s+)<<0>>(?=\\s*;)', [m]),
				lookbehind: !0,
				inside: v,
			},
			{
				pattern: t('(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)', [h, w]),
				lookbehind: !0,
				inside: v,
			},
			{ pattern: t('(\\busing\\s+)<<0>>(?=\\s*=)', [h]), lookbehind: !0 },
			{ pattern: t('(\\b<<0>>\\s+)<<1>>', [d, f]), lookbehind: !0, inside: v },
			{
				pattern: t('(\\bcatch\\s*\\(\\s*)<<0>>', [m]),
				lookbehind: !0,
				inside: v,
			},
			{ pattern: t('(\\bwhere\\s+)<<0>>', [h]), lookbehind: !0 },
			{
				pattern: t('(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>', [y]),
				lookbehind: !0,
				inside: v,
			},
			{
				pattern: t(
					'\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))',
					[w, u, h]
				),
				inside: v,
			},
		],
		keyword: p,
		number:
			/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
		operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
		punctuation: /\?\.?|::|[{}[\];(),.:]/,
	})),
		s.languages.insertBefore('csharp', 'number', {
			range: { pattern: /\.\./, alias: 'operator' },
		}),
		s.languages.insertBefore('csharp', 'punctuation', {
			'named-parameter': {
				pattern: t('([(,]\\s*)<<0>>(?=\\s*:)', [h]),
				lookbehind: !0,
				alias: 'punctuation',
			},
		}),
		s.languages.insertBefore('csharp', 'class-name', {
			namespace: {
				pattern: t(
					'(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])',
					[h]
				),
				lookbehind: !0,
				inside: { punctuation: /\./ },
			},
			'type-expression': {
				pattern: t(
					'(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))',
					[b]
				),
				lookbehind: !0,
				alias: 'class-name',
				inside: v,
			},
			'return-type': {
				pattern: t(
					'<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))',
					[w, m]
				),
				inside: v,
				alias: 'class-name',
			},
			'constructor-invocation': {
				pattern: t('(\\bnew\\s+)<<0>>(?=\\s*[[({])', [w]),
				lookbehind: !0,
				inside: v,
				alias: 'class-name',
			},
			'generic-method': {
				pattern: t('<<0>>\\s*<<1>>(?=\\s*\\()', [h, g]),
				inside: {
					function: t('^<<0>>', [h]),
					generic: { pattern: RegExp(g), alias: 'class-name', inside: v },
				},
			},
			'type-list': {
				pattern: t(
					'\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))',
					[d, f, h, w, p.source, b, '\\bnew\\s*\\(\\s*\\)']
				),
				lookbehind: !0,
				inside: {
					'record-arguments': {
						pattern: t('(^(?!new\\s*\\()<<0>>\\s*)<<1>>', [f, b]),
						lookbehind: !0,
						greedy: !0,
						inside: s.languages.csharp,
					},
					keyword: p,
					'class-name': { pattern: RegExp(w), greedy: !0, inside: v },
					punctuation: /[,()]/,
				},
			},
			preprocessor: {
				pattern: /(^[\t ]*)#.*/m,
				lookbehind: !0,
				alias: 'property',
				inside: {
					directive: {
						pattern:
							/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
						lookbehind: !0,
						alias: 'keyword',
					},
				},
			},
		});
	var _ = $ + '|' + x,
		B = a('/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>', [_]),
		E = e(a('[^"\'/()]|<<0>>|\\(<<self>>*\\)', [B]), 2),
		R =
			'\\b(?:assembly|event|field|method|module|param|property|return|type)\\b',
		z = a('<<0>>(?:\\s*\\(<<1>>*\\))?', [m, E]);
	s.languages.insertBefore('csharp', 'class-name', {
		attribute: {
			pattern: t(
				'((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])',
				[R, z]
			),
			lookbehind: !0,
			greedy: !0,
			inside: {
				target: { pattern: t('^<<0>>(?=\\s*:)', [R]), alias: 'keyword' },
				'attribute-arguments': {
					pattern: t('\\(<<0>>*\\)', [E]),
					inside: s.languages.csharp,
				},
				'class-name': { pattern: RegExp(m), inside: { punctuation: /\./ } },
				punctuation: /[:,]/,
			},
		},
	});
	var S = ':[^}\r\n]+',
		j = e(a('[^"\'/()]|<<0>>|\\(<<self>>*\\)', [B]), 2),
		A = a('\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}', [j, S]),
		F = e(
			a('[^"\'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)', [
				_,
			]),
			2
		),
		P = a('\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}', [F, S]);
	function U(e, n) {
		return {
			interpolation: {
				pattern: t('((?:^|[^{])(?:\\{\\{)*)<<0>>', [e]),
				lookbehind: !0,
				inside: {
					'format-string': {
						pattern: t('(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)', [n, S]),
						lookbehind: !0,
						inside: { punctuation: /^:/ },
					},
					punctuation: /^\{|\}$/,
					expression: {
						pattern: /[\s\S]+/,
						alias: 'language-csharp',
						inside: s.languages.csharp,
					},
				},
			},
			string: /[\s\S]+/,
		};
	}
	s.languages.insertBefore('csharp', 'string', {
		'interpolation-string': [
			{
				pattern: t(
					'(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',
					[A]
				),
				lookbehind: !0,
				greedy: !0,
				inside: U(A, j),
			},
			{
				pattern: t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [P]),
				lookbehind: !0,
				greedy: !0,
				inside: U(P, F),
			},
		],
		char: { pattern: RegExp(x), greedy: !0 },
	}),
		(s.languages.dotnet = s.languages.cs = s.languages.csharp);
})(Prism);
!(function (e) {
	var t =
			/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
		n = '\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b'.replace(
			/<keyword>/g,
			function () {
				return t.source;
			}
		);
	(e.languages.cpp = e.languages.extend('c', {
		'class-name': [
			{
				pattern: RegExp(
					'(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+'.replace(
						/<keyword>/g,
						function () {
							return t.source;
						}
					)
				),
				lookbehind: !0,
			},
			/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
			/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
			/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
		],
		keyword: t,
		number: {
			pattern:
				/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
			greedy: !0,
		},
		operator:
			/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
		boolean: /\b(?:false|true)\b/,
	})),
		e.languages.insertBefore('cpp', 'string', {
			module: {
				pattern: RegExp(
					'(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' +
						'<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>'.replace(
							/<mod-name>/g,
							function () {
								return n;
							}
						) +
						')'
				),
				lookbehind: !0,
				greedy: !0,
				inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ },
			},
			'raw-string': {
				pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
				alias: 'string',
				greedy: !0,
			},
		}),
		e.languages.insertBefore('cpp', 'keyword', {
			'generic-function': {
				pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
				inside: {
					function: /^\w+/,
					generic: {
						pattern: /<[\s\S]+/,
						alias: 'class-name',
						inside: e.languages.cpp,
					},
				},
			},
		}),
		e.languages.insertBefore('cpp', 'operator', {
			'double-colon': { pattern: /::/, alias: 'punctuation' },
		}),
		e.languages.insertBefore('cpp', 'class-name', {
			'base-clause': {
				pattern:
					/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
				lookbehind: !0,
				greedy: !0,
				inside: e.languages.extend('cpp', {}),
			},
		}),
		e.languages.insertBefore(
			'inside',
			'double-colon',
			{ 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
			e.languages.cpp['base-clause']
		);
})(Prism);
Prism.languages.git = {
	comment: /^#.*/m,
	deleted: /^[-–].*/m,
	inserted: /^\+.*/m,
	string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
	command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/ } },
	coord: /^@@.*@@$/m,
	'commit-sha1': /^commit \w{40}$/m,
};
Prism.languages.glsl = Prism.languages.extend('c', {
	keyword:
		/\b(?:active|asm|atomic_uint|attribute|[ibdu]?vec[234]|bool|break|buffer|case|cast|centroid|class|coherent|common|const|continue|d?mat[234](?:x[234])?|default|discard|do|double|else|enum|extern|external|false|filter|fixed|flat|float|for|fvec[234]|goto|half|highp|hvec[234]|[iu]?sampler2DMS(?:Array)?|[iu]?sampler2DRect|[iu]?samplerBuffer|[iu]?samplerCube|[iu]?samplerCubeArray|[iu]?sampler[123]D|[iu]?sampler[12]DArray|[iu]?image2DMS(?:Array)?|[iu]?image2DRect|[iu]?imageBuffer|[iu]?imageCube|[iu]?imageCubeArray|[iu]?image[123]D|[iu]?image[12]DArray|if|in|inline|inout|input|int|interface|invariant|layout|long|lowp|mediump|namespace|noinline|noperspective|out|output|partition|patch|precise|precision|public|readonly|resource|restrict|return|sample|sampler[12]DArrayShadow|sampler[12]DShadow|sampler2DRectShadow|sampler3DRect|samplerCubeArrayShadow|samplerCubeShadow|shared|short|sizeof|smooth|static|struct|subroutine|superp|switch|template|this|true|typedef|uint|uniform|union|unsigned|using|varying|void|volatile|while|writeonly)\b/,
});
Prism.languages.hlsl = Prism.languages.extend('c', {
	'class-name': [
		Prism.languages.c['class-name'],
		/\b(?:AppendStructuredBuffer|BlendState|Buffer|ByteAddressBuffer|CompileShader|ComputeShader|ConsumeStructuredBuffer|DepthStencilState|DepthStencilView|DomainShader|GeometryShader|Hullshader|InputPatch|LineStream|OutputPatch|PixelShader|PointStream|RWBuffer|RWByteAddressBuffer|RWStructuredBuffer|RWTexture(?:1D|1DArray|2D|2DArray|3D)|RasterizerState|RenderTargetView|SamplerComparisonState|SamplerState|StructuredBuffer|Texture(?:1D|1DArray|2D|2DArray|2DMS|2DMSArray|3D|Cube|CubeArray)|TriangleStream|VertexShader)\b/,
	],
	keyword: [
		/\b(?:asm|asm_fragment|auto|break|case|catch|cbuffer|centroid|char|class|column_major|compile|compile_fragment|const|const_cast|continue|default|delete|discard|do|dynamic_cast|else|enum|explicit|export|extern|for|friend|fxgroup|goto|groupshared|if|in|inline|inout|interface|line|lineadj|linear|long|matrix|mutable|namespace|new|nointerpolation|noperspective|operator|out|packoffset|pass|pixelfragment|point|precise|private|protected|public|register|reinterpret_cast|return|row_major|sample|sampler|shared|short|signed|sizeof|snorm|stateblock|stateblock_state|static|static_cast|string|struct|switch|tbuffer|technique|technique10|technique11|template|texture|this|throw|triangle|triangleadj|try|typedef|typename|uniform|union|unorm|unsigned|using|vector|vertexfragment|virtual|void|volatile|while)\b/,
		/\b(?:bool|double|dword|float|half|int|min(?:10float|12int|16(?:float|int|uint))|uint)(?:[1-4](?:x[1-4])?)?\b/,
	],
	number:
		/(?:(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?|\b0x[\da-fA-F]+)[fFhHlLuU]?\b/,
	boolean: /\b(?:false|true)\b/,
});
!(function (t) {
	function a(t) {
		return RegExp('(^(?:' + t + '):[ \t]*(?![ \t]))[^]+', 'i');
	}
	t.languages.http = {
		'request-line': {
			pattern:
				/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
			inside: {
				method: { pattern: /^[A-Z]+\b/, alias: 'property' },
				'request-target': {
					pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
					lookbehind: !0,
					alias: 'url',
					inside: t.languages.uri,
				},
				'http-version': {
					pattern: /^(\s)HTTP\/[\d.]+/,
					lookbehind: !0,
					alias: 'property',
				},
			},
		},
		'response-status': {
			pattern: /^HTTP\/[\d.]+ \d+ .+/m,
			inside: {
				'http-version': { pattern: /^HTTP\/[\d.]+/, alias: 'property' },
				'status-code': {
					pattern: /^(\s)\d+(?=\s)/,
					lookbehind: !0,
					alias: 'number',
				},
				'reason-phrase': {
					pattern: /^(\s).+/,
					lookbehind: !0,
					alias: 'string',
				},
			},
		},
		header: {
			pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
			inside: {
				'header-value': [
					{
						pattern: a('Content-Security-Policy'),
						lookbehind: !0,
						alias: ['csp', 'languages-csp'],
						inside: t.languages.csp,
					},
					{
						pattern: a('Public-Key-Pins(?:-Report-Only)?'),
						lookbehind: !0,
						alias: ['hpkp', 'languages-hpkp'],
						inside: t.languages.hpkp,
					},
					{
						pattern: a('Strict-Transport-Security'),
						lookbehind: !0,
						alias: ['hsts', 'languages-hsts'],
						inside: t.languages.hsts,
					},
					{ pattern: a('[^:]+'), lookbehind: !0 },
				],
				'header-name': { pattern: /^[^:]+/, alias: 'keyword' },
				punctuation: /^:/,
			},
		},
	};
	var e,
		n,
		s,
		i = t.languages,
		p = {
			'application/javascript': i.javascript,
			'application/json': i.json || i.javascript,
			'application/xml': i.xml,
			'text/xml': i.xml,
			'text/html': i.html,
			'text/css': i.css,
			'text/plain': i.plain,
		},
		r = { 'application/json': !0, 'application/xml': !0 };
	for (var l in p)
		if (p[l]) {
			e = e || {};
			var o = r[l]
				? (void 0,
				  (s = (n = l).replace(/^[a-z]+\//, '')),
				  '(?:' + n + '|\\w+/(?:[\\w.-]+\\+)+' + s + '(?![+\\w.-]))')
				: l;
			e[l.replace(/\//g, '-')] = {
				pattern: RegExp(
					'(content-type:\\s*' +
						o +
						'(?:(?:\r\n?|\n)[\\w-].*)*(?:\r(?:\n|(?!\n))|\n))[^ \t\\w-][^]*',
					'i'
				),
				lookbehind: !0,
				inside: p[l],
			};
		}
	e && t.languages.insertBefore('http', 'header', e);
})(Prism);
Prism.languages.hsts = {
	directive: {
		pattern: /\b(?:includeSubDomains|max-age|preload)(?=[\s;=]|$)/i,
		alias: 'property',
	},
	operator: /=/,
	punctuation: /;/,
};
!(function (n) {
	(n.languages.ignore = {
		comment: /^#.*/m,
		entry: {
			pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
			alias: 'string',
			inside: {
				operator: /^!|\*\*?|\?/,
				regex: { pattern: /(^|[^\\])\[[^\[\]]*\]/, lookbehind: !0 },
				punctuation: /\//,
			},
		},
	}),
		(n.languages.gitignore = n.languages.ignore),
		(n.languages.hgignore = n.languages.ignore),
		(n.languages.npmignore = n.languages.ignore);
})(Prism);
!(function (e) {
	var t =
			/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
		n = '(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*',
		a = {
			pattern: RegExp(n + '[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b'),
			lookbehind: !0,
			inside: {
				namespace: {
					pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
					inside: { punctuation: /\./ },
				},
				punctuation: /\./,
			},
		};
	(e.languages.java = e.languages.extend('clike', {
		string: {
			pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
			lookbehind: !0,
			greedy: !0,
		},
		'class-name': [
			a,
			{
				pattern: RegExp(n + '[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])'),
				lookbehind: !0,
				inside: a.inside,
			},
		],
		keyword: t,
		function: [
			e.languages.clike.function,
			{ pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0 },
		],
		number:
			/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
		operator: {
			pattern:
				/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
			lookbehind: !0,
		},
	})),
		e.languages.insertBefore('java', 'string', {
			'triple-quoted-string': {
				pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
				greedy: !0,
				alias: 'string',
			},
			char: { pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: !0 },
		}),
		e.languages.insertBefore('java', 'class-name', {
			annotation: {
				pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
				lookbehind: !0,
				alias: 'punctuation',
			},
			generics: {
				pattern:
					/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
				inside: {
					'class-name': a,
					keyword: t,
					punctuation: /[<>(),.:]/,
					operator: /[?&|]/,
				},
			},
			namespace: {
				pattern: RegExp(
					'(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?'.replace(
						/<keyword>/g,
						function () {
							return t.source;
						}
					)
				),
				lookbehind: !0,
				inside: { punctuation: /\./ },
			},
		});
})(Prism);
!(function (h) {
	function v(e, n) {
		return '___' + e.toUpperCase() + n + '___';
	}
	Object.defineProperties((h.languages['markup-templating'] = {}), {
		buildPlaceholders: {
			value: function (a, r, e, o) {
				if (a.language === r) {
					var c = (a.tokenStack = []);
					(a.code = a.code.replace(e, function (e) {
						if ('function' == typeof o && !o(e)) return e;
						for (var n, t = c.length; -1 !== a.code.indexOf((n = v(r, t))); )
							++t;
						return (c[t] = e), n;
					})),
						(a.grammar = h.languages.markup);
				}
			},
		},
		tokenizePlaceholders: {
			value: function (p, k) {
				if (p.language === k && p.tokenStack) {
					p.grammar = h.languages[k];
					var m = 0,
						d = Object.keys(p.tokenStack);
					!(function e(n) {
						for (var t = 0; t < n.length && !(m >= d.length); t++) {
							var a = n[t];
							if (
								'string' == typeof a ||
								(a.content && 'string' == typeof a.content)
							) {
								var r = d[m],
									o = p.tokenStack[r],
									c = 'string' == typeof a ? a : a.content,
									i = v(k, r),
									u = c.indexOf(i);
								if (-1 < u) {
									++m;
									var g = c.substring(0, u),
										l = new h.Token(
											k,
											h.tokenize(o, p.grammar),
											'language-' + k,
											o
										),
										s = c.substring(u + i.length),
										f = [];
									g && f.push.apply(f, e([g])),
										f.push(l),
										s && f.push.apply(f, e([s])),
										'string' == typeof a
											? n.splice.apply(n, [t, 1].concat(f))
											: (a.content = f);
								}
							} else a.content && e(a.content);
						}
						return n;
					})(p.tokens);
				}
			},
		},
	});
})(Prism);
!(function (a) {
	var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
		t = [
			{ pattern: /\b(?:false|true)\b/i, alias: 'boolean' },
			{ pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i, greedy: !0, lookbehind: !0 },
			{
				pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
				greedy: !0,
				lookbehind: !0,
			},
			/\b(?:null)\b/i,
			/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
		],
		i =
			/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
		n =
			/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
		s = /[{}\[\](),:;]/;
	a.languages.php = {
		delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: 'important' },
		comment: e,
		variable: /\$+(?:\w+\b|(?=\{))/,
		package: {
			pattern:
				/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
			lookbehind: !0,
			inside: { punctuation: /\\/ },
		},
		'class-name-definition': {
			pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
			lookbehind: !0,
			alias: 'class-name',
		},
		'function-definition': {
			pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
			lookbehind: !0,
			alias: 'function',
		},
		keyword: [
			{
				pattern:
					/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
				alias: 'type-casting',
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern:
					/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
				alias: 'type-hint',
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern:
					/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string|void)\b/i,
				alias: 'return-type',
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern:
					/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
				alias: 'type-declaration',
				greedy: !0,
			},
			{
				pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
				alias: 'type-declaration',
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern: /\b(?:parent|self|static)(?=\s*::)/i,
				alias: 'static-context',
				greedy: !0,
			},
			{ pattern: /(\byield\s+)from\b/i, lookbehind: !0 },
			/\bclass\b/i,
			{
				pattern:
					/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
				lookbehind: !0,
			},
		],
		'argument-name': {
			pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
			lookbehind: !0,
		},
		'class-name': [
			{
				pattern:
					/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
				greedy: !0,
				lookbehind: !0,
			},
			{ pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i, greedy: !0, lookbehind: !0 },
			{ pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: !0 },
			{
				pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
				alias: 'class-name-fully-qualified',
				greedy: !0,
				lookbehind: !0,
				inside: { punctuation: /\\/ },
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
				alias: 'class-name-fully-qualified',
				greedy: !0,
				inside: { punctuation: /\\/ },
			},
			{
				pattern:
					/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
				alias: 'class-name-fully-qualified',
				greedy: !0,
				lookbehind: !0,
				inside: { punctuation: /\\/ },
			},
			{
				pattern: /\b[a-z_]\w*(?=\s*\$)/i,
				alias: 'type-declaration',
				greedy: !0,
			},
			{
				pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
				alias: ['class-name-fully-qualified', 'type-declaration'],
				greedy: !0,
				inside: { punctuation: /\\/ },
			},
			{ pattern: /\b[a-z_]\w*(?=\s*::)/i, alias: 'static-context', greedy: !0 },
			{
				pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
				alias: ['class-name-fully-qualified', 'static-context'],
				greedy: !0,
				inside: { punctuation: /\\/ },
			},
			{
				pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
				alias: 'type-hint',
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
				alias: ['class-name-fully-qualified', 'type-hint'],
				greedy: !0,
				lookbehind: !0,
				inside: { punctuation: /\\/ },
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
				alias: 'return-type',
				greedy: !0,
				lookbehind: !0,
			},
			{
				pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
				alias: ['class-name-fully-qualified', 'return-type'],
				greedy: !0,
				lookbehind: !0,
				inside: { punctuation: /\\/ },
			},
		],
		constant: t,
		function: {
			pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
			lookbehind: !0,
			inside: { punctuation: /\\/ },
		},
		property: { pattern: /(->\s*)\w+/, lookbehind: !0 },
		number: i,
		operator: n,
		punctuation: s,
	};
	var l = {
			pattern:
				/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
			lookbehind: !0,
			inside: a.languages.php,
		},
		r = [
			{
				pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
				alias: 'nowdoc-string',
				greedy: !0,
				inside: {
					delimiter: {
						pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
						alias: 'symbol',
						inside: { punctuation: /^<<<'?|[';]$/ },
					},
				},
			},
			{
				pattern:
					/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
				alias: 'heredoc-string',
				greedy: !0,
				inside: {
					delimiter: {
						pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
						alias: 'symbol',
						inside: { punctuation: /^<<<"?|[";]$/ },
					},
					interpolation: l,
				},
			},
			{
				pattern: /`(?:\\[\s\S]|[^\\`])*`/,
				alias: 'backtick-quoted-string',
				greedy: !0,
			},
			{
				pattern: /'(?:\\[\s\S]|[^\\'])*'/,
				alias: 'single-quoted-string',
				greedy: !0,
			},
			{
				pattern: /"(?:\\[\s\S]|[^\\"])*"/,
				alias: 'double-quoted-string',
				greedy: !0,
				inside: { interpolation: l },
			},
		];
	a.languages.insertBefore('php', 'variable', {
		string: r,
		attribute: {
			pattern:
				/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
			greedy: !0,
			inside: {
				'attribute-content': {
					pattern: /^(#\[)[\s\S]+(?=\]$)/,
					lookbehind: !0,
					inside: {
						comment: e,
						string: r,
						'attribute-class-name': [
							{
								pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
								alias: 'class-name',
								greedy: !0,
								lookbehind: !0,
							},
							{
								pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
								alias: ['class-name', 'class-name-fully-qualified'],
								greedy: !0,
								lookbehind: !0,
								inside: { punctuation: /\\/ },
							},
						],
						constant: t,
						number: i,
						operator: n,
						punctuation: s,
					},
				},
				delimiter: { pattern: /^#\[|\]$/, alias: 'punctuation' },
			},
		},
	}),
		a.hooks.add('before-tokenize', function (e) {
			if (/<\?/.test(e.code)) {
				a.languages['markup-templating'].buildPlaceholders(
					e,
					'php',
					/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g
				);
			}
		}),
		a.hooks.add('after-tokenize', function (e) {
			a.languages['markup-templating'].tokenizePlaceholders(e, 'php');
		});
})(Prism);
!(function (p) {
	var a = (p.languages.javadoclike = {
		parameter: {
			pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
			lookbehind: !0,
		},
		keyword: {
			pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
			lookbehind: !0,
		},
		punctuation: /[{}]/,
	});
	Object.defineProperty(a, 'addSupport', {
		value: function (a, e) {
			'string' == typeof a && (a = [a]),
				a.forEach(function (a) {
					!(function (a, e) {
						var n = 'doc-comment',
							t = p.languages[a];
						if (t) {
							var r = t[n];
							if (!r) {
								var o = {
									'doc-comment': {
										pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
										lookbehind: !0,
										alias: 'comment',
									},
								};
								r = (t = p.languages.insertBefore(a, 'comment', o))[n];
							}
							if (
								(r instanceof RegExp && (r = t[n] = { pattern: r }),
								Array.isArray(r))
							)
								for (var i = 0, s = r.length; i < s; i++)
									r[i] instanceof RegExp && (r[i] = { pattern: r[i] }), e(r[i]);
							else e(r);
						}
					})(a, function (a) {
						a.inside || (a.inside = {}), (a.inside.rest = e);
					});
				});
		},
	}),
		a.addSupport(['java', 'javascript', 'php'], a);
})(Prism);
!(function (a) {
	var e = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,
		n =
			'(?:\\b[a-zA-Z]\\w+\\s*\\.\\s*)*\\b[A-Z]\\w*(?:\\s*<mem>)?|<mem>'.replace(
				/<mem>/g,
				function () {
					return '#\\s*\\w+(?:\\s*\\([^()]*\\))?';
				}
			);
	(a.languages.javadoc = a.languages.extend('javadoclike', {})),
		a.languages.insertBefore('javadoc', 'keyword', {
			reference: {
				pattern: RegExp(
					'(@(?:exception|link|linkplain|see|throws|value)\\s+(?:\\*\\s*)?)(?:' +
						n +
						')'
				),
				lookbehind: !0,
				inside: {
					function: { pattern: /(#\s*)\w+(?=\s*\()/, lookbehind: !0 },
					field: { pattern: /(#\s*)\w+/, lookbehind: !0 },
					namespace: {
						pattern: /\b(?:[a-z]\w*\s*\.\s*)+/,
						inside: { punctuation: /\./ },
					},
					'class-name': /\b[A-Z]\w*/,
					keyword: a.languages.java.keyword,
					punctuation: /[#()[\],.]/,
				},
			},
			'class-name': {
				pattern: /(@param\s+)<[A-Z]\w*>/,
				lookbehind: !0,
				inside: { punctuation: /[.<>]/ },
			},
			'code-section': [
				{
					pattern:
						/(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
					lookbehind: !0,
					inside: {
						code: {
							pattern: e,
							lookbehind: !0,
							inside: a.languages.java,
							alias: 'language-java',
						},
					},
				},
				{
					pattern:
						/(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
					lookbehind: !0,
					inside: {
						line: {
							pattern: e,
							lookbehind: !0,
							inside: {
								tag: a.languages.markup.tag,
								entity: a.languages.markup.entity,
								code: {
									pattern: /.+/,
									inside: a.languages.java,
									alias: 'language-java',
								},
							},
						},
					},
				},
			],
			tag: a.languages.markup.tag,
			entity: a.languages.markup.entity,
		}),
		a.languages.javadoclike.addSupport('java', a.languages.javadoc);
})(Prism);
(Prism.languages.json = {
	property: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: !0,
		greedy: !0,
	},
	string: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: !0,
		greedy: !0,
	},
	comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
	number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	punctuation: /[{}[\],]/,
	operator: /:/,
	boolean: /\b(?:false|true)\b/,
	null: { pattern: /\bnull\b/, alias: 'keyword' },
}),
	(Prism.languages.webmanifest = Prism.languages.json);
!(function (n) {
	var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
	n.languages.json5 = n.languages.extend('json', {
		property: [
			{ pattern: RegExp(e.source + '(?=\\s*:)'), greedy: !0 },
			{
				pattern:
					/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
				alias: 'unquoted',
			},
		],
		string: { pattern: e, greedy: !0 },
		number:
			/[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/,
	});
})(Prism);
(Prism.languages.jsonp = Prism.languages.extend('json', {
	punctuation: /[{}[\]();,.]/,
})),
	Prism.languages.insertBefore('jsonp', 'punctuation', {
		function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/,
	});
!(function (u) {
	var e = u.languages.javascript['template-string'],
		n = e.pattern.source,
		a = e.inside.interpolation,
		i = a.inside['interpolation-punctuation'],
		r = a.pattern.source;
	function t(e, t) {
		if (u.languages[e])
			return {
				pattern: RegExp('((?:' + t + ')\\s*)' + n),
				lookbehind: !0,
				greedy: !0,
				inside: {
					'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
					'embedded-code': { pattern: /[\s\S]+/, alias: e },
				},
			};
	}
	function s(e, t, n) {
		var r = { code: e, grammar: t, language: n };
		return (
			u.hooks.run('before-tokenize', r),
			(r.tokens = u.tokenize(r.code, r.grammar)),
			u.hooks.run('after-tokenize', r),
			r.tokens
		);
	}
	function d(e) {
		var t = {};
		t['interpolation-punctuation'] = i;
		var n = u.tokenize(e, t);
		if (3 === n.length) {
			var r = [1, 1];
			r.push.apply(r, s(n[1], u.languages.javascript, 'javascript')),
				n.splice.apply(n, r);
		}
		return new u.Token('interpolation', n, a.alias, e);
	}
	function c(a, e, i) {
		var t = u.tokenize(a, {
				interpolation: { pattern: RegExp(r), lookbehind: !0 },
			}),
			f = 0,
			y = {},
			n = s(
				t
					.map(function (e) {
						if ('string' == typeof e) return e;
						for (
							var t, n = e.content;
							-1 !==
							a.indexOf(
								((r = f++), (t = '___' + i.toUpperCase() + '_' + r + '___'))
							);

						);
						return (y[t] = n), t;
						var r;
					})
					.join(''),
				e,
				i
			),
			v = Object.keys(y);
		return (
			(f = 0),
			(function e(t) {
				for (var n = 0; n < t.length; n++) {
					if (f >= v.length) return;
					var r = t[n];
					if ('string' == typeof r || 'string' == typeof r.content) {
						var a = v[f],
							i = 'string' == typeof r ? r : r.content,
							s = i.indexOf(a);
						if (-1 !== s) {
							++f;
							var o = i.substring(0, s),
								p = d(y[a]),
								l = i.substring(s + a.length),
								g = [];
							if ((o && g.push(o), g.push(p), l)) {
								var u = [l];
								e(u), g.push.apply(g, u);
							}
							'string' == typeof r
								? (t.splice.apply(t, [n, 1].concat(g)), (n += g.length - 1))
								: (r.content = g);
						}
					} else {
						var c = r.content;
						Array.isArray(c) ? e(c) : e([c]);
					}
				}
			})(n),
			new u.Token(i, n, 'language-' + i, a)
		);
	}
	u.languages.javascript['template-string'] = [
		t(
			'css',
			'\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)'
		),
		t('html', '\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?='),
		t('svg', '\\bsvg'),
		t('markdown', '\\b(?:markdown|md)'),
		t('graphql', '\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)'),
		t('sql', '\\bsql'),
		e,
	].filter(Boolean);
	var o = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
	function f(e) {
		return 'string' == typeof e
			? e
			: Array.isArray(e)
			? e.map(f).join('')
			: f(e.content);
	}
	u.hooks.add('after-tokenize', function (e) {
		e.language in o &&
			!(function e(t) {
				for (var n = 0, r = t.length; n < r; n++) {
					var a = t[n];
					if ('string' != typeof a) {
						var i = a.content;
						if (Array.isArray(i))
							if ('template-string' === a.type) {
								var s = i[1];
								if (
									3 === i.length &&
									'string' != typeof s &&
									'embedded-code' === s.type
								) {
									var o = f(s),
										p = s.alias,
										l = Array.isArray(p) ? p[0] : p,
										g = u.languages[l];
									if (!g) continue;
									i[1] = c(o, g, l);
								}
							} else e(i);
						else 'string' != typeof i && e([i]);
					}
				}
			})(e.tokens);
	});
})(Prism);
!(function (n) {
	(n.languages.kotlin = n.languages.extend('clike', {
		keyword: {
			pattern:
				/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
			lookbehind: !0,
		},
		function: [
			{ pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 },
			{
				pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
				lookbehind: !0,
				greedy: !0,
			},
		],
		number:
			/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
		operator:
			/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/,
	})),
		delete n.languages.kotlin['class-name'];
	var e = {
		'interpolation-punctuation': {
			pattern: /^\$\{?|\}$/,
			alias: 'punctuation',
		},
		expression: { pattern: /[\s\S]+/, inside: n.languages.kotlin },
	};
	n.languages.insertBefore('kotlin', 'string', {
		'string-literal': [
			{
				pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
				alias: 'multiline',
				inside: {
					interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: e },
					string: /[\s\S]+/,
				},
			},
			{
				pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
				alias: 'singleline',
				inside: {
					interpolation: {
						pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
						lookbehind: !0,
						inside: e,
					},
					string: /[\s\S]+/,
				},
			},
		],
		char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0 },
	}),
		delete n.languages.kotlin.string,
		n.languages.insertBefore('kotlin', 'keyword', {
			annotation: {
				pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
				alias: 'builtin',
			},
		}),
		n.languages.insertBefore('kotlin', 'function', {
			label: { pattern: /\b\w+@|@\w+\b/, alias: 'symbol' },
		}),
		(n.languages.kt = n.languages.kotlin),
		(n.languages.kts = n.languages.kotlin);
})(Prism);
!(function (s) {
	function n(n) {
		return (
			(n = n.replace(/<inner>/g, function () {
				return '(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))';
			})),
			RegExp('((?:^|[^\\\\])(?:\\\\{2})*)(?:' + n + ')')
		);
	}
	var e = '(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+',
		t = '\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))'.replace(
			/__/g,
			function () {
				return e;
			}
		),
		a =
			'\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)';
	(s.languages.markdown = s.languages.extend('markup', {})),
		s.languages.insertBefore('markdown', 'prolog', {
			'front-matter-block': {
				pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
				lookbehind: !0,
				greedy: !0,
				inside: {
					punctuation: /^---|---$/,
					'front-matter': {
						pattern: /\S+(?:\s+\S+)*/,
						alias: ['yaml', 'language-yaml'],
						inside: s.languages.yaml,
					},
				},
			},
			blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
			table: {
				pattern: RegExp('^' + t + a + '(?:' + t + ')*', 'm'),
				inside: {
					'table-data-rows': {
						pattern: RegExp('^(' + t + a + ')(?:' + t + ')*$'),
						lookbehind: !0,
						inside: {
							'table-data': {
								pattern: RegExp(e),
								inside: s.languages.markdown,
							},
							punctuation: /\|/,
						},
					},
					'table-line': {
						pattern: RegExp('^(' + t + ')' + a + '$'),
						lookbehind: !0,
						inside: { punctuation: /\||:?-{3,}:?/ },
					},
					'table-header-row': {
						pattern: RegExp('^' + t + '$'),
						inside: {
							'table-header': {
								pattern: RegExp(e),
								alias: 'important',
								inside: s.languages.markdown,
							},
							punctuation: /\|/,
						},
					},
				},
			},
			code: [
				{
					pattern:
						/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
					lookbehind: !0,
					alias: 'keyword',
				},
				{
					pattern: /^```[\s\S]*?^```$/m,
					greedy: !0,
					inside: {
						'code-block': {
							pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
							lookbehind: !0,
						},
						'code-language': { pattern: /^(```).+/, lookbehind: !0 },
						punctuation: /```/,
					},
				},
			],
			title: [
				{
					pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
					alias: 'important',
					inside: { punctuation: /==+$|--+$/ },
				},
				{
					pattern: /(^\s*)#.+/m,
					lookbehind: !0,
					alias: 'important',
					inside: { punctuation: /^#+|#+$/ },
				},
			],
			hr: {
				pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
				lookbehind: !0,
				alias: 'punctuation',
			},
			list: {
				pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
				lookbehind: !0,
				alias: 'punctuation',
			},
			'url-reference': {
				pattern:
					/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
				inside: {
					variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
					string:
						/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
					punctuation: /^[\[\]!:]|[<>]/,
				},
				alias: 'url',
			},
			bold: {
				pattern: n(
					'\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*'
				),
				lookbehind: !0,
				greedy: !0,
				inside: {
					content: {
						pattern: /(^..)[\s\S]+(?=..$)/,
						lookbehind: !0,
						inside: {},
					},
					punctuation: /\*\*|__/,
				},
			},
			italic: {
				pattern: n(
					'\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*'
				),
				lookbehind: !0,
				greedy: !0,
				inside: {
					content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
					punctuation: /[*_]/,
				},
			},
			strike: {
				pattern: n('(~~?)(?:(?!~)<inner>)+\\2'),
				lookbehind: !0,
				greedy: !0,
				inside: {
					content: {
						pattern: /(^~~?)[\s\S]+(?=\1$)/,
						lookbehind: !0,
						inside: {},
					},
					punctuation: /~~?/,
				},
			},
			'code-snippet': {
				pattern:
					/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
				lookbehind: !0,
				greedy: !0,
				alias: ['code', 'keyword'],
			},
			url: {
				pattern: n(
					'!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'
				),
				lookbehind: !0,
				greedy: !0,
				inside: {
					operator: /^!/,
					content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
					variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
					url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
					string: {
						pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
						lookbehind: !0,
					},
				},
			},
		}),
		['url', 'bold', 'italic', 'strike'].forEach(function (e) {
			['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (n) {
				e !== n &&
					(s.languages.markdown[e].inside.content.inside[n] =
						s.languages.markdown[n]);
			});
		}),
		s.hooks.add('after-tokenize', function (n) {
			('markdown' !== n.language && 'md' !== n.language) ||
				!(function n(e) {
					if (e && 'string' != typeof e)
						for (var t = 0, a = e.length; t < a; t++) {
							var r = e[t];
							if ('code' === r.type) {
								var i = r.content[1],
									o = r.content[3];
								if (
									i &&
									o &&
									'code-language' === i.type &&
									'code-block' === o.type &&
									'string' == typeof i.content
								) {
									var l = i.content
											.replace(/\b#/g, 'sharp')
											.replace(/\b\+\+/g, 'pp'),
										s =
											'language-' +
											(l = (/[a-z][\w-]*/i.exec(l) || [''])[0].toLowerCase());
									o.alias
										? 'string' == typeof o.alias
											? (o.alias = [o.alias, s])
											: o.alias.push(s)
										: (o.alias = [s]);
								}
							} else n(r.content);
						}
				})(n.tokens);
		}),
		s.hooks.add('wrap', function (n) {
			if ('code-block' === n.type) {
				for (var e = '', t = 0, a = n.classes.length; t < a; t++) {
					var r = n.classes[t],
						i = /language-(.+)/.exec(r);
					if (i) {
						e = i[1];
						break;
					}
				}
				var o = s.languages[e];
				if (o)
					n.content = s.highlight(
						(function (n) {
							var e = n.replace(d, '');
							return (e = e.replace(
								/&(\w{1,8}|#x?[\da-f]{1,8});/gi,
								function (n, e) {
									var t;
									if ('#' === (e = e.toLowerCase())[0])
										return (
											(t =
												'x' === e[1]
													? parseInt(e.slice(2), 16)
													: Number(e.slice(1))),
											u(t)
										);
									var a = p[e];
									return a || n;
								}
							));
						})(n.content),
						o,
						e
					);
				else if (e && 'none' !== e && s.plugins.autoloader) {
					var l =
						'md-' +
						new Date().valueOf() +
						'-' +
						Math.floor(1e16 * Math.random());
					(n.attributes.id = l),
						s.plugins.autoloader.loadLanguages(e, function () {
							var n = document.getElementById(l);
							n &&
								(n.innerHTML = s.highlight(n.textContent, s.languages[e], e));
						});
				}
			}
		});
	var d = RegExp(s.languages.markup.tag.pattern.source, 'gi'),
		p = { amp: '&', lt: '<', gt: '>', quot: '"' },
		u = String.fromCodePoint || String.fromCharCode;
	s.languages.md = s.languages.markdown;
})(Prism);
Prism.languages.insertBefore('php', 'variable', {
	this: { pattern: /\$this\b/, alias: 'keyword' },
	global:
		/\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,
	scope: {
		pattern: /\b[\w\\]+::/,
		inside: { keyword: /\b(?:parent|self|static)\b/, punctuation: /::|\\/ },
	},
});
!(function (e) {
	var i = (Prism.languages.powershell = {
		comment: [
			{ pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0 },
			{ pattern: /(^|[^`])#.*/, lookbehind: !0 },
		],
		string: [
			{ pattern: /"(?:`[\s\S]|[^`"])*"/, greedy: !0, inside: null },
			{ pattern: /'(?:[^']|'')*'/, greedy: !0 },
		],
		namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
		boolean: /\$(?:false|true)\b/i,
		variable: /\$\w+\b/,
		function: [
			/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
			/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i,
		],
		keyword:
			/\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
		operator: {
			pattern:
				/(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
			lookbehind: !0,
		},
		punctuation: /[|{}[\];(),.]/,
	});
	i.string[0].inside = {
		function: {
			pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
			lookbehind: !0,
			inside: i,
		},
		boolean: i.boolean,
		variable: i.variable,
	};
})();
!(function (e) {
	(e.languages.sass = e.languages.extend('css', {
		comment: {
			pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
			lookbehind: !0,
			greedy: !0,
		},
	})),
		e.languages.insertBefore('sass', 'atrule', {
			'atrule-line': {
				pattern: /^(?:[ \t]*)[@+=].+/m,
				greedy: !0,
				inside: { atrule: /(?:@[\w-]+|[+=])/ },
			},
		}),
		delete e.languages.sass.atrule;
	var r = /\$[-\w]+|#\{\$[-\w]+\}/,
		t = [
			/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
			{ pattern: /(\s)-(?=\s)/, lookbehind: !0 },
		];
	e.languages.insertBefore('sass', 'property', {
		'variable-line': {
			pattern: /^[ \t]*\$.+/m,
			greedy: !0,
			inside: { punctuation: /:/, variable: r, operator: t },
		},
		'property-line': {
			pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
			greedy: !0,
			inside: {
				property: [
					/[^:\s]+(?=\s*:)/,
					{ pattern: /(:)[^:\s]+/, lookbehind: !0 },
				],
				punctuation: /:/,
				variable: r,
				operator: t,
				important: e.languages.sass.important,
			},
		},
	}),
		delete e.languages.sass.property,
		delete e.languages.sass.important,
		e.languages.insertBefore('sass', 'punctuation', {
			selector: {
				pattern:
					/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
				lookbehind: !0,
				greedy: !0,
			},
		});
})(Prism);
(Prism.languages.scss = Prism.languages.extend('css', {
	comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
	atrule: {
		pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
		inside: { rule: /@[\w-]+/ },
	},
	url: /(?:[-a-z]+-)?url(?=\()/i,
	selector: {
		pattern:
			/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
		inside: {
			parent: { pattern: /&/, alias: 'important' },
			placeholder: /%[-\w]+/,
			variable: /\$[-\w]+|#\{\$[-\w]+\}/,
		},
	},
	property: {
		pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
		inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
	},
})),
	Prism.languages.insertBefore('scss', 'atrule', {
		keyword: [
			/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
			{ pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
		],
	}),
	Prism.languages.insertBefore('scss', 'important', {
		variable: /\$[-\w]+|#\{\$[-\w]+\}/,
	}),
	Prism.languages.insertBefore('scss', 'function', {
		'module-modifier': {
			pattern: /\b(?:as|hide|show|with)\b/i,
			alias: 'keyword',
		},
		placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
		statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
		boolean: /\b(?:false|true)\b/,
		null: { pattern: /\bnull\b/, alias: 'keyword' },
		operator: {
			pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
			lookbehind: !0,
		},
	}),
	(Prism.languages.scss.atrule.inside.rest = Prism.languages.scss);
!(function (s) {
	var n = [
		'"(?:\\\\[^]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|[^"\\\\`$])*"',
		"'[^']*'",
		"\\$'(?:[^'\\\\]|\\\\[^])*'",
		'<<-?\\s*(["\']?)(\\w+)\\1\\s[^]*?[\r\n]\\2',
	].join('|');
	(s.languages['shell-session'] = {
		command: {
			pattern: RegExp(
				'^(?:[^\\s@:$#%*!/\\\\]+@[^\r\n@:$#%*!/\\\\]+(?::[^\0-\\x1F$#%*?"<>:;|]+)?|[/~.][^\0-\\x1F$#%*?"<>@:;|]*)?[$#%](?=\\s)' +
					"(?:[^\\\\\r\n \t'\"<$]|[ \t](?:(?!#)|#.*$)|\\\\(?:[^\r]|\r\n?)|\\$(?!')|<(?!<)|<<str>>)+".replace(
						/<<str>>/g,
						function () {
							return n;
						}
					),
				'm'
			),
			greedy: !0,
			inside: {
				info: {
					pattern: /^[^#$%]+/,
					alias: 'punctuation',
					inside: {
						user: /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,
						punctuation: /:/,
						path: /[\s\S]+/,
					},
				},
				bash: {
					pattern: /(^[$#%]\s*)\S[\s\S]*/,
					lookbehind: !0,
					alias: 'language-bash',
					inside: s.languages.bash,
				},
				'shell-symbol': { pattern: /^[$#%]/, alias: 'important' },
			},
		},
		output: /.(?:.*(?:[\r\n]|.$))*/,
	}),
		(s.languages['sh-session'] = s.languages.shellsession =
			s.languages['shell-session']);
})(Prism);
Prism.languages.sql = {
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
		lookbehind: !0,
	},
	variable: [
		{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
		/@[\w.$]+/,
	],
	string: {
		pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
		greedy: !0,
		lookbehind: !0,
	},
	identifier: {
		pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
		greedy: !0,
		lookbehind: !0,
		inside: { punctuation: /^`|`$/ },
	},
	function:
		/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
	keyword:
		/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
	boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
	number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
	operator:
		/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
	punctuation: /[;[\]()`,.]/,
};
(Prism.languages.swift = {
	comment: {
		pattern:
			/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
		lookbehind: !0,
		greedy: !0,
	},
	'string-literal': [
		{
			pattern: RegExp(
				'(^|[^"#])(?:"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^(])|[^\\\\\r\n"])*"|"""(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\"]|"(?!""))*""")(?!["#])'
			),
			lookbehind: !0,
			greedy: !0,
			inside: {
				interpolation: {
					pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
					lookbehind: !0,
					inside: null,
				},
				'interpolation-punctuation': {
					pattern: /^\)|\\\($/,
					alias: 'punctuation',
				},
				punctuation: /\\(?=[\r\n])/,
				string: /[\s\S]+/,
			},
		},
		{
			pattern: RegExp(
				'(^|[^"#])(#+)(?:"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^#])|[^\\\\\r\n])*?"|"""(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?""")\\2'
			),
			lookbehind: !0,
			greedy: !0,
			inside: {
				interpolation: {
					pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
					lookbehind: !0,
					inside: null,
				},
				'interpolation-punctuation': {
					pattern: /^\)|\\#+\($/,
					alias: 'punctuation',
				},
				string: /[\s\S]+/,
			},
		},
	],
	directive: {
		pattern: RegExp(
			'#(?:(?:elseif|if)\\b(?:[ \t]*(?:![ \t]*)?(?:\\b\\w+\\b(?:[ \t]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ \t]*(?:&&|\\|\\|))?)+|(?:else|endif)\\b)'
		),
		alias: 'property',
		inside: {
			'directive-name': /^#\w+/,
			boolean: /\b(?:false|true)\b/,
			number: /\b\d+(?:\.\d+)*\b/,
			operator: /!|&&|\|\||[<>]=?/,
			punctuation: /[(),]/,
		},
	},
	literal: {
		pattern:
			/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
		alias: 'constant',
	},
	'other-directive': { pattern: /#\w+\b/, alias: 'property' },
	attribute: { pattern: /@\w+/, alias: 'atrule' },
	'function-definition': {
		pattern: /(\bfunc\s+)\w+/,
		lookbehind: !0,
		alias: 'function',
	},
	label: {
		pattern:
			/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
		lookbehind: !0,
		alias: 'important',
	},
	keyword:
		/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
	boolean: /\b(?:false|true)\b/,
	nil: { pattern: /\bnil\b/, alias: 'constant' },
	'short-argument': /\$\d+\b/,
	omit: { pattern: /\b_\b/, alias: 'keyword' },
	number:
		/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
	'class-name': /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
	function: /\b[a-z_]\w*(?=\s*\()/i,
	constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
	operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
	punctuation: /[{}[\]();,.:\\]/,
}),
	Prism.languages.swift['string-literal'].forEach(function (e) {
		e.inside.interpolation.inside = Prism.languages.swift;
	});
(Prism.languages.twig = {
	comment: /^\{#[\s\S]*?#\}$/,
	'tag-name': { pattern: /(^\{%-?\s*)\w+/, lookbehind: !0, alias: 'keyword' },
	delimiter: { pattern: /^\{[{%]-?|-?[%}]\}$/, alias: 'punctuation' },
	string: {
		pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
		inside: { punctuation: /^['"]|['"]$/ },
	},
	keyword: /\b(?:even|if|odd)\b/,
	boolean: /\b(?:false|null|true)\b/,
	number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
	operator: [
		{
			pattern:
				/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
			lookbehind: !0,
		},
		/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/,
	],
	punctuation: /[()\[\]{}:.,]/,
}),
	Prism.hooks.add('before-tokenize', function (e) {
		if ('twig' === e.language) {
			Prism.languages['markup-templating'].buildPlaceholders(
				e,
				'twig',
				/\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g
			);
		}
	}),
	Prism.hooks.add('after-tokenize', function (e) {
		Prism.languages['markup-templating'].tokenizePlaceholders(e, 'twig');
	});
!(function (e) {
	(e.languages.typescript = e.languages.extend('javascript', {
		'class-name': {
			pattern:
				/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
			lookbehind: !0,
			greedy: !0,
			inside: null,
		},
		builtin:
			/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
	})),
		e.languages.typescript.keyword.push(
			/\b(?:abstract|declare|is|keyof|readonly|require)\b/,
			/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
			/\btype\b(?=\s*(?:[\{*]|$))/
		),
		delete e.languages.typescript.parameter,
		delete e.languages.typescript['literal-property'];
	var s = e.languages.extend('typescript', {});
	delete s['class-name'],
		(e.languages.typescript['class-name'].inside = s),
		e.languages.insertBefore('typescript', 'function', {
			decorator: {
				pattern: /@[$\w\xA0-\uFFFF]+/,
				inside: {
					at: { pattern: /^@/, alias: 'operator' },
					function: /^[\s\S]+/,
				},
			},
			'generic-function': {
				pattern:
					/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
				greedy: !0,
				inside: {
					function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
					generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: s },
				},
			},
		}),
		(e.languages.ts = e.languages.typescript);
})(Prism);
(Prism.languages['visual-basic'] = {
	comment: {
		pattern: /(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,
		inside: { keyword: /^REM/i },
	},
	directive: {
		pattern:
			/#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:\b_[ \t]*(?:\r\n?|\n)|.)+/i,
		alias: 'property',
		greedy: !0,
	},
	string: { pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i, greedy: !0 },
	date: {
		pattern:
			/#[ \t]*(?:\d+([/-])\d+\1\d+(?:[ \t]+(?:\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?))?|\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?)[ \t]*#/i,
		alias: 'number',
	},
	number:
		/(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:[FRD]|U?[ILS])?/i,
	boolean: /\b(?:False|Nothing|True)\b/i,
	keyword:
		/\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Until|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,
	operator: /[+\-*/\\^<=>&#@$%!]|\b_(?=[ \t]*[\r\n])/,
	punctuation: /[{}().,:?]/,
}),
	(Prism.languages.vb = Prism.languages['visual-basic']),
	(Prism.languages.vba = Prism.languages['visual-basic']);
Prism.languages.wasm = {
	comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
	string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
	keyword: [
		{ pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
		{
			pattern:
				/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
			inside: { punctuation: /\./ },
		},
		/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
	],
	variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
	number:
		/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
	punctuation: /[()]/,
};
!(function (e) {
	var n = /[*&][^\s[\]{},]+/,
		r =
			/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
		t =
			'(?:' +
			r.source +
			'(?:[ \t]+' +
			n.source +
			')?|' +
			n.source +
			'(?:[ \t]+' +
			r.source +
			')?)',
		a =
			'(?:[^\\s\\x00-\\x08\\x0e-\\x1f!"#%&\'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*'.replace(
				/<PLAIN>/g,
				function () {
					return '[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]';
				}
			),
		d = '"(?:[^"\\\\\r\n]|\\\\.)*"|\'(?:[^\'\\\\\r\n]|\\\\.)*\'';
	function o(e, n) {
		n = (n || '').replace(/m/g, '') + 'm';
		var r =
			'([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))'
				.replace(/<<prop>>/g, function () {
					return t;
				})
				.replace(/<<value>>/g, function () {
					return e;
				});
		return RegExp(r, n);
	}
	(e.languages.yaml = {
		scalar: {
			pattern: RegExp(
				'([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)'.replace(
					/<<prop>>/g,
					function () {
						return t;
					}
				)
			),
			lookbehind: !0,
			alias: 'string',
		},
		comment: /#.*/,
		key: {
			pattern: RegExp(
				'((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)'
					.replace(/<<prop>>/g, function () {
						return t;
					})
					.replace(/<<key>>/g, function () {
						return '(?:' + a + '|' + d + ')';
					})
			),
			lookbehind: !0,
			greedy: !0,
			alias: 'atrule',
		},
		directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
		datetime: {
			pattern: o(
				'\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?'
			),
			lookbehind: !0,
			alias: 'number',
		},
		boolean: {
			pattern: o('false|true', 'i'),
			lookbehind: !0,
			alias: 'important',
		},
		null: { pattern: o('null|~', 'i'), lookbehind: !0, alias: 'important' },
		string: { pattern: o(d), lookbehind: !0, greedy: !0 },
		number: {
			pattern: o(
				'[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)',
				'i'
			),
			lookbehind: !0,
		},
		tag: r,
		important: n,
		punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
	}),
		(e.languages.yml = e.languages.yaml);
})(Prism);
!(function () {
	if (
		'undefined' != typeof Prism &&
		'undefined' != typeof document &&
		document.querySelector
	) {
		var t,
			o = 'line-numbers',
			s = 'linkable-line-numbers',
			l = function () {
				if (void 0 === t) {
					var e = document.createElement('div');
					(e.style.fontSize = '13px'),
						(e.style.lineHeight = '1.5'),
						(e.style.padding = '0'),
						(e.style.border = '0'),
						(e.innerHTML = '&nbsp;<br />&nbsp;'),
						document.body.appendChild(e),
						(t = 38 === e.offsetHeight),
						document.body.removeChild(e);
				}
				return t;
			},
			a = !0;
		Prism.plugins.lineHighlight = {
			highlightLines: function (u, e, c) {
				var t = (e =
						'string' == typeof e ? e : u.getAttribute('data-line') || '')
						.replace(/\s+/g, '')
						.split(',')
						.filter(Boolean),
					d = +u.getAttribute('data-line-offset') || 0,
					h = (l() ? parseInt : parseFloat)(getComputedStyle(u).lineHeight),
					f = Prism.util.isActive(u, o),
					i = u.querySelector('code'),
					p = f ? u : i || u,
					g = [],
					m =
						i && p != i
							? (function (e, t) {
									var i = getComputedStyle(e),
										n = getComputedStyle(t);
									function r(e) {
										return +e.substr(0, e.length - 2);
									}
									return (
										t.offsetTop +
										r(n.borderTopWidth) +
										r(n.paddingTop) -
										r(i.paddingTop)
									);
							  })(u, i)
							: 0;
				t.forEach(function (e) {
					var t = e.split('-'),
						i = +t[0],
						n = +t[1] || i,
						r =
							u.querySelector('.line-highlight[data-range="' + e + '"]') ||
							document.createElement('div');
					if (
						(g.push(function () {
							r.setAttribute('aria-hidden', 'true'),
								r.setAttribute('data-range', e),
								(r.className = (c || '') + ' line-highlight');
						}),
						f && Prism.plugins.lineNumbers)
					) {
						var o = Prism.plugins.lineNumbers.getLine(u, i),
							s = Prism.plugins.lineNumbers.getLine(u, n);
						if (o) {
							var l = o.offsetTop + m + 'px';
							g.push(function () {
								r.style.top = l;
							});
						}
						if (s) {
							var a = s.offsetTop - o.offsetTop + s.offsetHeight + 'px';
							g.push(function () {
								r.style.height = a;
							});
						}
					} else
						g.push(function () {
							r.setAttribute('data-start', String(i)),
								i < n && r.setAttribute('data-end', String(n)),
								(r.style.top = (i - d - 1) * h + m + 'px'),
								(r.textContent = new Array(n - i + 2).join(' \n'));
						});
					g.push(function () {
						r.style.width = u.scrollWidth + 'px';
					}),
						g.push(function () {
							p.appendChild(r);
						});
				});
				var n = u.id;
				if (f && Prism.util.isActive(u, s) && n) {
					y(u, s) ||
						g.push(function () {
							u.classList.add(s);
						});
					var r = parseInt(u.getAttribute('data-start') || '1');
					v('.line-numbers-rows > span', u).forEach(function (e, t) {
						var i = t + r;
						e.onclick = function () {
							var e = n + '.' + i;
							(a = !1),
								(location.hash = e),
								setTimeout(function () {
									a = !0;
								}, 1);
						};
					});
				}
				return function () {
					g.forEach(b);
				};
			},
		};
		var u = 0;
		Prism.hooks.add('before-sanity-check', function (e) {
			var t = e.element.parentElement;
			if (c(t)) {
				var i = 0;
				v('.line-highlight', t).forEach(function (e) {
					(i += e.textContent.length), e.parentNode.removeChild(e);
				}),
					i &&
						/^(?: \n)+$/.test(e.code.slice(-i)) &&
						(e.code = e.code.slice(0, -i));
			}
		}),
			Prism.hooks.add('complete', function e(t) {
				var i = t.element.parentElement;
				if (c(i)) {
					clearTimeout(u);
					var n = Prism.plugins.lineNumbers,
						r = t.plugins && t.plugins.lineNumbers;
					if (y(i, o) && n && !r) Prism.hooks.add('line-numbers', e);
					else
						Prism.plugins.lineHighlight.highlightLines(i)(),
							(u = setTimeout(d, 1));
				}
			}),
			window.addEventListener('hashchange', d),
			window.addEventListener('resize', function () {
				v('pre')
					.filter(c)
					.map(function (e) {
						return Prism.plugins.lineHighlight.highlightLines(e);
					})
					.forEach(b);
			});
	}
	function v(e, t) {
		return Array.prototype.slice.call((t || document).querySelectorAll(e));
	}
	function y(e, t) {
		return e.classList.contains(t);
	}
	function b(e) {
		e();
	}
	function c(e) {
		return (
			!(!e || !/pre/i.test(e.nodeName)) &&
			(!!e.hasAttribute('data-line') || !(!e.id || !Prism.util.isActive(e, s)))
		);
	}
	function d() {
		var e = location.hash.slice(1);
		v('.temporary.line-highlight').forEach(function (e) {
			e.parentNode.removeChild(e);
		});
		var t = (e.match(/\.([\d,-]+)$/) || [, ''])[1];
		if (t && !document.getElementById(e)) {
			var i = e.slice(0, e.lastIndexOf('.')),
				n = document.getElementById(i);
			if (n)
				n.hasAttribute('data-line') || n.setAttribute('data-line', ''),
					Prism.plugins.lineHighlight.highlightLines(n, t, 'temporary ')(),
					a &&
						document
							.querySelector('.temporary.line-highlight')
							.scrollIntoView();
		}
	}
})();
!(function () {
	if ('undefined' != typeof Prism && 'undefined' != typeof document) {
		var o = 'line-numbers',
			a = /\n(?!$)/g,
			e = (Prism.plugins.lineNumbers = {
				getLine: function (e, n) {
					if ('PRE' === e.tagName && e.classList.contains(o)) {
						var t = e.querySelector('.line-numbers-rows');
						if (t) {
							var i = parseInt(e.getAttribute('data-start'), 10) || 1,
								r = i + (t.children.length - 1);
							n < i && (n = i), r < n && (n = r);
							var s = n - i;
							return t.children[s];
						}
					}
				},
				resize: function (e) {
					u([e]);
				},
				assumeViewportIndependence: !0,
			}),
			n = void 0;
		window.addEventListener('resize', function () {
			(e.assumeViewportIndependence && n === window.innerWidth) ||
				((n = window.innerWidth),
				u(Array.prototype.slice.call(document.querySelectorAll('pre.' + o))));
		}),
			Prism.hooks.add('complete', function (e) {
				if (e.code) {
					var n = e.element,
						t = n.parentNode;
					if (
						t &&
						/pre/i.test(t.nodeName) &&
						!n.querySelector('.line-numbers-rows') &&
						Prism.util.isActive(n, o)
					) {
						n.classList.remove(o), t.classList.add(o);
						var i,
							r = e.code.match(a),
							s = r ? r.length + 1 : 1,
							l = new Array(s + 1).join('<span></span>');
						(i = document.createElement('span')).setAttribute(
							'aria-hidden',
							'true'
						),
							(i.className = 'line-numbers-rows'),
							(i.innerHTML = l),
							t.hasAttribute('data-start') &&
								(t.style.counterReset =
									'linenumber ' +
									(parseInt(t.getAttribute('data-start'), 10) - 1)),
							e.element.appendChild(i),
							u([t]),
							Prism.hooks.run('line-numbers', e);
					}
				}
			}),
			Prism.hooks.add('line-numbers', function (e) {
				(e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
			});
	}
	function u(e) {
		if (
			0 !=
			(e = e.filter(function (e) {
				var n = (function (e) {
					return e
						? window.getComputedStyle
							? getComputedStyle(e)
							: e.currentStyle || null
						: null;
				})(e)['white-space'];
				return 'pre-wrap' === n || 'pre-line' === n;
			})).length
		) {
			var n = e
				.map(function (e) {
					var n = e.querySelector('code'),
						t = e.querySelector('.line-numbers-rows');
					if (n && t) {
						var i = e.querySelector('.line-numbers-sizer'),
							r = n.textContent.split(a);
						i ||
							(((i = document.createElement('span')).className =
								'line-numbers-sizer'),
							n.appendChild(i)),
							(i.innerHTML = '0'),
							(i.style.display = 'block');
						var s = i.getBoundingClientRect().height;
						return (
							(i.innerHTML = ''),
							{
								element: e,
								lines: r,
								lineHeights: [],
								oneLinerHeight: s,
								sizer: i,
							}
						);
					}
				})
				.filter(Boolean);
			n.forEach(function (e) {
				var i = e.sizer,
					n = e.lines,
					r = e.lineHeights,
					s = e.oneLinerHeight;
				(r[n.length - 1] = void 0),
					n.forEach(function (e, n) {
						if (e && 1 < e.length) {
							var t = i.appendChild(document.createElement('span'));
							(t.style.display = 'block'), (t.textContent = e);
						} else r[n] = s;
					});
			}),
				n.forEach(function (e) {
					for (
						var n = e.sizer, t = e.lineHeights, i = 0, r = 0;
						r < t.length;
						r++
					)
						void 0 === t[r] &&
							(t[r] = n.children[i++].getBoundingClientRect().height);
				}),
				n.forEach(function (e) {
					var n = e.sizer,
						t = e.element.querySelector('.line-numbers-rows');
					(n.style.display = 'none'),
						(n.innerHTML = ''),
						e.lineHeights.forEach(function (e, n) {
							t.children[n].style.height = e + 'px';
						});
				});
		}
	}
})();
!(function () {
	if ('undefined' != typeof Prism) {
		var i = { tab: /\t/, crlf: /\r\n/, lf: /\n/, cr: /\r/, space: / / };
		Prism.hooks.add('before-highlight', function (r) {
			s(r.grammar);
		});
	}
	function f(r, e) {
		var i = r[e];
		switch (Prism.util.type(i)) {
			case 'RegExp':
				var a = {};
				(r[e] = { pattern: i, inside: a }), s(a);
				break;
			case 'Array':
				for (var n = 0, t = i.length; n < t; n++) f(i, n);
				break;
			default:
				s((a = i.inside || (i.inside = {})));
		}
	}
	function s(r) {
		if (r && !r.tab) {
			for (var e in i) i.hasOwnProperty(e) && (r[e] = i[e]);
			for (var e in r)
				r.hasOwnProperty(e) && !i[e] && ('rest' === e ? s(r.rest) : f(r, e));
		}
	}
})();
!(function () {
	if ('undefined' != typeof Prism) {
		var a,
			t,
			e = '';
		(Prism.plugins.customClass = {
			add: function (n) {
				a = n;
			},
			map: function (s) {
				t =
					'function' == typeof s
						? s
						: function (n) {
								return s[n] || n;
						  };
			},
			prefix: function (n) {
				e = n || '';
			},
			apply: u,
		}),
			Prism.hooks.add('wrap', function (s) {
				if (a) {
					var n = a({ content: s.content, type: s.type, language: s.language });
					Array.isArray(n)
						? s.classes.push.apply(s.classes, n)
						: n && s.classes.push(n);
				}
				(t || e) &&
					(s.classes = s.classes.map(function (n) {
						return u(n, s.language);
					}));
			});
	}
	function u(n, s) {
		return e + (t ? t(n, s) : n);
	}
})();
!(function () {
	if ('undefined' != typeof Prism && 'undefined' != typeof document) {
		var i = [],
			l = {},
			d = function () {};
		Prism.plugins.toolbar = {};
		var e = (Prism.plugins.toolbar.registerButton = function (e, n) {
				var t;
				(t =
					'function' == typeof n
						? n
						: function (e) {
								var t;
								return (
									'function' == typeof n.onClick
										? (((t = document.createElement('button')).type = 'button'),
										  t.addEventListener('click', function () {
												n.onClick.call(this, e);
										  }))
										: 'string' == typeof n.url
										? ((t = document.createElement('a')).href = n.url)
										: (t = document.createElement('span')),
									n.className && t.classList.add(n.className),
									(t.textContent = n.text),
									t
								);
						  }),
					e in l
						? console.warn(
								'There is a button with the key "' + e + '" registered already.'
						  )
						: i.push((l[e] = t));
			}),
			t = (Prism.plugins.toolbar.hook = function (a) {
				var e = a.element.parentNode;
				if (
					e &&
					/pre/i.test(e.nodeName) &&
					!e.parentNode.classList.contains('code-toolbar')
				) {
					var t = document.createElement('div');
					t.classList.add('code-toolbar'),
						e.parentNode.insertBefore(t, e),
						t.appendChild(e);
					var r = document.createElement('div');
					r.classList.add('toolbar');
					var n = i,
						o = (function (e) {
							for (; e; ) {
								var t = e.getAttribute('data-toolbar-order');
								if (null != t)
									return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
								e = e.parentElement;
							}
						})(a.element);
					o &&
						(n = o.map(function (e) {
							return l[e] || d;
						})),
						n.forEach(function (e) {
							var t = e(a);
							if (t) {
								var n = document.createElement('div');
								n.classList.add('toolbar-item'),
									n.appendChild(t),
									r.appendChild(n);
							}
						}),
						t.appendChild(r);
				}
			});
		e('label', function (e) {
			var t = e.element.parentNode;
			if (t && /pre/i.test(t.nodeName) && t.hasAttribute('data-label')) {
				var n,
					a,
					r = t.getAttribute('data-label');
				try {
					a = document.querySelector('template#' + r);
				} catch (e) {}
				return (
					a
						? (n = a.content)
						: (t.hasAttribute('data-url')
								? ((n = document.createElement('a')).href =
										t.getAttribute('data-url'))
								: (n = document.createElement('span')),
						  (n.textContent = r)),
					n
				);
			}
		}),
			Prism.hooks.add('complete', t);
	}
})();
!(function () {
	if ('undefined' != typeof Prism && 'undefined' != typeof document)
		if (Prism.plugins.toolbar) {
			var i = {
				none: 'Plain text',
				plain: 'Plain text',
				plaintext: 'Plain text',
				text: 'Plain text',
				txt: 'Plain text',
				html: 'HTML',
				xml: 'XML',
				svg: 'SVG',
				mathml: 'MathML',
				ssml: 'SSML',
				rss: 'RSS',
				css: 'CSS',
				clike: 'C-like',
				js: 'JavaScript',
				abap: 'ABAP',
				abnf: 'ABNF',
				al: 'AL',
				antlr4: 'ANTLR4',
				g4: 'ANTLR4',
				apacheconf: 'Apache Configuration',
				apl: 'APL',
				aql: 'AQL',
				ino: 'Arduino',
				arff: 'ARFF',
				asciidoc: 'AsciiDoc',
				adoc: 'AsciiDoc',
				aspnet: 'ASP.NET (C#)',
				asm6502: '6502 Assembly',
				asmatmel: 'Atmel AVR Assembly',
				autohotkey: 'AutoHotkey',
				autoit: 'AutoIt',
				avisynth: 'AviSynth',
				avs: 'AviSynth',
				'avro-idl': 'Avro IDL',
				avdl: 'Avro IDL',
				basic: 'BASIC',
				bbcode: 'BBcode',
				bnf: 'BNF',
				rbnf: 'RBNF',
				bsl: 'BSL (1C:Enterprise)',
				oscript: 'OneScript',
				csharp: 'C#',
				cs: 'C#',
				dotnet: 'C#',
				cpp: 'C++',
				cfscript: 'CFScript',
				cfc: 'CFScript',
				cil: 'CIL',
				cmake: 'CMake',
				cobol: 'COBOL',
				coffee: 'CoffeeScript',
				conc: 'Concurnas',
				csp: 'Content-Security-Policy',
				'css-extras': 'CSS Extras',
				csv: 'CSV',
				dataweave: 'DataWeave',
				dax: 'DAX',
				django: 'Django/Jinja2',
				jinja2: 'Django/Jinja2',
				'dns-zone-file': 'DNS zone file',
				'dns-zone': 'DNS zone file',
				dockerfile: 'Docker',
				dot: 'DOT (Graphviz)',
				gv: 'DOT (Graphviz)',
				ebnf: 'EBNF',
				editorconfig: 'EditorConfig',
				ejs: 'EJS',
				etlua: 'Embedded Lua templating',
				erb: 'ERB',
				'excel-formula': 'Excel Formula',
				xlsx: 'Excel Formula',
				xls: 'Excel Formula',
				fsharp: 'F#',
				'firestore-security-rules': 'Firestore security rules',
				ftl: 'FreeMarker Template Language',
				gml: 'GameMaker Language',
				gamemakerlanguage: 'GameMaker Language',
				gap: 'GAP (CAS)',
				gcode: 'G-code',
				gdscript: 'GDScript',
				gedcom: 'GEDCOM',
				glsl: 'GLSL',
				gn: 'GN',
				gni: 'GN',
				'go-module': 'Go module',
				'go-mod': 'Go module',
				graphql: 'GraphQL',
				hbs: 'Handlebars',
				hs: 'Haskell',
				hcl: 'HCL',
				hlsl: 'HLSL',
				http: 'HTTP',
				hpkp: 'HTTP Public-Key-Pins',
				hsts: 'HTTP Strict-Transport-Security',
				ichigojam: 'IchigoJam',
				'icu-message-format': 'ICU Message Format',
				idr: 'Idris',
				ignore: '.ignore',
				gitignore: '.gitignore',
				hgignore: '.hgignore',
				npmignore: '.npmignore',
				inform7: 'Inform 7',
				javadoc: 'JavaDoc',
				javadoclike: 'JavaDoc-like',
				javastacktrace: 'Java stack trace',
				jq: 'JQ',
				jsdoc: 'JSDoc',
				'js-extras': 'JS Extras',
				json: 'JSON',
				webmanifest: 'Web App Manifest',
				json5: 'JSON5',
				jsonp: 'JSONP',
				jsstacktrace: 'JS stack trace',
				'js-templates': 'JS Templates',
				keepalived: 'Keepalived Configure',
				kts: 'Kotlin Script',
				kt: 'Kotlin',
				kumir: 'KuMir (КуМир)',
				kum: 'KuMir (КуМир)',
				latex: 'LaTeX',
				tex: 'TeX',
				context: 'ConTeXt',
				lilypond: 'LilyPond',
				ly: 'LilyPond',
				emacs: 'Lisp',
				elisp: 'Lisp',
				'emacs-lisp': 'Lisp',
				llvm: 'LLVM IR',
				log: 'Log file',
				lolcode: 'LOLCODE',
				magma: 'Magma (CAS)',
				md: 'Markdown',
				'markup-templating': 'Markup templating',
				matlab: 'MATLAB',
				maxscript: 'MAXScript',
				mel: 'MEL',
				mongodb: 'MongoDB',
				moon: 'MoonScript',
				n1ql: 'N1QL',
				n4js: 'N4JS',
				n4jsd: 'N4JS',
				'nand2tetris-hdl': 'Nand To Tetris HDL',
				naniscript: 'Naninovel Script',
				nani: 'Naninovel Script',
				nasm: 'NASM',
				neon: 'NEON',
				nginx: 'nginx',
				nsis: 'NSIS',
				objectivec: 'Objective-C',
				objc: 'Objective-C',
				ocaml: 'OCaml',
				opencl: 'OpenCL',
				openqasm: 'OpenQasm',
				qasm: 'OpenQasm',
				parigp: 'PARI/GP',
				objectpascal: 'Object Pascal',
				psl: 'PATROL Scripting Language',
				pcaxis: 'PC-Axis',
				px: 'PC-Axis',
				peoplecode: 'PeopleCode',
				pcode: 'PeopleCode',
				php: 'PHP',
				phpdoc: 'PHPDoc',
				'php-extras': 'PHP Extras',
				plsql: 'PL/SQL',
				powerquery: 'PowerQuery',
				pq: 'PowerQuery',
				mscript: 'PowerQuery',
				powershell: 'PowerShell',
				promql: 'PromQL',
				properties: '.properties',
				protobuf: 'Protocol Buffers',
				purebasic: 'PureBasic',
				pbfasm: 'PureBasic',
				purs: 'PureScript',
				py: 'Python',
				qsharp: 'Q#',
				qs: 'Q#',
				q: 'Q (kdb+ database)',
				qml: 'QML',
				rkt: 'Racket',
				cshtml: 'Razor C#',
				razor: 'Razor C#',
				jsx: 'React JSX',
				tsx: 'React TSX',
				renpy: "Ren'py",
				rpy: "Ren'py",
				rest: 'reST (reStructuredText)',
				robotframework: 'Robot Framework',
				robot: 'Robot Framework',
				rb: 'Ruby',
				sas: 'SAS',
				sass: 'Sass (Sass)',
				scss: 'Sass (Scss)',
				'shell-session': 'Shell session',
				'sh-session': 'Shell session',
				shellsession: 'Shell session',
				sml: 'SML',
				smlnj: 'SML/NJ',
				solidity: 'Solidity (Ethereum)',
				sol: 'Solidity (Ethereum)',
				'solution-file': 'Solution file',
				sln: 'Solution file',
				soy: 'Soy (Closure Template)',
				sparql: 'SPARQL',
				rq: 'SPARQL',
				'splunk-spl': 'Splunk SPL',
				sqf: 'SQF: Status Quo Function (Arma 3)',
				sql: 'SQL',
				iecst: 'Structured Text (IEC 61131-3)',
				systemd: 'Systemd configuration file',
				't4-templating': 'T4 templating',
				't4-cs': 'T4 Text Templates (C#)',
				t4: 'T4 Text Templates (C#)',
				't4-vb': 'T4 Text Templates (VB)',
				tap: 'TAP',
				tt2: 'Template Toolkit 2',
				toml: 'TOML',
				trickle: 'trickle',
				troy: 'troy',
				trig: 'TriG',
				ts: 'TypeScript',
				tsconfig: 'TSConfig',
				uscript: 'UnrealScript',
				uc: 'UnrealScript',
				uri: 'URI',
				url: 'URL',
				vbnet: 'VB.Net',
				vhdl: 'VHDL',
				vim: 'vim',
				'visual-basic': 'Visual Basic',
				vba: 'VBA',
				vb: 'Visual Basic',
				wasm: 'WebAssembly',
				'web-idl': 'Web IDL',
				webidl: 'Web IDL',
				wiki: 'Wiki markup',
				wolfram: 'Wolfram language',
				nb: 'Mathematica Notebook',
				wl: 'Wolfram language',
				xeoracube: 'XeoraCube',
				'xml-doc': 'XML doc (.net)',
				xojo: 'Xojo (REALbasic)',
				xquery: 'XQuery',
				yaml: 'YAML',
				yml: 'YAML',
				yang: 'YANG',
			};
			Prism.plugins.toolbar.registerButton('show-language', function (e) {
				var a = e.element.parentNode;
				if (a && /pre/i.test(a.nodeName)) {
					var t,
						o =
							a.getAttribute('data-language') ||
							i[e.language] ||
							((t = e.language)
								? (t.substring(0, 1).toUpperCase() + t.substring(1)).replace(
										/s(?=cript)/,
										'S'
								  )
								: t);
					if (o) {
						var s = document.createElement('span');
						return (s.textContent = o), s;
					}
				}
			});
		} else console.warn('Show Languages plugin loaded before Toolbar plugin.');
})();
'undefined' != typeof Prism &&
	Prism.hooks.add('wrap', function (e) {
		'keyword' === e.type && e.classes.push('keyword-' + e.content);
	});
!(function () {
	if ('undefined' != typeof Prism && 'undefined' != typeof document) {
		var l = {
				javascript: 'clike',
				actionscript: 'javascript',
				apex: ['clike', 'sql'],
				arduino: 'cpp',
				aspnet: ['markup', 'csharp'],
				birb: 'clike',
				bison: 'c',
				c: 'clike',
				csharp: 'clike',
				cpp: 'c',
				cfscript: 'clike',
				chaiscript: ['clike', 'cpp'],
				coffeescript: 'javascript',
				crystal: 'ruby',
				'css-extras': 'css',
				d: 'clike',
				dart: 'clike',
				django: 'markup-templating',
				ejs: ['javascript', 'markup-templating'],
				etlua: ['lua', 'markup-templating'],
				erb: ['ruby', 'markup-templating'],
				fsharp: 'clike',
				'firestore-security-rules': 'clike',
				flow: 'javascript',
				ftl: 'markup-templating',
				gml: 'clike',
				glsl: 'c',
				go: 'clike',
				groovy: 'clike',
				haml: 'ruby',
				handlebars: 'markup-templating',
				haxe: 'clike',
				hlsl: 'c',
				idris: 'haskell',
				java: 'clike',
				javadoc: ['markup', 'java', 'javadoclike'],
				jolie: 'clike',
				jsdoc: ['javascript', 'javadoclike', 'typescript'],
				'js-extras': 'javascript',
				json5: 'json',
				jsonp: 'json',
				'js-templates': 'javascript',
				kotlin: 'clike',
				latte: ['clike', 'markup-templating', 'php'],
				less: 'css',
				lilypond: 'scheme',
				liquid: 'markup-templating',
				markdown: 'markup',
				'markup-templating': 'markup',
				mongodb: 'javascript',
				n4js: 'javascript',
				objectivec: 'c',
				opencl: 'c',
				parser: 'markup',
				php: 'markup-templating',
				phpdoc: ['php', 'javadoclike'],
				'php-extras': 'php',
				plsql: 'sql',
				processing: 'clike',
				protobuf: 'clike',
				pug: ['markup', 'javascript'],
				purebasic: 'clike',
				purescript: 'haskell',
				qsharp: 'clike',
				qml: 'javascript',
				qore: 'clike',
				racket: 'scheme',
				cshtml: ['markup', 'csharp'],
				jsx: ['markup', 'javascript'],
				tsx: ['jsx', 'typescript'],
				reason: 'clike',
				ruby: 'clike',
				sass: 'css',
				scss: 'css',
				scala: 'java',
				'shell-session': 'bash',
				smarty: 'markup-templating',
				solidity: 'clike',
				soy: 'markup-templating',
				sparql: 'turtle',
				sqf: 'clike',
				squirrel: 'clike',
				't4-cs': ['t4-templating', 'csharp'],
				't4-vb': ['t4-templating', 'vbnet'],
				tap: 'yaml',
				tt2: ['clike', 'markup-templating'],
				textile: 'markup',
				twig: 'markup-templating',
				typescript: 'javascript',
				v: 'clike',
				vala: 'clike',
				vbnet: 'basic',
				velocity: 'markup',
				wiki: 'markup',
				xeora: 'markup',
				'xml-doc': 'markup',
				xquery: 'markup',
			},
			n = {
				html: 'markup',
				xml: 'markup',
				svg: 'markup',
				mathml: 'markup',
				ssml: 'markup',
				atom: 'markup',
				rss: 'markup',
				js: 'javascript',
				g4: 'antlr4',
				ino: 'arduino',
				adoc: 'asciidoc',
				avs: 'avisynth',
				avdl: 'avro-idl',
				shell: 'bash',
				shortcode: 'bbcode',
				rbnf: 'bnf',
				oscript: 'bsl',
				cs: 'csharp',
				dotnet: 'csharp',
				cfc: 'cfscript',
				coffee: 'coffeescript',
				conc: 'concurnas',
				jinja2: 'django',
				'dns-zone': 'dns-zone-file',
				dockerfile: 'docker',
				gv: 'dot',
				eta: 'ejs',
				xlsx: 'excel-formula',
				xls: 'excel-formula',
				gamemakerlanguage: 'gml',
				gni: 'gn',
				'go-mod': 'go-module',
				hbs: 'handlebars',
				hs: 'haskell',
				idr: 'idris',
				gitignore: 'ignore',
				hgignore: 'ignore',
				npmignore: 'ignore',
				webmanifest: 'json',
				kt: 'kotlin',
				kts: 'kotlin',
				kum: 'kumir',
				tex: 'latex',
				context: 'latex',
				ly: 'lilypond',
				emacs: 'lisp',
				elisp: 'lisp',
				'emacs-lisp': 'lisp',
				md: 'markdown',
				moon: 'moonscript',
				n4jsd: 'n4js',
				nani: 'naniscript',
				objc: 'objectivec',
				qasm: 'openqasm',
				objectpascal: 'pascal',
				px: 'pcaxis',
				pcode: 'peoplecode',
				pq: 'powerquery',
				mscript: 'powerquery',
				pbfasm: 'purebasic',
				purs: 'purescript',
				py: 'python',
				qs: 'qsharp',
				rkt: 'racket',
				razor: 'cshtml',
				rpy: 'renpy',
				robot: 'robotframework',
				rb: 'ruby',
				'sh-session': 'shell-session',
				shellsession: 'shell-session',
				smlnj: 'sml',
				sol: 'solidity',
				sln: 'solution-file',
				rq: 'sparql',
				t4: 't4-cs',
				trickle: 'tremor',
				troy: 'tremor',
				trig: 'turtle',
				ts: 'typescript',
				tsconfig: 'typoscript',
				uscript: 'unrealscript',
				uc: 'unrealscript',
				url: 'uri',
				vb: 'visual-basic',
				vba: 'visual-basic',
				webidl: 'web-idl',
				mathematica: 'wolfram',
				nb: 'wolfram',
				wl: 'wolfram',
				xeoracube: 'xeora',
				yml: 'yaml',
			},
			p = {},
			e = 'components/',
			a = Prism.util.currentScript();
		if (a) {
			var r =
					/\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,
				s = /(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,
				i = a.getAttribute('data-autoloader-path');
			if (null != i) e = i.trim().replace(/\/?$/, '/');
			else {
				var t = a.src;
				r.test(t)
					? (e = t.replace(r, 'components/'))
					: s.test(t) && (e = t.replace(s, '$1components/'));
			}
		}
		var o = (Prism.plugins.autoloader = {
			languages_path: e,
			use_minified: !0,
			loadLanguages: u,
		});
		Prism.hooks.add('complete', function (e) {
			var a = e.element,
				r = e.language;
			if (a && r && 'none' !== r) {
				var s = (function (e) {
					var a = (e.getAttribute('data-dependencies') || '').trim();
					if (!a) {
						var r = e.parentElement;
						r &&
							'pre' === r.tagName.toLowerCase() &&
							(a = (r.getAttribute('data-dependencies') || '').trim());
					}
					return a ? a.split(/\s*,\s*/g) : [];
				})(a);
				/^diff-./i.test(r)
					? (s.push('diff'), s.push(r.substr('diff-'.length)))
					: s.push(r),
					s.every(m) ||
						u(s, function () {
							Prism.highlightElement(a);
						});
			}
		});
	}
	function m(e) {
		if (0 <= e.indexOf('!')) return !1;
		if ((e = n[e] || e) in Prism.languages) return !0;
		var a = p[e];
		return a && !a.error && !1 === a.loading;
	}
	function u(e, a, r) {
		'string' == typeof e && (e = [e]);
		var s = e.length,
			i = 0,
			t = !1;
		function c() {
			t || (++i === s && a && a(e));
		}
		0 !== s
			? e.forEach(function (e) {
					!(function (a, r, s) {
						var i = 0 <= a.indexOf('!');
						function e() {
							var e = p[a];
							e || (e = p[a] = { callbacks: [] }),
								e.callbacks.push({ success: r, error: s }),
								!i && m(a)
									? k(a, 'success')
									: !i && e.error
									? k(a, 'error')
									: (!i && e.loading) ||
									  ((e.loading = !0),
									  (e.error = !1),
									  (function (e, a, r) {
											var s = document.createElement('script');
											(s.src = e),
												(s.async = !0),
												(s.onload = function () {
													document.body.removeChild(s), a && a();
												}),
												(s.onerror = function () {
													document.body.removeChild(s), r && r();
												}),
												document.body.appendChild(s);
									  })(
											(function (e) {
												return (
													o.languages_path +
													'prism-' +
													e +
													(o.use_minified ? '.min' : '') +
													'.js'
												);
											})(a),
											function () {
												(e.loading = !1), k(a, 'success');
											},
											function () {
												(e.loading = !1), (e.error = !0), k(a, 'error');
											}
									  ));
						}
						(a = a.replace('!', '')), (a = n[a] || a);
						var t = l[a];
						t && t.length ? u(t, e, s) : e();
					})(e, c, function () {
						t || ((t = !0), r && r(e));
					});
			  })
			: a && setTimeout(a, 0);
	}
	function k(e, a) {
		if (p[e]) {
			for (var r = p[e].callbacks, s = 0, i = r.length; s < i; s++) {
				var t = r[s][a];
				t && setTimeout(t, 0);
			}
			r.length = 0;
		}
	}
})();
'undefined' != typeof Prism &&
	'undefined' != typeof document &&
	document.createRange &&
	((Prism.plugins.KeepMarkup = !0),
	Prism.hooks.add('before-highlight', function (e) {
		if (
			e.element.children.length &&
			Prism.util.isActive(e.element, 'keep-markup', !0)
		) {
			var o = Prism.util.isActive(e.element, 'drop-tokens', !1),
				d = 0,
				t = [];
			s(e.element), t.length && (e.keepMarkup = t);
		}
		function r(e) {
			if (
				(function (e) {
					return (
						!o ||
						'span' !== e.nodeName.toLowerCase() ||
						!e.classList.contains('token')
					);
				})(e)
			) {
				var n = { clone: e.cloneNode(!1), posOpen: d };
				t.push(n), s(e), (n.posClose = d);
			} else s(e);
		}
		function s(e) {
			for (var n = 0, o = e.childNodes.length; n < o; n++) {
				var t = e.childNodes[n];
				1 === t.nodeType ? r(t) : 3 === t.nodeType && (d += t.data.length);
			}
		}
	}),
	Prism.hooks.add('after-highlight', function (n) {
		if (n.keepMarkup && n.keepMarkup.length) {
			var s = function (e, n) {
				for (var o = 0, t = e.childNodes.length; o < t; o++) {
					var d = e.childNodes[o];
					if (1 === d.nodeType) {
						if (!s(d, n)) return !1;
					} else
						3 === d.nodeType &&
							(!n.nodeStart &&
								n.pos + d.data.length > n.node.posOpen &&
								((n.nodeStart = d), (n.nodeStartPos = n.node.posOpen - n.pos)),
							n.nodeStart &&
								n.pos + d.data.length >= n.node.posClose &&
								((n.nodeEnd = d), (n.nodeEndPos = n.node.posClose - n.pos)),
							(n.pos += d.data.length));
					if (n.nodeStart && n.nodeEnd) {
						var r = document.createRange();
						return (
							r.setStart(n.nodeStart, n.nodeStartPos),
							r.setEnd(n.nodeEnd, n.nodeEndPos),
							n.node.clone.appendChild(r.extractContents()),
							r.insertNode(n.node.clone),
							r.detach(),
							!1
						);
					}
				}
				return !0;
			};
			n.keepMarkup.forEach(function (e) {
				s(n.element, { node: e, pos: 0 });
			}),
				(n.highlightedCode = n.element.innerHTML);
		}
	}));
!(function () {
	if ('undefined' != typeof Prism) {
		var i =
			Object.assign ||
			function (e, n) {
				for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
				return e;
			};
		(e.prototype = {
			setDefaults: function (e) {
				this.defaults = i(this.defaults, e);
			},
			normalize: function (e, n) {
				for (var t in (n = i(this.defaults, n))) {
					var r = t.replace(/-(\w)/g, function (e, n) {
						return n.toUpperCase();
					});
					'normalize' !== t &&
						'setDefaults' !== r &&
						n[t] &&
						this[r] &&
						(e = this[r].call(this, e, n[t]));
				}
				return e;
			},
			leftTrim: function (e) {
				return e.replace(/^\s+/, '');
			},
			rightTrim: function (e) {
				return e.replace(/\s+$/, '');
			},
			tabsToSpaces: function (e, n) {
				return (n = 0 | n || 4), e.replace(/\t/g, new Array(++n).join(' '));
			},
			spacesToTabs: function (e, n) {
				return (n = 0 | n || 4), e.replace(RegExp(' {' + n + '}', 'g'), '\t');
			},
			removeTrailing: function (e) {
				return e.replace(/\s*?$/gm, '');
			},
			removeInitialLineFeed: function (e) {
				return e.replace(/^(?:\r?\n|\r)/, '');
			},
			removeIndent: function (e) {
				var n = e.match(/^[^\S\n\r]*(?=\S)/gm);
				return n && n[0].length
					? (n.sort(function (e, n) {
							return e.length - n.length;
					  }),
					  n[0].length ? e.replace(RegExp('^' + n[0], 'gm'), '') : e)
					: e;
			},
			indent: function (e, n) {
				return e.replace(
					/^[^\S\n\r]*(?=\S)/gm,
					new Array(++n).join('\t') + '$&'
				);
			},
			breakLines: function (e, n) {
				n = !0 === n ? 80 : 0 | n || 80;
				for (var t = e.split('\n'), r = 0; r < t.length; ++r)
					if (!(s(t[r]) <= n)) {
						for (
							var i = t[r].split(/(\s+)/g), o = 0, a = 0;
							a < i.length;
							++a
						) {
							var l = s(i[a]);
							n < (o += l) && ((i[a] = '\n' + i[a]), (o = l));
						}
						t[r] = i.join('');
					}
				return t.join('\n');
			},
		}),
			'undefined' != typeof module && module.exports && (module.exports = e),
			(Prism.plugins.NormalizeWhitespace = new e({
				'remove-trailing': !0,
				'remove-indent': !0,
				'left-trim': !0,
				'right-trim': !0,
			})),
			Prism.hooks.add('before-sanity-check', function (e) {
				var n = Prism.plugins.NormalizeWhitespace;
				if (
					(!e.settings || !1 !== e.settings['whitespace-normalization']) &&
					Prism.util.isActive(e.element, 'whitespace-normalization', !0)
				)
					if ((e.element && e.element.parentNode) || !e.code) {
						var t = e.element.parentNode;
						if (e.code && t && 'pre' === t.nodeName.toLowerCase()) {
							for (
								var r = t.childNodes, i = '', o = '', a = !1, l = 0;
								l < r.length;
								++l
							) {
								var s = r[l];
								s == e.element
									? (a = !0)
									: '#text' === s.nodeName &&
									  (a ? (o += s.nodeValue) : (i += s.nodeValue),
									  t.removeChild(s),
									  --l);
							}
							if (e.element.children.length && Prism.plugins.KeepMarkup) {
								var c = i + e.element.innerHTML + o;
								(e.element.innerHTML = n.normalize(c, e.settings)),
									(e.code = e.element.textContent);
							} else
								(e.code = i + e.code + o),
									(e.code = n.normalize(e.code, e.settings));
						}
					} else e.code = n.normalize(e.code, e.settings);
			});
	}
	function e(e) {
		this.defaults = i({}, e);
	}
	function s(e) {
		for (var n = 0, t = 0; t < e.length; ++t)
			e.charCodeAt(t) == '\t'.charCodeAt(0) && (n += 3);
		return e.length + n;
	}
})();
!(function () {
	if ('undefined' != typeof Prism) {
		var e = {
				pattern: /(.)\bdata:[^\/]+\/[^,]+,(?:(?!\1)[\s\S]|\\\1)+(?=\1)/,
				lookbehind: !0,
				inside: {
					'language-css': {
						pattern: /(data:[^\/]+\/(?:[^+,]+\+)?css,)[\s\S]+/,
						lookbehind: !0,
					},
					'language-javascript': {
						pattern: /(data:[^\/]+\/(?:[^+,]+\+)?javascript,)[\s\S]+/,
						lookbehind: !0,
					},
					'language-json': {
						pattern: /(data:[^\/]+\/(?:[^+,]+\+)?json,)[\s\S]+/,
						lookbehind: !0,
					},
					'language-markup': {
						pattern: /(data:[^\/]+\/(?:[^+,]+\+)?(?:html|xml),)[\s\S]+/,
						lookbehind: !0,
					},
				},
			},
			r = ['url', 'attr-value', 'string'];
		(Prism.plugins.dataURIHighlight = {
			processGrammar: function (i) {
				i &&
					!i['data-uri'] &&
					(Prism.languages.DFS(i, function (i, a, n) {
						-1 < r.indexOf(n) &&
							!Array.isArray(a) &&
							(a.pattern || (a = this[i] = { pattern: a }),
							(a.inside = a.inside || {}),
							'attr-value' == n
								? Prism.languages.insertBefore(
										'inside',
										a.inside['url-link'] ? 'url-link' : 'punctuation',
										{ 'data-uri': e },
										a
								  )
								: a.inside['url-link']
								? Prism.languages.insertBefore(
										'inside',
										'url-link',
										{ 'data-uri': e },
										a
								  )
								: (a.inside['data-uri'] = e));
					}),
					(i['data-uri'] = e));
			},
		}),
			Prism.hooks.add('before-highlight', function (i) {
				if (e.pattern.test(i.code))
					for (var a in e.inside)
						if (
							e.inside.hasOwnProperty(a) &&
							!e.inside[a].inside &&
							e.inside[a].pattern.test(i.code)
						) {
							var n = a.match(/^language-(.+)/)[1];
							Prism.languages[n] &&
								(e.inside[a].inside = {
									rest:
										((r = Prism.languages[n]),
										Prism.plugins.autolinker &&
											Prism.plugins.autolinker.processGrammar(r),
										r),
								});
						}
				var r;
				Prism.plugins.dataURIHighlight.processGrammar(i.grammar);
			});
	}
})();
!(function () {
	function u(t, e) {
		t.addEventListener('click', function () {
			!(function (t) {
				navigator.clipboard
					? navigator.clipboard
							.writeText(t.getText())
							.then(t.success, function () {
								o(t);
							})
					: o(t);
			})(e);
		});
	}
	function o(e) {
		var t = document.createElement('textarea');
		(t.value = e.getText()),
			(t.style.top = '0'),
			(t.style.left = '0'),
			(t.style.position = 'fixed'),
			document.body.appendChild(t),
			t.focus(),
			t.select();
		try {
			var o = document.execCommand('copy');
			setTimeout(function () {
				o ? e.success() : e.error();
			}, 1);
		} catch (t) {
			setTimeout(function () {
				e.error(t);
			}, 1);
		}
		document.body.removeChild(t);
	}
	'undefined' != typeof Prism &&
		'undefined' != typeof document &&
		(Prism.plugins.toolbar
			? Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (t) {
					var e = t.element,
						o = (function (t) {
							var e = {
								copy: 'Copy',
								'copy-error': 'Press Ctrl+C to copy',
								'copy-success': 'Copied!',
								'copy-timeout': 5e3,
							};
							for (var o in e) {
								for (
									var n = 'data-prismjs-' + o, c = t;
									c && !c.hasAttribute(n);

								)
									c = c.parentElement;
								c && (e[o] = c.getAttribute(n));
							}
							return e;
						})(e),
						n = document.createElement('button');
					(n.className = 'copy-to-clipboard-button'),
						n.setAttribute('type', 'button');
					var c = document.createElement('span');
					return (
						n.appendChild(c),
						i('copy'),
						u(n, {
							getText: function () {
								return e.textContent;
							},
							success: function () {
								i('copy-success'), r();
							},
							error: function () {
								i('copy-error'),
									setTimeout(function () {
										!(function (t) {
											window.getSelection().selectAllChildren(t);
										})(e);
									}, 1),
									r();
							},
						}),
						n
					);
					function r() {
						setTimeout(function () {
							i('copy');
						}, o['copy-timeout']);
					}
					function i(t) {
						(c.textContent = o[t]), n.setAttribute('data-copy-state', t);
					}
			  })
			: console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.'));
})();
'undefined' != typeof Prism &&
	'undefined' != typeof document &&
	document.querySelector &&
	Prism.plugins.toolbar.registerButton('download-file', function (t) {
		var e = t.element.parentNode;
		if (
			e &&
			/pre/i.test(e.nodeName) &&
			e.hasAttribute('data-src') &&
			e.hasAttribute('data-download-link')
		) {
			var n = e.getAttribute('data-src'),
				a = document.createElement('a');
			return (
				(a.textContent =
					e.getAttribute('data-download-link-label') || 'Download'),
				a.setAttribute('download', ''),
				(a.href = n),
				a
			);
		}
	});
!(function () {
	if ('undefined' != typeof Prism && 'undefined' != typeof document) {
		Element.prototype.matches ||
			(Element.prototype.matches =
				Element.prototype.msMatchesSelector ||
				Element.prototype.webkitMatchesSelector);
		var e,
			t = Prism.util.currentScript(),
			r = [],
			n = (Prism.plugins.filterHighlightAll = {
				add: function (t) {
					r.push(function (e) {
						return t({ element: e, language: Prism.util.getLanguage(e) });
					});
				},
				addSelector: function (t) {
					r.push(function (e) {
						return e.matches(t);
					});
				},
				reject: {
					add: function (t) {
						r.push(function (e) {
							return !t({ element: e, language: Prism.util.getLanguage(e) });
						});
					},
					addSelector: function (t) {
						r.push(function (e) {
							return !e.matches(t);
						});
					},
				},
				filterKnown: !!t && t.hasAttribute('data-filter-known'),
			});
		if (
			(n.add(function (e) {
				return !n.filterKnown || 'object' == typeof Prism.languages[e.language];
			}),
			t)
		)
			(e = t.getAttribute('data-filter-selector')) && n.addSelector(e),
				(e = t.getAttribute('data-reject-selector')) && n.reject.addSelector(e);
		Prism.hooks.add('before-all-elements-highlight', function (e) {
			e.elements = e.elements.filter(i);
		});
	}
	function i(e) {
		for (var t = 0, n = r.length; t < n; t++) if (!r[t](e)) return !1;
		return !0;
	}
})();
'undefined' != typeof Prism &&
	((Prism.languages.treeview = {
		'treeview-part': {
			pattern: /^.+/m,
			inside: {
				'entry-line': [
					{ pattern: /\|-- |├── /, alias: 'line-h' },
					{ pattern: /\| {3}|│ {3}/, alias: 'line-v' },
					{ pattern: /`-- |└── /, alias: 'line-v-last' },
					{ pattern: / {4}/, alias: 'line-v-gap' },
				],
				'entry-name': { pattern: /.*\S.*/, inside: { operator: / -> / } },
			},
		},
	}),
	Prism.hooks.add('wrap', function (e) {
		if ('treeview' === e.language && 'entry-name' === e.type) {
			var t = e.classes,
				n = /(^|[^\\])\/\s*$/;
			if (n.test(e.content))
				(e.content = e.content.replace(n, '$1')), t.push('dir');
			else {
				e.content = e.content.replace(/(^|[^\\])[=*|]\s*$/, '$1');
				for (
					var a = e.content.toLowerCase().replace(/\s+/g, '').split('.');
					1 < a.length;

				)
					a.shift(), t.push('ext-' + a.join('-'));
			}
			'.' === e.content[0] && t.push('dotfile');
		}
	}));
