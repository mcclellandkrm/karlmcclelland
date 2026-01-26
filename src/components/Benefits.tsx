import React from 'react';

interface Benefit {
  icon: React.ReactElement;
  title: string;
  description: string;
  image: string;
}

const benefits: Benefit[] = [
  {
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>,
    title: 'Boost Local SEO',
    description: 'Google Street View tours increase your search ranking and make you stand out in local searches. Businesses with tours get 2x more interest.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80'
  },
  {
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>,
    title: 'Mobile-First Experience',
    description: 'Your customers browse on their phones. Give them an immersive preview of your space before they visit - anytime, anywhere.',
    image: 'https://images.unsplash.com/photo-1511798616182-aab3698ac53e?w=800&auto=format&fit=crop&q=80'
  },
  {
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    title: 'Build Trust Instantly',
    description: 'Show transparency and professionalism. Let customers see inside your cafe, shop, or business before they walk through the door.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80'
  },
  {
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>,
    title: 'Stand Out Locally',
    description: 'While your competitors have static photos, you\'ll have an interactive experience that captures attention and drives foot traffic.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80'
  },
  {
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    title: '24/7 Virtual Visits',
    description: 'Your space works for you around the clock. Customers can explore your business even when you\'re closed.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop&q=80'
  },
  {
    icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    title: 'One-Time Investment',
    description: 'Unlike ongoing advertising costs, a virtual tour is a one-time investment that keeps delivering value for years.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="relative overflow-hidden section bg-neutral-50">

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl font-display text-black font-light">
            Why Your Small Business Needs a{' '}
            <span className="text-black">Virtual Tour</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-neutral-600">
            Perfect for cafes, boutiques, salons, gyms, and high street shops
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-0 border-0 card-luxury group"
            >
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="object-cover w-full h-full transition-transform duration-1000 ease-luxury group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 transition-opacity duration-700 bg-gradient-to-t from-black via-black/80 to-transparent group-hover:opacity-90"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl transition-colors duration-500 font-display text-black group-hover:text-neutral-700 font-light">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
