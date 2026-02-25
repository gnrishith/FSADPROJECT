import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useIndiaColors } from '../hooks/use-india-colors';

const PARTS = [
  { number: 'I', title: 'The Union and its Territory', articles: '1-4' },
  { number: 'II', title: 'Citizenship', articles: '5-11' },
  { number: 'III', title: 'Fundamental Rights', articles: '12-35' },
  { number: 'IV', title: 'Directive Principles of State Policy', articles: '36-51' },
  { number: 'IVA', title: 'Fundamental Duties', articles: '51A' },
  { number: 'V', title: 'The Union', articles: '52-151' },
  { number: 'VI', title: 'The States', articles: '152-237' },
  { number: 'VII', title: 'States in the B part of the First Schedule (Repealed)', articles: '-' },
  { number: 'VIII', title: 'The Union Territories', articles: '239-242' },
  { number: 'IX', title: 'The Panchayats', articles: '243-243O' },
  { number: 'IXA', title: 'The Municipalities', articles: '243P-243ZG' },
  { number: 'IXB', title: 'The Co-operative Societies', articles: '243ZH-243ZT' },
  { number: 'X', title: 'The Scheduled and Tribal Areas', articles: '244-244A' },
  { number: 'XI', title: 'Relations between the Union and the States', articles: '245-263' },
  { number: 'XII', title: 'Finance, Property, Contracts and Suits', articles: '264-300A' },
  { number: 'XIII', title: 'Trade, Commerce and Intercourse', articles: '301-307' },
  { number: 'XIV', title: 'Services under the Union and the States', articles: '308-323' },
  { number: 'XIVA', title: 'Tribunals', articles: '323A-323B' },
  { number: 'XV', title: 'Elections', articles: '324-329A' },
  { number: 'XVI', title: 'Special Provisions for Certain Classes', articles: '330-342' },
  { number: 'XVII', title: 'Official Language', articles: '343-351' },
  { number: 'XVIII', title: 'Emergency Provisions', articles: '352-360' },
  { number: 'XIX', title: 'Miscellaneous', articles: '361-367' },
  { number: 'XX', title: 'Amendment of the Constitution', articles: '368' },
  { number: 'XXI', title: 'Temporary, Transitional and Special Provisions', articles: '369-392' },
  { number: 'XXII', title: 'Short title, Commencement, Authoritative text in Hindi', articles: '393-395' },
];

const SCHEDULES = [
  'First Schedule - States and Union Territories',
  'Second Schedule - Provisions as to the President, Governors, etc.',
  'Third Schedule - Forms of Oaths or Affirmations',
  'Fourth Schedule - Allocation of seats in the Council of States',
  'Fifth Schedule - Provisions as to Administration and Control of Scheduled Areas',
  'Sixth Schedule - Provisions as to Administration of Tribal Areas',
  'Seventh Schedule - Union, State and Concurrent Lists',
  'Eighth Schedule - Languages',
  'Ninth Schedule - Validation of certain Acts and Regulations',
  'Tenth Schedule - Provisions as to Disqualification on ground of defection',
  'Eleventh Schedule - Powers, authority and responsibilities of Panchayats',
  'Twelfth Schedule - Powers, authority and responsibilities of Municipalities',
];

