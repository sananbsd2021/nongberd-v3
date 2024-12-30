'use client';

import { useEffect, useState } from 'react';

const PageViews = () => {
  const [views, setViews] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const updatePageViews = async () => {
      try {
        const response = await fetch('/api/page-views', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ page: 'home' }), // ระบุชื่อหน้าเว็บ
        });

        const data = await response.json();

        if (data.success) {
          setViews(data.views);
        } else {
          setError(data.error || 'Failed to fetch page views');
        }
      } catch (err) {
        console.error('Error updating page views:', err);
        setError('Something went wrong');
      }
    };

    updatePageViews();
  }, []);

  return (
    
    <div className="text-blue-700 p-4 border-2 border-indigo-500/100">
        <div className="divide-y divide-gray-400">
        {/* <h1 className="text-2xl font-bold mb-4">Welcome to Our Website</h1> */}
        {views !== null ? (
          <p className="text-lg text-center">สถิติการเข้าชม <br /> {views}</p>
          

        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <p>Loading page views...</p>
        )}
      </div>
    </div>
  );
};

export default PageViews;
