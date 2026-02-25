import { Link } from 'react-router';
import { Book, Users, Clock, FileText } from 'lucide-react';
import emblemImage from 'figma:asset/3f2aee9b7deb0d39b0314a28b63fbee3c2e82c24.png';
import { useIndiaColors } from '../hooks/use-india-colors';

export function HomePage() {
  const colors = useIndiaColors();
  
  const cards = [
    {
      icon: Book,
      title: 'Read',
      description: 'Explore the complete text of the Constitution, organized by Parts and Schedules',
      path: '/read',
      colorIndex: 0,
    },
    {
      icon: Users,
      title: 'Explore',
      description: 'Discover the framers, committees, and the Constituent Assembly',
      path: '/explore',
      colorIndex: 1,
    },
    {
      icon: Clock,
      title: 'History',
      description: 'Journey through constitutional milestones and former Presidents',
      path: '/history',
      colorIndex: 2,
    },
    {
      icon: FileText,
      title: 'Preamble',
      description: 'Read the foundational principles of our Republic',
      path: '/preamble',
      colorIndex: 0,
    },
  ];

  const textColor = colors.name === 'white' ? '#000080' : colors.primary;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg">
                <img src={emblemImage} alt="State Emblem of India" className="w-20 h-20 object-contain" />
              </div>
            </div>
            <h1 
              className="text-4xl md:text-6xl mb-6 transition-colors duration-1000"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}
            >
              The Constitution of India
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              The supreme law of India, establishing the framework of government,
              fundamental political principles, and the rights of citizens
            </p>
            <div className="mt-8">
              <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-serif)' }}>
                Adopted on 26th November 1949 • Came into force on 26th January 1950
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card) => (
              <Link
                key={card.path}
                to={card.path}
                className="group relative bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-700"
                style={{
                  borderColor: undefined
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = textColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-700"
                    style={{ backgroundColor: `${textColor}15` }}
                  >
                    <card.icon className="w-6 h-6 transition-colors duration-700" style={{ color: textColor }} />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-2xl mb-2 transition-colors duration-700"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}
                    >
                      {card.title}
                    </h3>
                    <p 
                      className="text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 transition-colors duration-700" style={{ color: textColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="bg-white p-8 shadow-md transition-all duration-1000"
            style={{ borderLeft: `4px solid ${textColor}` }}
          >
            <blockquote>
              <p 
                className="text-2xl text-gray-800 mb-4 italic leading-relaxed"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                "We, the people of India, having solemnly resolved to constitute India into a 
                Sovereign Socialist Secular Democratic Republic..."
              </p>
              <footer className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                — Preamble to the Constitution of India
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}