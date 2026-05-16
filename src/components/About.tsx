import { AboutData } from '../types/about';
import { SectionTitle } from './about/SectionTitle';
import { Card } from './about/Card';
import { ItemCard } from './about/ItemCard';
import { TimelineCard } from './about/TimelineCard';

interface AboutProps {
  data: AboutData;
  currentLanguage: 'ja' | 'en';
}

export function About({ data }: AboutProps) {
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
              <div className="space-y-1.5 text-gray-600 leading-relaxed">
                {data.hero.description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div>
              <h2 className="text-xl font-light mb-4 text-gray-800">
                {data.links.title}
              </h2>
              <div className="space-y-2">
                {data.links.items.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="block text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                ))}
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
