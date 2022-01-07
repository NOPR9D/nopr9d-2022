export interface Article {
  id: number;
  name: string;
  file: string;
  picturesExtension: string;
  tags: Tag[];
  date: string;
}

export interface Tags {
  [key: string]: Tag;
}

export interface Tag {
  name: string;
  backgroundColor: string;
  fontColor: string;
}
