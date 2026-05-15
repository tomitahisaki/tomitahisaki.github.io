export interface AboutData {
  hero: {
    name: string;
    description: string[];
  };
  about: {
    title: string;
    content: string[];
  };
  journey: {
    title: string;
    timeline: {
      period: string;
      title: string;
      description: string[];
    }[];
  };
  travel: {
    title: string;
    content: string[];
  };
  interests: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  currently: {
    title: 'Currently',
    items: {
      title: string;
      description: string;
    }[];
  };
  links: {
    title: string;
    items: {
      label: string;
      url: string;
    }[];
  };
}
