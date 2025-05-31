"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: string;
  likes: number;
  replies: number;
}

export default function DiscussionForum() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      title: 'Tips for studying calculus',
      content: 'What are your best strategies for mastering calculus concepts?',
      author: 'Math Enthusiast',
      timestamp: '2024-02-19T10:00:00Z',
      likes: 5,
      replies: 3
    }
  ]);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Discussion Forum</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          New Post
        </button>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg border"
          >
            <h3 className="text-xl font-medium mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.content}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span>{post.author}</span>
                <span>•</span>
                <span>{new Date(post.timestamp).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center space-x-1 hover:text-black"
                >
                  <span>👍</span>
                  <span>{post.likes}</span>
                </button>
                <div className="flex items-center space-x-1">
                  <span>💬</span>
                  <span>{post.replies} replies</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}