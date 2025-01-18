import { Link, useParams } from "react-router-dom";
import data from "../../db/db"; // Pastikan data ini terimport dengan benar

function PageContent() {
  const { category } = useParams(); // Ambil kategori dari URL
  const articles = data.filter(item => item.category === category); // Filter artikel berdasarkan kategori
  console.log('articles =>', articles)
  console.log('data =>', data)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map(article => (
          <div key={article.path} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p>{article.content.substring(0, 100)}...</p>
            <Link to={`/article${article.path}`} className="text-blue-500">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageContent;


// import { Link } from "react-router-dom";  // Impor Link dari react-router-dom

// function PageContent() {
//   const categories = ["tech", "science", "health"]; // Contoh kategori

//   return (
//     <div>
//       <h2>Artikel Berdasarkan Kategori</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category}>
//             <Link to={`/category/${category}`}>{category}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PageContent;
