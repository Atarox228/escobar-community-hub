export interface Proyecto {
  title: string;
  desc: string;
  status: string;
  progress: number;
  location: string;
}

export interface Articulo {
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

export interface Valor {
  icon: ImageData;
  title: string;
  desc: string;
}