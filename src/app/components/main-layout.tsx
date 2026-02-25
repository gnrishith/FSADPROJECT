import { Link, Outlet, useLocation } from 'react-router';
import { Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import emblemImage from 'figma:asset/3f2aee9b7deb0d39b0314a28b63fbee3c2e82c24.png';
import { useIndiaColors } from '../hooks/use-india-colors';

const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
  { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्' },
];

export function MainLayout() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const colors = useIndiaColors();

  const navLinks = [
    { label: 'Read', path: '/read' },
    { label: 'Explore', path: '/explore' },
    { label: 'History', path: '/history' },
    { label: 'Preamble', path: '/preamble' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const currentLanguage = LANGUAGES.find(lang => lang.code === selectedLanguage) || LANGUAGES[0];

  return (
    <div 
      className="min-h-screen transition-colors duration-1000" 
      style={{ 
        fontFamily: 'var(--font-body)',
        backgroundColor: colors.background
      }}
    >
      {/* Tricolor top border */}
      <div className="h-1 flex">
        <div className="flex-1 bg-[#FF9933]"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[#138808]"></div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-14 h-14">
                <img src={emblemImage} alt="State Emblem of India" className="w-full h-full object-contain" />
              </div>
              <div style={{ fontFamily: 'var(--font-serif)' }}>
                <div className="text-sm text-gray-600">Constitution of</div>
                <div className="font-semibold text-lg leading-tight">India</div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-1 py-2 transition-colors duration-700 ${
                    isActive(link.path)
                      ? ''
                      : 'text-gray-700'
                  }`}
                  style={{ 
                    fontFamily: 'var(--font-serif)',
                    color: isActive(link.path) ? (colors.name === 'white' ? '#000080' : colors.primary) : undefined
                  }}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 transition-colors duration-700"
                      style={{ backgroundColor: colors.name === 'white' ? '#000080' : colors.primary }}
                    ></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Search and Language */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden lg:block">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-64 transition-all duration-700"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    '--tw-ring-color': colors.name === 'white' ? '#000080' : colors.primary
                  } as React.CSSProperties}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>

              <div className="relative">
                <button 
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <span style={{ fontFamily: 'var(--font-body)' }}>{currentLanguage.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg max-h-96 overflow-y-auto z-50">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang.code);
                          setIsLanguageDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                          selectedLanguage === lang.code ? 'bg-gray-100' : ''
                        }`}
                      >
                        <div style={{ fontFamily: 'var(--font-body)' }}>
                          <div className="font-medium text-gray-900">{lang.name}</div>
                          <div className="text-sm text-gray-600">{lang.nativeName}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div style={{ fontFamily: 'var(--font-serif)' }} className="text-gray-600 text-sm">
              © 2026 Constitution of India. All rights reserved.
            </div>
            <div className="flex space-x-6" style={{ fontFamily: 'var(--font-serif)' }}>
              <a href="#" className="text-gray-600 hover:text-[#000080] text-sm">About</a>
              <a href="#" className="text-gray-600 hover:text-[#000080] text-sm">Contact</a>
              <a href="#" className="text-gray-600 hover:text-[#000080] text-sm">Accessibility</a>
            </div>
          </div>
        </div>
        
        {/* Tricolor bottom border */}
        <div className="h-1 flex">
          <div className="flex-1 bg-[#FF9933]"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#138808]"></div>
        </div>
      </footer>
    </div>
  );
}