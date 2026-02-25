import { Link } from 'react-router';
import emblemImage from '../../assets/emblem.png';
import { useIndiaColors } from '../hooks/use-india-colors';

export function NotFoundPage() {
  const colors = useIndiaColors();
  const textColor = colors.name === 'white' ? '#000080' : colors.primary;
  
  return (
    <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto opacity-30">
            <img src={emblemImage} alt="State Emblem of India" className="w-full h-full object-contain" />
          </div>
        </div>
        <h1 
          className="text-6xl mb-4 transition-colors duration-1000"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: textColor }}
        >
          404
        </h1>
        <h2 
          className="text-2xl mb-4 text-gray-700"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Page Not Found
        </h2>
        <p 
          className="text-gray-600 mb-8 max-w-md mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg text-white transition-all duration-700"
          style={{ 
            fontFamily: 'var(--font-serif)',
            backgroundColor: textColor
          }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
