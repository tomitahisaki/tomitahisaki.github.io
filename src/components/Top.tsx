import { TopData } from '../types/top';
import { SectionTitle } from './top/SectionTitle';
import { Card } from './top/Card';
import { ItemCard } from './top/ItemCard';
import { TimelineCard } from './top/TimelineCard';
import { GitHubIcon, LinkedInIcon, EmailIcon, XIcon, HatenaIcon } from './Icons';

interface TopProps {
  data: TopData;
  currentLanguage: 'ja' | 'en';
}

const getLinkIcon = (label: string) => {
  switch (label) {
    case 'GitHub':
      return <GitHubIcon width={20} />;
    case 'LinkedIn':
      return <LinkedInIcon width={20} />;
    case 'Email':
      return <EmailIcon width={20} />;
    case 'X':
      return <XIcon width={20} />;
    case 'Blog':
      return <HatenaIcon width={20} />;
    default:
      return null;
  }
};

export function Top({ data }: TopProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar - Fixed on desktop */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 lg:self-start">
            {/* Hero Section */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
                {data.hero.name}
              </h1>
              <div className="space-y-1.5 text-gray-600 leading-relaxed mb-4">
                {data.hero.description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              
              {/* Resume Link */}
              <a
                href="/resume"
                className="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
              >
                View Resume →
              </a>
            </div>

            {/* Links Section */}
            <div>
              <h2 className="text-xl font-light mb-4 text-gray-800">
                {data.links.title}
              </h2>
              <div className="flex flex-wrap gap-4">
                {data.links.items.map((link, index) => {
                  const icon = getLinkIcon(link.label);
                  
                  return icon ? (
                    <a
                      key={index}
                      href={link.url}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border border-gray-200 transition-all duration-300 ease-in-out no-underline hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-md"
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      title={link.label}
                    >
                      {icon}
                    </a>
                  ) : (
                    <a
                      key={index}
                      href={link.url}
                      className="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Right Content - Scrollable */}
          <main className="lg:col-span-8 space-y-12">
            {/* Journey Section */}
            <section>
              <SectionTitle>{data.journey.title}</SectionTitle>
              <div className="space-y-6 ml-4">
                {data.journey.timeline.map((item, index) => (
                  <TimelineCard key={index} item={item} />
                ))}
              </div>
            </section>

            {/* Travel Section */}
            <section>
              <SectionTitle>{data.travel.title}</SectionTitle>
              <div className="ml-4">
                <Card padding="large">
                  <div className="space-y-1 text-gray-600 leading-relaxed">
                    {data.travel.content.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </Card>
              </div>
            </section>

            {/* Interests Section */}
            <section>
              <SectionTitle>{data.interests.title}</SectionTitle>
              <div className="space-y-3 ml-4">
                {data.interests.items.map((item, index) => (
                  <ItemCard key={index} title={item.title} description={item.description} />
                ))}
              </div>
            </section>

            {/* Inspirations Section */}
            <section className="pb-8">
              <SectionTitle>{data.inspirations.title}</SectionTitle>
              <div className="space-y-3 ml-4">
                {data.inspirations.items.map((item, index) => (
                  <ItemCard key={index} title={item.title} description={item.description} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
