import { AboutData } from '../types/about';

interface AboutProps {
  data: AboutData;
  currentLanguage: 'ja' | 'en';
}

export function About({ data }: AboutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar - Fixed on desktop */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 lg:self-start">
            {/* Hero Section */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
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
                    className="block text-gray-700 hover:text-gray-900 underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
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
              <h2 className="text-2xl font-light mb-5 text-gray-800">
                {data.journey.title}
              </h2>
              <div className="space-y-6">
                {data.journey.timeline.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-sm font-medium text-gray-500">
                        {item.period}
                      </p>
                      <span className="text-gray-300">|</span>
                      <p className="text-sm font-medium text-gray-700">
                        {item.title}
                      </p>
                    </div>
                    <div className="space-y-1 text-gray-600 leading-relaxed">
                      {item.description.map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))}
                    </div>
                    {index < data.journey.timeline.length - 1 && (
                      <div className="mt-5 border-b border-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Travel Section */}
            <section>
              <h2 className="text-2xl font-light mb-5 text-gray-800">
                {data.travel.title}
              </h2>
              <div className="space-y-1 text-gray-600 leading-relaxed">
                {data.travel.content.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </section>

            {/* Interests Section */}
            <section>
              <h2 className="text-2xl font-light mb-5 text-gray-800">
                {data.interests.title}
              </h2>
              <div className="space-y-3">
                {data.interests.items.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-base font-medium text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Currently Section */}
            <section className="pb-8">
              <h2 className="text-2xl font-light mb-5 text-gray-800">
                {data.currently.title}
              </h2>
              <div className="space-y-3">
                {data.currently.items.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-base font-medium text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
