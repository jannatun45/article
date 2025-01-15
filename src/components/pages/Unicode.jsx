import { Icon } from '@iconify/react';

const UnicodeArticle = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      {/* Judul Artikel */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Pengenalan Unicode dan Pentingnya untuk Pengkodean Karakter</h1>

      {/* Paragraf Pembuka */}
      <p className="mb-4 text-lg">
        Dalam dunia pengembangan perangkat lunak, pengkodean karakter memainkan peran penting dalam memfasilitasi komunikasi antara sistem komputer yang berbeda. Salah satu pengkodean karakter yang paling banyak digunakan adalah <strong>Unicode</strong>. Unicode adalah standar pengkodean karakter yang mencakup hampir semua karakter yang digunakan di seluruh dunia, termasuk simbol matematika, emoji, karakter dari berbagai bahasa, dan banyak lagi.
      </p>

      {/* Kutipan Pertama */}
      <blockquote className="italic text-gray-600 border-l-4 pl-4 mb-6 border-gray-400">
        "Unicode memungkinkan komputer untuk memahami dan menampilkan teks dalam hampir semua bahasa dunia."
      </blockquote>

      {/* Penjelasan Tentang Kutipan */}
      <p className="mb-6">
        Unicode dirancang untuk menggantikan pengkodean karakter sebelumnya, seperti ASCII, yang hanya mendukung karakter-karakter dalam bahasa Inggris. Dengan adanya Unicode, karakter dari hampir semua bahasa di dunia bisa digunakan dalam aplikasi perangkat lunak tanpa khawatir tentang masalah pengkodean atau kerusakan teks.
      </p>

      {/* Kutipan Tambahan */}
      <blockquote className="italic text-gray-600 border-l-4 pl-4 mb-6 border-gray-400">
        "Menciptakan aplikasi yang mendukung Unicode memastikan bahwa aplikasi Anda akan bekerja di seluruh dunia dengan berbagai bahasa." 
      </blockquote>
      
      <p className="mb-6">
        Dengan mengimplementasikan Unicode, pengembang dapat membuat aplikasi yang dapat diakses oleh lebih banyak orang di berbagai belahan dunia tanpa hambatan bahasa atau simbol.
      </p>

      {/* Contoh Unicode */}
      <h2 className="text-2xl font-semibold mb-4">Contoh Karakter Unicode</h2>
      <p className="mb-6">
        Berikut adalah beberapa contoh karakter Unicode yang dapat digunakan dalam aplikasi Anda:
      </p>

      <div className="mb-6 space-y-4">
        <p>🌍 Dunia - <span className="text-xl">U+1F30D</span></p>
        <p>😊 Senyum - <span className="text-xl">U+1F60A</span></p>
        <p>💻 Komputer - <span className="text-xl">U+1F4BB</span></p>
        <p>❤️ Hati - <span className="text-xl">U+2764</span></p>
        <p>🎉 Perayaan - <span className="text-xl">U+1F389</span></p>
        <p>🚀 Roket - <span className="text-xl">U+1F680</span></p>
        <p>🍕 Pizza - <span className="text-xl">U+1F355</span></p>
        <p>📚 Buku - <span className="text-xl">U+1F4DA</span></p>
        <p>🌟 Bintang - <span className="text-xl">U+1F31F</span></p>
        <p>👨‍💻 Pria dengan Komputer - <span className="text-xl">U+1F468 U+200D U+1F4BB</span></p>
      </div>

      {/* Ikon Penutup */}
      <div className="text-center mt-8">
        <Icon icon="twemoji:globe-with-meridians" className="text-4xl text-blue-500" />
      </div>
    </div>
  );
};

export default UnicodeArticle;
