import React from 'react';
import Layout from '../components/Layout';

const BlogPost: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Post</h1>
          <p className="text-gray-600">Blog post content will be added here.</p>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;