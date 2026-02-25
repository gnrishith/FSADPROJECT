import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, BookOpen } from 'lucide-react';
import { useIndiaColors } from '../hooks/use-india-colors';
import rajendraImg from "../../assets/rajendra.jpeg";
import radhaImg from "../../assets/radha.png";
import zanikImg from "../../assets/zanik.png";
import giriImg from "../../assets/giri.png";
import ahemdImg from "../../assets/ahemd.png";
import sanjeevImg from "../../assets/sanjeev.png";

const PRESIDENTS = [
  {
    name: 'Dr. Rajendra Prasad',
    term: '1950 - 1962',
    description: 'First President of India, served for two consecutive terms',
    image: rajendraImg,
  },
  {
    name: 'Dr. S. Radhakrishnan',
    term: '1962 - 1967',
    description: 'Philosopher and statesman, second President of India',
    image: radhaImg,
  },
  {
    name: 'Dr. Zakir Husain',
    term: '1967 - 1969',
    description: 'First Muslim President of India, educator and scholar',
    image: zanikImg,
  },
  {
    name: 'V. V. Giri',
    term: '1969 - 1974',
    description: 'Trade unionist and the first president to be elected as an independent candidate',
    image: giriImg, 
   },
  {
    name: 'Fakhruddin Ali Ahmed',
    term: '1974 - 1977',
    description: 'Fifth President of India, served during the Emergency period',
    image: ahemdImg, 
 },
  {
    name: 'Neelam Sanjiva Reddy',
    term: '1977 - 1982',
    description: 'Youngest President and the only person to be elected unopposed',
    image: sanjeevImg, 
 },
];

const MILESTONES = [
  {
    year: '1950',
    title: 'Constitution Comes into Force',
    description: 'On January 26, 1950, the Constitution of India came into effect, marking India as a sovereign democratic republic.',
  },
  {
    year: '1951',
    title: 'First General Elections',
    description: 'The first general elections held under the new Constitution, establishing parliamentary democracy.',
  },
  {
    year: '1956',
    title: 'States Reorganisation Act',
    description: 'Major reorganization of states on linguistic lines, reshaping India\'s federal structure.',
  },
  {
    year: '1976',
    title: '42nd Amendment',
    description: 'One of the most comprehensive amendments, adding the words "Socialist" and "Secular" to the Preamble.',
  },
  {
    year: '1992',
    title: 'Panchayati Raj Amendments',
    description: '73rd and 74th Amendments established constitutional status for local self-governance.',
  },
  {
    year: '2002',
    title: '86th Amendment',
    description: 'Right to Education made a Fundamental Right under Article 21A.',
  },
  {
    year: '2019',
    title: '103rd Amendment',
    description: 'Provided for 10% reservation for economically weaker sections in education and employment.',
  },
];

export function HistoryPage() {
  const colors = useIndiaColors();
  const textColor = colors.name === 'white' ? '#000080' : colors.primary;
  
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-4xl md:text-5xl mb-4 transition-colors duration-1000"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}
          >
            Constitutional History
          </h1>
          <p 
            className="text-xl text-gray-700 max-w-3xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            A journey through 75+ years of democratic governance and constitutional evolution
          </p>
        </div>
      </section>

      {/* Former Presidents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 mr-3 transition-colors duration-1000" style={{ color: textColor }} />
            <h2 
              className="text-3xl text-gray-900"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Former Presidents of India
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRESIDENTS.map((president, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-700"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = textColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={president.image}
                    alt={president.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div 
                    className="text-sm mb-2 transition-colors duration-1000"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: textColor }}
                  >
                    {president.term}
                  </div>
                  <h3 
                    className="text-xl mb-2 text-gray-900"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                  >
                    {president.name}
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {president.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p 
              className="text-gray-600"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Showing first 6 presidents. India has had 15 presidents serving from 1950 to present.
            </p>
          </div>
        </div>
      </section>

      {/* Constitutional Milestones */}
      <section className="py-16 bg-gray-50 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <BookOpen className="w-8 h-8 mr-3 transition-colors duration-1000" style={{ color: textColor }} />
            <h2 
              className="text-3xl text-gray-900"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Constitutional Milestones
            </h2>
          </div>

          <div className="space-y-6">
            {MILESTONES.map((milestone, index) => (
              <div 
                key={index}
                className="bg-white border-2 rounded-lg p-6 hover:shadow-md transition-all duration-700 flex items-start space-x-6"
                style={{ borderColor: '#e5e7eb' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = textColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <div 
                  className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-2xl transition-colors duration-1000"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontWeight: 600,
                    backgroundColor: `${textColor}15`,
                    color: textColor
                  }}
                >
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-2xl mb-2 text-gray-900"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                  >
                    {milestone.title}
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-8 bg-white rounded-lg border-2 transition-all duration-1000" style={{ borderColor: `${textColor}20` }}>
              <div className="text-5xl mb-3 transition-colors duration-1000" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}>
                105+
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                Constitutional Amendments
              </div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg border-2 transition-all duration-1000" style={{ borderColor: `${textColor}20` }}>
              <div className="text-5xl mb-3 transition-colors duration-1000" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}>
                75+
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                Years of Democracy
              </div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg border-2 transition-all duration-1000" style={{ borderColor: `${textColor}20` }}>
              <div className="text-5xl mb-3 transition-colors duration-1000" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}>
                448
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                Articles (Original)
              </div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg border-2 transition-all duration-1000" style={{ borderColor: `${textColor}20` }}>
              <div className="text-5xl mb-3 transition-colors duration-1000" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}>
                17
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                General Elections
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
