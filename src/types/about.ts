export interface TimelineItem {
  period: string;
  title: string;
  description: string[];
}

export interface ListItem {
  title: string;
  description: string;
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface AboutData {
  hero: {
    name: string;
    description: string[];
  };
  journey: {
    title: string;
    timeline: TimelineItem[];
  };
  travel: {
    title: string;
    content: string[];
  };
  interests: {
    title: string;
    items: ListItem[];
  };
  inspirations: {
    title: string;
    items: ListItem[];
  };
  links: {
    title: string;
    items: LinkItem[];
  };
}
