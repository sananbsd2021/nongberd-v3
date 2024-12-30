'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Employee {
  _id: string;
  name: string;
  position: string;
  photo: string;
}

const StaffList = () => {
  const [staff, setStaff] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchStaff = async () => {
      const res = await fetch('/api/employees?role=staff');
      const data = await res.json();
      if (data.success) setStaff(data.data);
    };

    fetchStaff();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">ภารโรง</h2>
      <div className="flex justify-center">
        {staff.map((person) => (
          <div key={person._id} className="p-4 border rounded shadow-md justify-center">
            <Image
              src={person.photo}
              alt={person.name}
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h3 className="text-lg font-bold text-center mt-2 text-gray-700">{person.name}</h3>
            <p className="text-center text-gray-700">{person.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffList;
