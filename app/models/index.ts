export interface HeroImages {
  url: string;
  title: string;
  subtitle: string;
  content: string;
  active: boolean;
  special: boolean;
}

export interface Faqs {
  question: string;
  answer: string;
}

export interface Service {
  name: string;
  duration: string;
  price: string;
  description: string;
}

export interface ServiceCategory {
  category: string;
  services: Service[];
}

export interface Team {
  id: number;
  name: string;
  content: string;
  img: string;
}

export interface Gallery {
  id: number;
  src: string;
  alt: string;
}
