"use client";

import { useState, useEffect } from "react";
import AddOrUpdateStudent from "./AddOrUpdateStudent";
import DeleteStudent from "./DeleteStudent";

interface Student {
  _id: string;
  fristname: string;
  age: number;
  lastname: string;
  glevel: string;
  grade: string;
  createdAt: string;
}

const StudentsList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [editStudent, setEditStudent] = useState<Student | null>(null);
  const [deleteStudentId, setDeleteStudentId] = useState<string | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch("/api/student");
      if (!res.ok) throw new Error("Failed to fetch students.");
      const data = await res.json();
      setStudents(data.data);
    } catch (error) {
      setError((error as Error).message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Student List</h1>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">First Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Last Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Age</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Grade Level</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Grade</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Created At</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="border-b">
                <td className="px-6 py-4">{student.fristname}</td>
                <td className="px-6 py-4">{student.lastname}</td>
                <td className="px-6 py-4">{student.age}</td>
                <td className="px-6 py-4">{student.glevel}</td>
                <td className="px-6 py-4">{student.grade}</td>
                <td className="px-6 py-4">
                  {new Date(student.createdAt).toLocaleString()}
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => setEditStudent(student)}
                    className="text-white bg-blue-500 px-4 py-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setDeleteStudentId(student._id)}
                    className="text-white bg-red-500 px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editStudent && (
        <AddOrUpdateStudent
          student={editStudent}
          onClose={() => setEditStudent(null)}
          onRefresh={fetchStudents}
        />
      )}

      {deleteStudentId && (
        <DeleteStudent
          studentId={deleteStudentId}
          onDeleteSuccess={() => {
            setDeleteStudentId(null);
            fetchStudents();
          }}
          onClose={() => setDeleteStudentId(null)}
        />
      )}
    </div>
  );
};

export default StudentsList;
