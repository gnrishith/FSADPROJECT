import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Building, Calendar } from 'lucide-react';
import { useIndiaColors } from '../hooks/use-india-colors';
import ambedkarImg from "../../assets/ambedkar.jpeg";
import rajendraImg from "../../assets/rajendra.jpeg";
import jawahalImg from "../../assets/jawahal.jpeg";
import sardharImg from "../../assets/sardhar.jpeg";
const FRAMERS = [
  {
    name: 'Dr. B.R. Ambedkar',
    role: 'Chairman, Drafting Committee',
    description: 'Principal architect of the Indian Constitution, ensuring social justice and equality for all citizens.',
    image: ambedkarImg,  },
  {
    name: 'Dr. Rajendra Prasad',
    role: 'President, Constituent Assembly',
    description: 'First President of India and leader of the Constituent Assembly during the drafting process.',
    image: rajendraImg,

  },
  {
    name: 'Sardar Vallabhbhai Patel',
    role: 'Member, Constituent Assembly',
    description: 'Key figure in integrating princely states and shaping the administrative framework.',
    image: sardharImg,
  },
  {
    name: 'Jawaharlal Nehru',
    role: 'Member, Constituent Assembly',
    description: 'First Prime Minister and influential voice in establishing democratic principles.',
    image: jawahalImg,
  },
];

const COMMITTEES = [
  { name: 'Drafting Committee', chairman: 'Dr. B.R. Ambedkar', members: 7 },
  { name: 'Union Powers Committee', chairman: 'Jawaharlal Nehru', members: 15 },
  { name: 'Union Constitution Committee', chairman: 'Jawaharlal Nehru', members: 15 },
  { name: 'Provincial Constitution Committee', chairman: 'Sardar Patel', members: 25 },
  { name: 'Advisory Committee on Fundamental Rights', chairman: 'Sardar Patel', members: 51 },
  { name: 'Committee on the Functions of the Constituent Assembly', chairman: 'G.V. Mavalankar', members: 15 },
];

const TIMELINE = [
  { date: '9 December 1946', event: 'Constituent Assembly first convened' },
  { date: '11 December 1946', event: 'Dr. Rajendra Prasad elected as President' },
  { date: '13 December 1946', event: 'Jawaharlal Nehru presents Objectives Resolution' },
  { date: '22 January 1947', event: 'Objectives Resolution adopted' },
  { date: '29 August 1947', event: 'Drafting Committee appointed with Dr. B.R. Ambedkar as Chairman' },
  { date: '4 November 1947', event: 'Draft Constitution submitted to President' },
  { date: '26 November 1949', event: 'Constitution adopted by the Constituent Assembly' },
  { date: '26 January 1950', event: 'Constitution came into force; Republic Day of India' },
];

export function ExplorePage() {
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
            Explore the Making
          </h1>
          <p 
            className="text-xl text-gray-700 max-w-3xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Discover the visionaries, committees, and historic journey that shaped the world's longest written constitution
          </p>
        </div>
      </section>

      {/* Constitution Framers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 mr-3 transition-colors duration-1000" style={{ color: textColor }} />
            <h2 
              className="text-3xl text-gray-900"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Constitution Framers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FRAMERS.map((framer) => (
              <div 
                key={framer.name}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-700"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = textColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-40 sm:h-48 h-64 flex-shrink-0">
                    <ImageWithFallback
                      src={framer.image}
                      alt={framer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 
                      className="text-xl mb-2 text-gray-900"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                    >
                      {framer.name}
                    </h3>
                    <div 
                      className="text-sm mb-3 transition-colors duration-1000"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: textColor }}
                    >
                      {framer.role}
                    </div>
                    <p 
                      className="text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {framer.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Constituent Assembly */}
      <section className="py-16 bg-gray-50 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Building className="w-8 h-8 mr-3 transition-colors duration-1000" style={{ color: textColor }} />
            <h2 
              className="text-3xl text-gray-900"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Constituent Assembly
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
              <div className="text-4xl mb-2 transition-colors duration-1000" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}>
                299
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                Total Members
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
              <div className="text-4xl mb-2 transition-colors duration-1000" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}>
                2 years, 11 months
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                Time Taken
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
              <div className="text-4xl mb-2 transition-colors duration-1000" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}>
                165
              </div>
              <div className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                Days of Meetings
              </div>
            </div>
          </div>

          {/* Committees */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
            <h3 
              className="text-3xl text-gray-900"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Key Committees
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMMITTEES.map((committee, index) => (
                <div 
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div 
                    className="font-semibold text-gray-900 mb-1"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {committee.name}
                  </div>
                  <div 
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Chairman: {committee.chairman} • {committee.members} members
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Calendar className="w-8 h-8 mr-3 transition-colors duration-1000" style={{ color: textColor }} />
            <h2 
              className="text-3xl text-gray-900"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            >
              Timeline of Events
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {TIMELINE.map((item, index) => (
                <div key={index} className="relative pl-20">
                  <div 
                    className="absolute left-6 w-5 h-5 rounded-full border-4 border-white shadow-md transition-colors duration-1000"
                    style={{ backgroundColor: textColor }}
                  ></div>
                  <div 
                    className="bg-white border rounded-lg p-6 hover:shadow-md transition-all duration-700"
                    style={{ borderColor: '#e5e7eb' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = textColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                    }}
                  >
                    <div 
                      className="text-sm mb-2 transition-colors duration-1000"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: textColor }}
                    >
                      {item.date}
                    </div>
                    <div 
                      className="text-gray-900"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {item.event}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
