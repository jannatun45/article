import { Link } from 'react-router-dom';

function ArticleList({ articles, onDeleteArticle }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Articles</h1>

      {/* Menampilkan daftar artikel */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div key={article.id} className="max-w-xs rounded overflow-hidden px-6 py-3 shadow-lg bg-white">
            <h3 className="font-semibold text-lg">{article.title}</h3>
            <p>{article.content.substring(0, 100)}...</p>
            <div className="text-sm text-gray-500">{article.publish_date}</div>

            {/* Tombol Edit dan Delete */}
            <Link
              to={`/articles/edit/${article.id}`}
              className="text-blue-500 hover:underline"
            >
              Edit
            </Link>
            <button
              onClick={() => onDeleteArticle(article.id)}
              className="text-red-500 hover:underline ml-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
