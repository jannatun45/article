import { useParams, useNavigate, useLocation } from "react-router-dom";
import data from "../../assets/databases"; // Import data artikel Anda
import { useState, useEffect } from "react";

// Fungsi untuk menyoroti teks yang cocok dengan query pencarian
const highlightText = (text, query) => {
  if (!query) return text;  // Jika tidak ada query, return teks asli
  const regex = new RegExp(`(${query})`, 'gi'); // Mencocokkan query (case-insensitive)
  const parts = text.split(regex); // Memecah teks berdasarkan query
  return parts.map((part, index) =>
    regex.test(part) ? <mark key={index} className="bg-yellow-300">{part}</mark> : part
  );
};

function CategoryPage() {
  const { categoryName } = useParams();  // Ambil parameter kategori dari URL
  const [selectedTags, setSelectedTags] = useState([]);  // State untuk menyimpan tag yang dipilih
  const [searchQuery, setSearchQuery] = useState('');  // State untuk pencarian
  const navigate = useNavigate();

  // Ambil parameter tag dari URL (dengan format ?tags=tag1&tags=tag2)
  const urlParams = new URLSearchParams(window.location.search);
  const tagsFromUrl = urlParams.getAll("tags");  // Ambil semua tag yang dipilih

  useEffect(() => {
    if (tagsFromUrl.length > 0) {
      setSelectedTags(tagsFromUrl);  // Set selectedTags hanya sekali saat URL berubah
    }
  }, []);  // Hanya dipanggil sekali saat komponen pertama kali dimuat

  const isCategoryAll = categoryName === undefined || categoryName === "all";  // Jika tidak ada kategori di URL

  // Filter artikel berdasarkan kategori, tag yang dipilih, dan pencarian
  const filteredData = data.filter(item => {
    const isCategoryMatch = isCategoryAll || item.category === categoryName;
    const isTagMatch = selectedTags.length > 0 ? selectedTags.every(tag => item.tags.includes(tag)) : true;
    const isSearchMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.content.toLowerCase().includes(searchQuery.toLowerCase());

    return isCategoryMatch && isTagMatch && isSearchMatch;
  });

  const handleTagClick = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(updatedTags);
    const queryParams = new URLSearchParams();
    updatedTags.forEach(tag => queryParams.append("tags", tag));
    navigate(`?${queryParams.toString()}`);
  };

  let noDataMessage = "";
  if (categoryName && selectedTags.length === 0) {
    noDataMessage = "Artikel tidak ditemukan untuk kategori ini.";
  } else if (categoryName && selectedTags.length > 0) {
    noDataMessage = "Artikel tidak ditemukan untuk kategori ini dan tag yang dipilih.";
  }

  const filteredTags = isCategoryAll
    ? data.flatMap(item => item.tags)
    : data.filter(item => item.category === categoryName).flatMap(item => item.tags);

  const uniqueTags = [...new Set(filteredTags)];

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Cari Artikel"
          className="px-4 py-2 border rounded w-full"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {uniqueTags.map((tag, index) => (
          <span
            key={index}
            onClick={() => handleTagClick(tag)}
            className={`cursor-pointer bg-blue-200 text-blue-800 py-0.5 px-2 rounded-full text-xs ${selectedTags.includes(tag) ? 'bg-blue-400' : ''}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <div key={item.path} className="max-w-xs rounded overflow-hidden px-6 py-3 shadow-lg bg-white">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="font-semibold text-lg capitalize mb-2">
                    {/* Highlight title */}
                    {highlightText(item.title, searchQuery)}
                  </div>
                  <p className="text-gray-700 text-base">
                    {/* Highlight content */}
                    {highlightText(item.content.substring(0, 100), searchQuery)}...
                  </p>
                  <div className="text-sm text-gray-500">{item.publish_date}</div>
                </div>

                <div className="flex flex-col mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        onClick={() => handleTagClick(tag)}
                        className={`cursor-pointer bg-blue-200 text-blue-800 py-0.5 px-2 rounded-full text-xs ${selectedTags.includes(tag) ? 'bg-blue-400' : ''}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={item.path} className="text-blue-500 hover:underline flex items-center">
                    <span>Read More</span>
                    <span className="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>{noDataMessage || "Tidak ada artikel yang ditemukan."}</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
