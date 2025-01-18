import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditArticle({ articles, onEditArticle }) {
  const { id } = useParams();  // Mengambil id artikel dari URL
  const navigate = useNavigate();

  // Mencari artikel berdasarkan ID
  const article = articles.find((item) => item.id === parseInt(id));

  if (!article) {
    return <p>Artikel tidak ditemukan</p>;
  }

  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);
  const [category, setCategory] = useState(article.category);
  const [tags, setTags] = useState(article.tags.join(', '));
  const [publish_date, setPublishDate] = useState(article.publish_date);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedArticle = {
      ...article,
      title,
      content,
      category,
      tags: tags.split(',').map((tag) => tag.trim()),
      publish_date,
    };

    onEditArticle(updatedArticle);
    navigate('/articles');  // Redirect ke halaman daftar artikel setelah artikel diperbarui
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
        <label className="block">Tags</label>
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
        Save Changes
      </button>
    </form>
  );
}

export default EditArticle;
