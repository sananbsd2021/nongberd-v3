"use client";

import { useState, useEffect } from "react";
import AddOrUpdateGallery from "./AddOrUpdateGallery";
import DeleteGallery from "./DeleteGallery";
import Image from "next/image";

interface File {
  name: string;
  link: string;
}

interface Gallery {
  id: string;
  title: string;
  description: string;
  photo: string;
  files: File[];
}

const GalleryList: React.FC = () => {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editGallery, setEditGallery] = useState<Gallery | null>(null);
  const [deleteGalleryId, setDeleteGalleryId] = useState<string | null>(null);

  useEffect(() => {
    loadGalleries();
  }, []);

  const loadGalleries = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/gallery");
      if (!res.ok) throw new Error("Failed to fetch galleries.");
      const data = await res.json();
      setGalleries(data.data);
    } catch (error) {
      setError((error as Error).message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Gallery List
      </h1>

      {loading && <p className="text-gray-500 text-center">Loading...</p>}
      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

      {!loading && galleries.length === 0 && !error && (
        <p className="text-gray-600 text-center">No galleries available.</p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleries.map((gallery) => (
          <div
            key={gallery.id}
            className="border p-4 rounded shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-blue-700">{gallery.title}</h2>
            <p className="text-gray-600 mt-2">{gallery.description}</p>
            <Image
              src={gallery.photo}
              width={320}
              alt={gallery.title}
              className="mt-4 rounded-lg"
            />

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setEditGallery(gallery)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              {/* <button
                onClick={() => setDeleteGalleryId(gallery.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {editGallery && (
        <AddOrUpdateGallery
          gallery={editGallery}
          onClose={() => setEditGallery(null)}
          onRefresh={loadGalleries}
        />
      )}

      {deleteGalleryId && (
        <DeleteGallery
          galleryId={deleteGalleryId}
          onDeleteSuccess={() => {
            setDeleteGalleryId(null);
            loadGalleries();
          }}
          onClose={() => setDeleteGalleryId(null)}
        />
      )}
    </div>
  );
};

export default GalleryList;
