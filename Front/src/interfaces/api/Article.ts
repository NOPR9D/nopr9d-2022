export interface Article {
	id: number;
	title: string;
	socket: { props: string; default?: string };
	content: string;
	picturesExtension: string;
	file: string;
	tags: { [key: string]: Tag };
}

export interface Tag {
	name: string;
	backgroundColor: string;
	fontColor: string;
}