export function ReadPage() {
  const [selectedSection, setSelectedSection] = useState('part-III');
  const [expandedCategory, setExpandedCategory] = useState('parts');
  const colors = useIndiaColors();
  const textColor = colors.name === 'white' ? '#000080' : colors.primary;

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? 'parts' : category);
  };

  return (
    <div className="flex h-[calc(100vh-6rem)]">
      {/* Sidebar */}
      <aside className="w-80 border-r border-gray-200 bg-gray-50 overflow-y-auto">
        <div className="p-4">
          <h2 
            className="text-xl mb-4 text-gray-900"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
          >
            Contents
          </h2>

          {/* Parts */}
          <div className="mb-4">
            <button
              onClick={() => toggleCategory('parts')}
              className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              <span 
                className="font-semibold text-gray-900"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Parts
              </span>
              {expandedCategory === 'parts' ? (
                <ChevronDown className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-600" />
              )}
            </button>
            
            {expandedCategory === 'parts' && (
              <div className="mt-2 space-y-1">
                {PARTS.map((part) => (
                  <button
                    key={part.number}
                    onClick={() => setSelectedSection(`part-${part.number}`)}
                    className={`w-full text-left p-3 rounded-md transition-all duration-700 ${
                      selectedSection === `part-${part.number}`
                        ? 'text-white'
                        : 'bg-white hover:bg-gray-100 text-gray-700'
                    }`}
                    style={{
                      backgroundColor: selectedSection === `part-${part.number}` ? textColor : undefined
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-serif)' }}>
                      <div className="font-semibold text-sm">Part {part.number}</div>
                      <div className="text-sm mt-1 leading-snug">{part.title}</div>
                      <div className="text-xs mt-1 opacity-75">Articles {part.articles}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Schedules */}
          <div>
            <button
              onClick={() => toggleCategory('schedules')}
              className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              <span 
                className="font-semibold text-gray-900"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Schedules
              </span>
              {expandedCategory === 'schedules' ? (
                <ChevronDown className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-600" />
              )}
            </button>
            
            {expandedCategory === 'schedules' && (
              <div className="mt-2 space-y-1">
                {SCHEDULES.map((schedule, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSection(`schedule-${index + 1}`)}
                    className={`w-full text-left p-3 rounded-md transition-all duration-700 ${
                      selectedSection === `schedule-${index + 1}`
                        ? 'text-white'
                        : 'bg-white hover:bg-gray-100 text-gray-700'
                    }`}
                    style={{
                      backgroundColor: selectedSection === `schedule-${index + 1}` ? textColor : undefined
                    }}
                  >
                    <div className="text-sm" style={{ fontFamily: 'var(--font-serif)' }}>
                      {schedule}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {selectedSection === 'part-III' && (
            <>
              <div className="mb-8">
                <div className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                  Part III • Articles 12-35
                </div>
                <h1 
                  className="text-4xl mb-4 transition-colors duration-1000"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}
                >
                  Fundamental Rights
                </h1>
                <div 
                  className="h-1 w-20 transition-colors duration-1000" 
                  style={{ backgroundColor: textColor }}
                ></div>
              </div>

              <div className="prose prose-lg max-w-none" style={{ fontFamily: 'var(--font-body)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}>Article 14 - Equality before law</h3>
                <p className="text-gray-700 leading-relaxed">
                  The State shall not deny to any person equality before the law or the equal protection 
                  of the laws within the territory of India.
                </p>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }} className="mt-8">
                  Article 15 - Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  (1) The State shall not discriminate against any citizen on grounds only of religion, race, 
                  caste, sex, place of birth or any of them.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  (2) No citizen shall, on grounds only of religion, race, caste, sex, place of birth or any of them, 
                  be subject to any disability, liability, restriction or condition with regard to—
                </p>
                <ul className="text-gray-700 leading-relaxed">
                  <li>access to shops, public restaurants, hotels and places of public entertainment; or</li>
                  <li>the use of wells, tanks, bathing ghats, roads and places of public resort maintained wholly 
                  or partly out of State funds or dedicated to the use of the general public.</li>
                </ul>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }} className="mt-8">
                  Article 19 - Protection of certain rights regarding freedom of speech, etc.
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  (1) All citizens shall have the right—
                </p>
                <ol className="text-gray-700 leading-relaxed" type="a">
                  <li>to freedom of speech and expression;</li>
                  <li>to assemble peaceably and without arms;</li>
                  <li>to form associations or unions;</li>
                  <li>to move freely throughout the territory of India;</li>
                  <li>to reside and settle in any part of the territory of India; and</li>
                  <li>to practice any profession, or to carry on any occupation, trade or business.</li>
                </ol>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }} className="mt-8">
                  Article 21 - Protection of life and personal liberty
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No person shall be deprived of his life or personal liberty except according to procedure 
                  established by law.
                </p>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }} className="mt-8">
                  Article 21A - Right to education
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The State shall provide free and compulsory education to all children of the age of six to 
                  fourteen years in such manner as the State may, by law, determine.
                </p>

                <div 
                  className="mt-12 p-6 bg-gray-50 rounded-r-lg transition-all duration-1000"
                  style={{ borderLeft: `4px solid ${textColor}` }}
                >
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                    <strong>Note:</strong> This is a sample display of articles. The complete text contains 
                    all articles from 12 to 35 covering various fundamental rights including Right to Equality, 
                    Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and 
                    Educational Rights, and Right to Constitutional Remedies.
                  </p>
                </div>
              </div>
            </>
          )}

          {selectedSection !== 'part-III' && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                Select a Part or Schedule to view its contents
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
