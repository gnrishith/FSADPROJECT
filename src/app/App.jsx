import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { EntryScreen } from './components/entry-screen';

export default function App() {
  const [showEntry, setShowEntry] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if user has already seen the entry screen in this session
    const hasSeenEntry = sessionStorage.getItem('hasSeenEntry');
    if (hasSeenEntry) {
      setShowEntry(false);
      setIsReady(true);
    } else {
      setIsReady(true);
    }
  }, []);

  const handleEntryComplete = () => {
    sessionStorage.setItem('hasSeenEntry', 'true');
    setShowEntry(false);
  };

  if (!isReady) {
    return null;
  }

  return (
    <div 
      className="size-full"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      {showEntry && <EntryScreen onComplete={handleEntryComplete} />}
      <RouterProvider router={router} />
    </div>
  );
}
