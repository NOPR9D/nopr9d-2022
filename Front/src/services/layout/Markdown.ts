import MarkdownIt from 'markdown-it';

export class Markdown {
	private markdown!: MarkdownIt;

	constructor() {
		this.markdown = new MarkdownIt();
	}

	public render(src: string): string {
		return this.markdown.render(src);
	}
}
