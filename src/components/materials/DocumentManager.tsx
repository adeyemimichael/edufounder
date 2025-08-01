"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedAt: string;
}

export default function DocumentManager() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: '1',
      name: 'Chemistry Notes.pdf',
      type: 'PDF',
      size: '2.5 MB',
      uploadedAt: '2024-02-19'
    },
    {
      id: '2',
      name: 'Biology Assignment.docx',
      type: 'Word',
      size: '1.8 MB',
      uploadedAt: '2024-02-18'
    }
  ]);

  const handleUpload = () => {
    // Handle document upload
  };

  const handleDownload = (documentId: string) => {
    // Handle document download
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">My Documents</h2>
        <button
          onClick={handleUpload}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Upload Document
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Uploaded
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {documents.map((doc) => (
              <motion.tr
                key={doc.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">{doc.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.size}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(doc.uploadedAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDownload(doc.id)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Download
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}