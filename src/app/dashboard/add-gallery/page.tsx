"use client";

import { useState } from "react";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  photo: string;
  files: { name: string; link: string }[];
}

interface File {
  name: string;
  link: string;
}

const AddGallery: React.FC = () => {
  const [galleries, setGalleries] = useState<GalleryItem[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [files, setFiles] = useState<File[]>([{ name: "", link: "" }]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validation
    if (!title || !description || !photo) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch(`/api/gallery`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, files, photo }),
      });

      if (!res.ok) {
        throw new Error("Failed to add gallery.");
      }

      setSuccess("Gallerys added successfully!");
      setTitle("");
      setDescription("");
      setPhoto("");
      setFiles([{ name: "", link: "" }]);
    } catch (error) {
      setError((error as Error).message || "An unexpected error occurred.");
    }
  };

  const handleFileChange = (
    index: number,
    field: "name" | "link",
    value: string
  ) => {
    const updatedFiles = [...files];
    updatedFiles[index][field] = value;
    setFiles(updatedFiles);
  };

  const addFileField = () => {
    setFiles([...files, { name: "", link: "" }]);
  };

  const handleDelete = async (id: string) => {
    setError(null);
    setSuccess(null);

    if (!confirm("Are you sure you want to delete this gallery?")) {
      return;
    }

    try {
      const res = await fetch(`/api/gallery/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete the gallery.");
      }

      setSuccess("Gallery deleted successfully!");
      setGalleries((prev) => prev.filter((gallery) => gallery.id !== id));
    } catch (error) {
      setError((error as Error).message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">เพิ่มภาพกิจกรรม</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">หัวข้อ</label>
          <input
            type="text"
            placeholder="หัวข้อข่าว"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">รายละเอียด</label>
          <textarea
            placeholder="รายละเอียด"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <h2 className="font-medium mb-2">ไฟล์แนบ</h2>
          {files.map((file, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                placeholder="ชื่อไฟล์"
                value={file.name}
                onChange={(e) =>
                  handleFileChange(index, "name", e.target.value)
                }
                required
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="url"
                placeholder="ลิงก์ไฟล์"
                value={file.link}
                onChange={(e) =>
                  handleFileChange(index, "link", e.target.value)
                }
                required
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">ลิงก์รูปภาพ</label>
          <input
            type="url"
            name="photo"
            placeholder="ลิงก์รูปภาพ"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="button"
          onClick={addFileField}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          เพิ่มไฟล์
        </button>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          บันทึก
        </button>
      </form>
    </div>
  );
};

export default AddGallery;
