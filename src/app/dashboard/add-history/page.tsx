"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.title]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    try {
      const res = await fetch("/api/history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ title: "", description: "" });
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">ประวัติโรงเรียน</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Your Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="description"
            placeholder="Your Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}