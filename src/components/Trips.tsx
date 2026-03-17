import React from 'react';
import { motion } from 'framer-motion';

const Trips: React.FC = () => {
  const trips = [
    {
      destination: 'Lisbon',
      region: 'Portugal',
      timing: 'March 2026',
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80',
      status: 'Confirmed'
    },
    {
      destination: 'Prague',
      region: 'Czech Republic',
      timing: 'April 2026',
      image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=800&q=80',
      status: 'Confirmed'
    },
    {
      destination: 'Zurich',
      region: 'Switzerland',
      timing: 'May 2026',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      status: 'Planning'
    }
  ];

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container-wide relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-black mb-4 font-light">
            Where I'm Working Next
          </h2>
          <p className="text-label text-brand-stone mb-6">
            Limited Availability
          </p>
          <p className="text-base leading-relaxed text-neutral-600 max-w-2xl mx-auto font-body">
            I'm focusing on specific European markets this year. If you're in these cities, we can coordinate travel and reduce costs.
          </p>
        </motion.div>

        {/* Trip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trips.map((trip, index) => (
            <motion.div
              key={trip.destination}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative overflow-hidden border border-neutral-200 hover:border-black transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-8 min-h-[280px] flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs uppercase tracking-wider px-2 py-1 rounded-full font-body ${
                    trip.status === 'Confirmed'
                      ? 'bg-accent-sky/20 text-accent-sky border border-accent-sky/30'
                      : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                  }`}>
                    {trip.status}
                  </span>
                  <span className="text-label text-brand-stone">
                    {trip.timing}
                  </span>
                </div>
                <h4 className="text-2xl font-display text-black font-light mb-2">
                  {trip.destination}
                </h4>
                <p className="text-neutral-600 text-base leading-relaxed font-body">
                  {trip.region}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-neutral-600 mb-6">
            In one of these markets? Let's coordinate and share travel costs.
          </p>
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Trips;