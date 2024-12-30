"use client";

import { useState } from "react";
// import { useRouter } from 'next/navigation';

const AddNews = () => {
  // const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [photo, setPhoto] = useState("");
  const [files, setFiles] = useState([{ name: "", link: "" }]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
      const res = await fetch(`/api/newssell`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, files }),
      });

      if (!res.ok) {
        throw new Error("Failed to add news");
      }

      console.log("News added successfully");
    } catch (error) {
      console.error(error);
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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">เพิ่มข่าวประกวดราคา</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">หัวข้อข่าว</label>
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
          <h2>ไฟล์แนบ</h2>
          {files.map((file, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="ชื่อไฟล์"
                value={file.name}
                onChange={(e) =>
                  handleFileChange(index, "name", e.target.value)
                }
                required
                className="w-full p-2 border rounded mb-4"
              />

              <input
                type="text"
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

        {/* <div className="mb-4">
          <label className="block text-sm font-medium mb-1">ลิงก์รูปภาพ</label>
          <input
            type="url"
            name="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div> */}

        <button
          type="button"
          onClick={addFileField}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          เพิ่มไฟล์
        </button>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          บันทึก
        </button>
      </form>
    </div>
  );
};

export default AddNews;
