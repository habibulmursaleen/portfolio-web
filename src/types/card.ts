export interface Card {
  title: string;
  description: string;
  src: () => JSX.Element;
  cover: () => JSX.Element;
  ctaLink: string;
  ctaText: string;
  content: () => JSX.Element;
}

export interface Tab {
  title: string;
  value: string;
  content?: string | React.ReactNode | JSX.Element;
};