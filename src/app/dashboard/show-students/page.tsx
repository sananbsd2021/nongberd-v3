// 'use client';

// import { useEffect, useState } from 'react';

// type Student = {
//   _id: string;
//   fristname: string;
//   age: number;
//   lastname: string;
//   glevel: string;
//   grade: string;
//   createdAt: string;
// };

// const ShowStudentsList = () => {
//   const [students, setStudents] = useState<Student[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await fetch('/api/student');
//         const data = await response.json();

//         if (data.success) {
//           setStudents(data.data);
//         } else {
//           setError(data.error || 'Failed to fetch students');
//         }
//       } catch (err) {
//         console.error('Error fetching students:', err);
//         setError('Something went wrong');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">ข้อมูลนักเรียน</h1>
//       {students.length > 0 ? (
//         <table className="table-auto w-full border-collapse border border-gray-400">
//           <thead>
//             <tr>
//               <th className="border border-gray-400 px-4 py-2">ชื่อ</th>
//               <th className="border border-gray-400 px-4 py-2">นามสกุล</th>
//               <th className="border border-gray-400 px-4 py-2">อายุ</th>
//               <th className="border border-gray-400 px-4 py-2">ระดับชั้น</th>
//               <th className="border border-gray-400 px-4 py-2">เกรด</th>
//               <th className="border border-gray-400 px-4 py-2">created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student._id}>
//                 <td className="border border-gray-400 px-4 py-2">{student.fristname}</td>
//                 <td className="border border-gray-400 px-4 py-2">{student.lastname}</td>
//                 <td className="border border-gray-400 px-4 py-2">{student.age}</td>
//                 <td className="border border-gray-400 px-4 py-2">{student.glevel}</td>
//                 <td className="border border-gray-400 px-4 py-2">{student.grade}</td>
//                 <td className="border border-gray-400 px-4 py-2">
//                   {new Date(student.createdAt).toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No students found.</p>
//       )}
//     </div>
//   );
// };

// export default ShowStudentsList;

import React from 'react'
import ShowStudentsList from './StudentsList'

const page = () => {
  return (
    <div>
      <ShowStudentsList />
    </div>
  )
}

export default page
