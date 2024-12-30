import React from 'react';
import Image from 'next/image';

interface File {
  name: string;
  link: string;
}

interface Gallery {
  _id: string;
  title: string;
  description: string;
  files: File[];
  photo: string;
  createdAt: string;
}

async function fetchGallery(): Promise<Gallery[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const res = await fetch(`${baseUrl}/api/gallery`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch gallery');
  }

  const data = await res.json();
  return data.data;
}

export default async function ShowGalleryPage() {
  let galleryList: Gallery[] = [];

  try {
    galleryList = await fetchGallery();
  } catch (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="rounded text-xl font-bold mb-6 bg-red-600 p-2 mx-auto flex justify-center text-white">
          Error fetching gallery
        </h1>
        <p className="text-center text-gray-700">Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="rounded text-xl font-bold mb-6 bg-gray-300 p-2 mx-auto flex justify-center text-blue-700">
        ภาพกิจกรรม
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryList.map((gallery) => (
          <div
            key={gallery._id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <div className="relative w-full h-48">
              <Image
                src={gallery.photo}
                alt={gallery.title || 'Gallery Image'}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <h2 className="text-lg font-bold mt-4">{gallery.title}</h2>
            <p className="text-gray-600 mb-4">{gallery.description}</p>
            <div>
              <h3 className="text-sm font-semibold mb-2">Attachments:</h3>
              <ul className="list-disc list-inside">
                {gallery.files.map((file, index) => (
                  <li key={index}>
                    <a
                      href={file.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
