'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Employee {
  _id: string;
  name: string;
  position: string;
  photo: string;
}

const DirectorList = () => {
  const [directors, setDirectors] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchDirectors = async () => {
      const res = await fetch('/api/employees?role=director');
      const data = await res.json();
      if (data.success) setDirectors(data.data);
    };

    fetchDirectors();
  }, []);

  return (
    <div className='container'>
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">ผู้อำนวยการ</h2>
      <div className="flex justify-center">
        {directors.map((director) => (
          <div key={director._id} className="p-4 border rounded shadow-md justify-center">
            <Image
              src={director.photo}
              alt={director.name}
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h3 className="text-lg font-bold text-center mt-2  text-gray-700">{director.name}</h3>
            <p className="text-center  text-gray-700">{director.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorList;
