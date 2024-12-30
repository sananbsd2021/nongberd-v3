"use client"

import React, { useState, useEffect } from 'react';

interface Historys {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
}

async function fetchHistorys(): Promise<Historys[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const res = await fetch(`${baseUrl}/api/history`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch historys');
  }

  const data = await res.json();
  return data.data;
}

export default function HistorysListPage() {
  const [historysList, setHistorysList] = useState<Historys[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getHistorys = async () => {
      try {
        const historys = await fetchHistorys();
        setHistorysList(historys);
      } catch (error) {
        setError('Error fetching historys. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getHistorys();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="rounded text-xl font-bold mb-6 bg-blue-600 p-2 mx-auto flex justify-center text-white">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="rounded text-xl font-bold mb-6 bg-red-600 p-2 mx-auto flex justify-center text-white">
          {error}
        </h1>
      </div>
    );
  }

  if (historysList.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="rounded text-xl font-bold mb-6 bg-yellow-600 p-2 mx-auto flex justify-center text-white">
          No historys available
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="rounded text-xl font-bold mb-6 bg-blue-600 p-2 mx-auto flex justify-center text-white">
        ประวัติโรงเรียน
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {historysList.map((history) => (
          <div
            key={history._id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-lg font-bold mt-4">{history.title}</h2>
            <p className="text-gray-600 mb-4">{history.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
