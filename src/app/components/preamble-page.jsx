import emblemImage from '../../assets/emblem.png';
import { useIndiaColors } from '../hooks/use-india-colors';

export function PreamblePage() {
  const colors = useIndiaColors();
  const textColor = colors.name === 'white' ? '#000080' : colors.primary;
  
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-6">
            <img src={emblemImage} alt="State Emblem of India" className="w-16 h-16 object-contain" />
          </div>
          <h1 
            className="text-3xl md:text-4xl mb-2 transition-colors duration-1000"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}
          >
            The Preamble
          </h1>
          <p 
            className="text-gray-600"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            The soul of the Constitution
          </p>
        </div>

        {/* Preamble Content */}
        <div className="relative">
          {/* Decorative border */}
          <div 
            className="absolute inset-0 border-4 border-double rounded-lg transition-colors duration-1000"
            style={{ borderColor: textColor }}
          ></div>
          <div className="absolute inset-2 border-2 border-[#138808] rounded-lg"></div>
          
          {/* Parchment-style background */}
          <div 
            className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50 rounded-lg p-8 md:p-12 shadow-2xl"
            style={{
              backgroundImage: 'linear-gradient(to bottom right, #fffbeb, #ffffff, #fffbeb)',
            }}
          >
            {/* Top decoration */}
            <div className="flex justify-center mb-8">
              <div 
                className="h-1 w-32 bg-gradient-to-r transition-colors duration-1000" 
                style={{ 
                  backgroundImage: `linear-gradient(to right, transparent, ${textColor}, transparent)`
                }}
              ></div>
            </div>

            {/* Preamble text */}
            <div 
              className="text-center space-y-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed" style={{ fontWeight: 600 }}>
                WE, THE PEOPLE OF INDIA,
              </p>
              
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                having solemnly resolved to constitute India into a
              </p>

              <p 
                className="text-2xl md:text-3xl leading-relaxed transition-colors duration-1000" 
                style={{ fontWeight: 600, color: textColor }}
              >
                SOVEREIGN SOCIALIST SECULAR
                <br />
                DEMOCRATIC REPUBLIC
              </p>

              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                and to secure to all its citizens:
              </p>

              <div className="space-y-3 text-xl md:text-2xl text-gray-900">
                <p className="leading-relaxed">
                  <span 
                    className="transition-colors duration-1000" 
                    style={{ fontWeight: 600, color: textColor }}
                  >
                    JUSTICE
                  </span>, social, economic and political;
                </p>
                <p className="leading-relaxed">
                  <span 
                    className="transition-colors duration-1000" 
                    style={{ fontWeight: 600, color: textColor }}
                  >
                    LIBERTY
                  </span> of thought, expression, belief, faith and worship;
                </p>
                <p className="leading-relaxed">
                  <span 
                    className="transition-colors duration-1000" 
                    style={{ fontWeight: 600, color: textColor }}
                  >
                    EQUALITY
                  </span> of status and of opportunity;
                </p>
                <p className="leading-relaxed">
                  and to promote among them all
                </p>
                <p className="leading-relaxed">
                  <span 
                    className="transition-colors duration-1000" 
                    style={{ fontWeight: 600, color: textColor }}
                  >
                    FRATERNITY
                  </span> assuring the dignity of the individual
                  <br />
                  and the unity and integrity of the Nation;
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                  IN OUR CONSTITUENT ASSEMBLY
                </p>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                  this twenty-sixth day of November, 1949,
                </p>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                  do
                </p>
                <p className="text-2xl md:text-3xl text-[#138808] leading-relaxed" style={{ fontWeight: 600 }}>
                  HEREBY ADOPT, ENACT AND GIVE TO OURSELVES
                  <br />
                  THIS CONSTITUTION.
                </p>
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="flex justify-center mt-8">
              <div 
                className="h-1 w-32 bg-gradient-to-r transition-colors duration-1000" 
                style={{ 
                  backgroundImage: 'linear-gradient(to right, transparent, #138808, transparent)'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Explanation Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            className="bg-white border-2 rounded-lg p-6 transition-all duration-1000"
            style={{ borderColor: '#e5e7eb' }}
          >
            <h3 
              className="text-xl mb-3 transition-colors duration-1000"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}
            >
              Adopted on
            </h3>
            <p 
              className="text-gray-700 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              The Preamble was adopted by the Constituent Assembly on 26th November 1949, 
              and came into effect on 26th January 1950, celebrated as the Republic Day of India.
            </p>
          </div>

          <div 
            className="bg-white border-2 rounded-lg p-6 transition-all duration-1000"
            style={{ borderColor: '#e5e7eb' }}
          >
            <h3 
              className="text-xl mb-3 transition-colors duration-1000"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}
            >
              Significance
            </h3>
            <p 
              className="text-gray-700 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              The Preamble embodies the fundamental values and guiding principles of the Constitution. 
              It declares India as a sovereign, socialist, secular, democratic republic.
            </p>
          </div>

          <div 
            className="bg-white border-2 rounded-lg p-6 transition-all duration-1000"
            style={{ borderColor: '#e5e7eb' }}
          >
            <h3 
              className="text-xl mb-3 transition-colors duration-1000"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}
            >
              Key Amendments
            </h3>
            <p 
              className="text-gray-700 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              The 42nd Amendment Act of 1976 added three important words to the Preamble: 
              "Socialist," "Secular," and "Integrity," reinforcing India's commitment to these ideals.
            </p>
          </div>

          <div 
            className="bg-white border-2 rounded-lg p-6 transition-all duration-1000"
            style={{ borderColor: '#e5e7eb' }}
          >
            <h3 
              className="text-xl mb-3 transition-colors duration-1000"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}
            >
              Legal Status
            </h3>
            <p 
              className="text-gray-700 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              While the Preamble is not legally enforceable, the Supreme Court has held that 
              it is a key to understanding the Constitution and can be used to interpret its provisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
