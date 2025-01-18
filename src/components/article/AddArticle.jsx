import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddArticle({ onAddArticle }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [publish_date, setPublishDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      id: Date.now(),
      title,
      content,
      category,
      tags: tags.split(',').map((tag) => tag.trim()),
      publish_date,
      path: `/articles/${Date.now()}`,
    };

    onAddArticle(newArticle);
    navigate('/articles');  // Redirect ke halaman daftar artikel setelah artikel ditambahkan
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form untuk input artikel */}
      <div>
        <label className="block">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Tags (comma separated)</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block">Publish Date</label>
        <input
          type="date"
          value={publish_date}
          onChange={(e) => setPublishDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Article
      </button>
    </form>
  );
}

export default AddArticle;
