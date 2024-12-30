"use client";

import { useState } from "react";

interface File {
  name: string;
  link: string;
}

interface Gallery {
  id?: string;
  title: string;
  description: string;
  photo: string;
  files: File[];
}

interface AddOrUpdateGalleryProps {
  gallery?: Gallery;
  onClose: () => void;
  onRefresh: () => void;
}

const AddOrUpdateGallery: React.FC<AddOrUpdateGalleryProps> = ({
  gallery,
  onClose,
  onRefresh,
}) => {
  const [title, setTitle] = useState(gallery?.title || "");
  const [description, setDescription] = useState(gallery?.description || "");
  const [photo, setPhoto] = useState(gallery?.photo || "");
  const [files, setFiles] = useState<File[]>(gallery?.files || [{ name: "", link: "" }]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const payload = { title, description, photo, files };

    try {
      const res = await fetch(`/api/gallery${gallery?.id ? `/${gallery.id}` : ""}`, {
        method: gallery?.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gallery?.id ? { id: gallery.id, ...payload } : payload),
      });

      if (!res.ok) throw new Error("Failed to save gallery.");

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
          {gallery ? "Edit Gallery" : "Add Gallery"}
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="url"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <h2 className="font-medium mb-2">Files</h2>
            {files.map((file, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  placeholder="File Name"
                  value={file.name}
                  onChange={(e) =>
                    setFiles((prev) =>
                      prev.map((f, i) =>
                        i === index ? { ...f, name: e.target.value } : f
                      )
                    )
                  }
                  className="w-full p-2 border rounded mb-2"
                />
                <input
                  type="url"
                  placeholder="File Link"
                  value={file.link}
                  onChange={(e) =>
                    setFiles((prev) =>
                      prev.map((f, i) =>
                        i === index ? { ...f, link: e.target.value } : f
                      )
                    )
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
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

export default AddOrUpdateGallery;
