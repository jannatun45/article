import { useParams, useNavigate } from "react-router-dom";
import data from "../../db/db"; // Import data artikel Anda
import { useState, useEffect } from "react";

function CategoryPage() {
  const { categoryName } = useParams();  // Ambil parameter kategori dari URL
  const [selectedTags, setSelectedTags] = useState([]);  // State untuk menyimpan tag yang dipilih
  const navigate = useNavigate();

  // Ambil parameter tag dari URL (dengan format ?tags=tag1&tags=tag2)
  const urlParams = new URLSearchParams(window.location.search);
  const tagsFromUrl = urlParams.getAll("tags");  // Ambil semua tag yang dipilih

  // Menggunakan useEffect hanya saat komponen pertama kali di-mount
  useEffect(() => {
    if (tagsFromUrl.length > 0) {
      setSelectedTags(tagsFromUrl);  // Set selectedTags hanya sekali saat URL berubah
    }
  }, []);  // Hanya dipanggil sekali saat komponen pertama kali dimuat

  // Filter artikel berdasarkan kategori dan tag yang dipilih
  const filteredData = data.filter(item => {
    const isCategoryMatch = categoryName === 'all' || item.category === categoryName;
    const isTagMatch = selectedTags.length > 0 ? selectedTags.every(tag => item.tags.includes(tag)) : true;
    return isCategoryMatch && isTagMatch;
  });

  // Fungsi untuk menangani klik pada tag
  const handleTagClick = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)  // Hapus tag jika sudah dipilih
      : [...selectedTags, tag];  // Tambahkan tag jika belum dipilih

    setSelectedTags(updatedTags);  // Update selectedTags

    // Update URL dengan tag yang baru
    const queryParams = new URLSearchParams();
    updatedTags.forEach(tag => queryParams.append("tags", tag));  // Menambahkan semua tag ke URL
    navigate(`?${queryParams.toString()}`);  // Mengubah URL
  };

  // Menentukan pesan yang akan ditampilkan jika tidak ada artikel yang cocok
  let noDataMessage = "";
  if (categoryName !== "all" && selectedTags.length === 0) {
    // Jika kategori dipilih tanpa tag
    noDataMessage = "Artikel tidak ditemukan untuk kategori ini.";
  } else if (categoryName !== "all" && selectedTags.length > 0) {
    // Jika kategori dan tag dipilih
    noDataMessage = "Artikel tidak ditemukan untuk kategori ini dan tag yang dipilih.";
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Kategori: {categoryName}</h2>
      
      {/* Menampilkan tag filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        {data
          .flatMap(item => item.tags) // Ambil semua tag dari artikel
          .filter((tag, index, self) => self.indexOf(tag) === index) // Ambil tag unik
          .map((tag, index) => (
            <span
              key={index}
              onClick={() => handleTagClick(tag)}  // Klik tag untuk filter
              className={`cursor-pointer bg-blue-200 text-blue-800 py-0.5 px-2 rounded-full text-xs ${selectedTags.includes(tag) ? 'bg-blue-400' : ''}`}
            >
              {tag}
            </span>
          ))}
      </div>

      {/* Menampilkan artikel yang telah difilter */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <div key={item.path} className="max-w-xs rounded overflow-hidden px-6 py-3 shadow-lg bg-white">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="font-semibold text-lg capitalize mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.content.substring(0, 100)}...</p>
                  <div className="text-sm text-gray-500">{item.publish_date}</div>
                </div>

                <div className="flex flex-col mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        onClick={() => handleTagClick(tag)}  // Klik tag untuk filter
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
          <p>{noDataMessage}</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
