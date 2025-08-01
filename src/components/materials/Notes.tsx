"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface Note {
  id: string;
  title: string;
  content: string;
  subject: string;
  lastEdited: string;
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Biology Chapter 1',
      content: '# Cell Structure\n\nKey points:\n- Cell membrane\n- Nucleus\n- Mitochondria',
      subject: 'Biology',
      lastEdited: '2024-02-19'
    }
  ]);

  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Notes List */}
      <div className="col-span-1 border-r pr-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">My Notes</h2>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            New Note
          </button>
        </div>

        <div className="space-y-2">
          {notes.map((note) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-4 rounded-lg cursor-pointer ${
                selectedNote?.id === note.id
                  ? 'bg-gray-100'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => setSelectedNote(note)}
            >
              <h3 className="font-medium">{note.title}</h3>
              <p className="text-sm text-gray-500">{note.subject}</p>
              <p className="text-xs text-gray-400">
                Last edited: {new Date(note.lastEdited).toLocaleDateString()}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Note Editor/Viewer */}
      <div className="col-span-2">
        {selectedNote ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{selectedNote.title}</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-black text-white px-4 py-2 rounded-md"
              >
                {isEditing ? 'Preview' : 'Edit'}
              </button>
            </div>

            {isEditing ? (
              <textarea
                value={selectedNote.content}
                onChange={(e) =>
                  setNotes(notes.map(note =>
                    note.id === selectedNote.id
                      ? { ...note, content: e.target.value }
                      : note
                  ))
                }
                className="w-full h-[500px] p-4 border rounded-lg font-mono"
              />
            ) : (
              <div className="prose">
                <ReactMarkdown>{selectedNote.content}</ReactMarkdown>
              </div>
            )}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a note to view or edit
          </div>
        )}
      </div>
    </div>
  );
}