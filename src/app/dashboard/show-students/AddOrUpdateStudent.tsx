"use client";

import { useState } from "react";

interface Student {
  _id?: string;
  fristname: string;
  lastname: string;
  age: number;
  glevel: string;
  grade: string;
}

interface AddOrUpdateStudentProps {
  student?: Student;
  onClose: () => void;
  onRefresh: () => void;
}

const AddOrUpdateStudent: React.FC<AddOrUpdateStudentProps> = ({
  student,
  onClose,
  onRefresh,
}) => {
  const [fristname, setFristname] = useState(student?.fristname || "");
  const [lastname, setLastname] = useState(student?.lastname || "");
  const [age, setAge] = useState(student?.age || 0);
  const [glevel, setGlevel] = useState(student?.glevel || "");
  const [grade, setGrade] = useState(student?.grade || "");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const payload: Student = { fristname, lastname, age, glevel, grade };

    try {
      const res = await fetch(`/api/student${student?._id ? `/${student._id}` : ""}`, {
        method: student?._id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save student.");

      onClose();
      onRefresh();
    } catch (error) {
      setError((error as Error).message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {student ? "Edit Student" : "Add Student"}
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              value={fristname}
              onChange={(e) => setFristname(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Grade Level</label>
            <input
              type="text"
              value={glevel}
              onChange={(e) => setGlevel(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Grade</label>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-700 bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-white bg-blue-500 px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrUpdateStudent;
