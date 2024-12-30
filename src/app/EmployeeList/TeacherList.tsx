'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Employee {
  _id: string;
  name: string;
  position: string;
  photo: string;
}

const TeacherList = () => {
  const [teachers, setTeachers] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const res = await fetch('/api/employees?role=teacher');
      const data = await res.json();
      if (data.success) setTeachers(data.data);
    };

    fetchTeachers();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">ครูผู้สอน</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 gap-6">
        {teachers.map((teacher) => (
          <div key={teacher._id} className="p-4 border rounded shadow-md">
            <Image
              src={teacher.photo}
              alt={teacher.name}
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h3 className="text-lg font-bold text-center mt-2">{teacher.name}</h3>
            <p className="text-center">{teacher.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
