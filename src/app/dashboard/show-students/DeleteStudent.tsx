"use client";

import { useState } from "react";

interface DeleteStudentProps {
  studentId: string;
  onDeleteSuccess: () => void;
  onClose: () => void;
}

const DeleteStudent: React.FC<DeleteStudentProps> = ({
  studentId,
  onDeleteSuccess,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/student/${studentId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete student.");
      }

      // Trigger success callback and close modal
      onDeleteSuccess();
      onClose();
    } catch (err) {
      setError((err as Error).message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <p>Are you sure you want to delete this student?</p>
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="text-gray-700 bg-gray-300 px-4 py-2 rounded"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="text-white bg-red-500 px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteStudent;
