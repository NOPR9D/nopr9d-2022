import MarkdownIt from 'markdown-it';
import MarkdownPrism from 'markdown-it-prism';

import * as e1 from 'prismjs/components/prism-clike';
import * as e2 from 'prismjs/components/prism-java';
import * as e3 from 'prismjs/components/prism-javascript';
import * as e4 from 'prismjs/components/prism-js-extras';
import * as e5 from 'prismjs/components/prism-js-templates';
import * as e6 from 'prismjs/components/prism-json';
import * as e7 from 'prismjs/components/prism-json5';
import * as e8 from 'prismjs/components/prism-php';
import * as e9 from 'prismjs/components/prism-php-extras';
import * as e10 from 'prismjs/components/prism-regex';
import * as e11 from 'prismjs/components/prism-scss';
import * as e12 from 'prismjs/components/prism-css';
import * as e13 from 'prismjs/components/prism-sql';
import * as e14 from 'prismjs/components/prism-typescript';
import * as e15 from 'prismjs/components/prism-glsl';
import * as e16 from 'prismjs/components/prism-hlsl';
import * as e17 from 'prismjs/components/prism-html';
import * as e18 from 'prismjs/components/prism-markdown';

require('./prism.js');

import './prism.css';

import MarkdownKatex from '@jeff-tian/markdown-it-katex';

export class Markdown {
	private markdown!: MarkdownIt;

	constructor() {
		this.markdown = new MarkdownIt();
		this.markdown
			.use(MarkdownPrism, {
				defaultLanguage: 'clike',
				defaultLanguageForUnspecified: 'clike',
				defaultLanguageForUnknown: 'clike',
				default: ['clike'],
			})
			.use(MarkdownKatex);

		console.log(this.markdown);
		this.markdown.options.breaks = true;
		this.markdown.options.html = true;
		this.markdown.options.linkify = true;
		this.markdown.options.typographer = true;
	}

	public render(src: string): string {
		return this.markdown.render(src);
	}
}
