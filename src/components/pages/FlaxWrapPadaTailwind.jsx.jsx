const FlexWrapPadaTailwind = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      {/* Judul Artikel */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Pengenalan flex-wrap di Tailwind CSS</h1>

      {/* Paragraf Pembuka */}
      <p className="mb-4">
        Di Tailwind CSS, <code className="bg-gray-200 text-gray-700 px-1 rounded">flex-wrap</code> digunakan untuk mengontrol apakah elemen-elemen dalam kontainer flex harus dibungkus (wrap) atau tidak. Secara default, elemen dalam kontainer flex akan disusun dalam satu baris atau kolom (tergantung arah flex), tetapi jika elemen-elemen tersebut melebihi ruang yang tersedia, maka kita dapat menggunakan <code className="bg-gray-200 text-gray-700 px-1 rounded">flex-wrap</code> untuk memaksa elemen-elemen tersebut untuk membungkus ke baris atau kolom berikutnya.
      </p>

      {/* Penjelasan Tentang Kelas Utilitas */}
      <p className="mb-4">
        Ada beberapa kelas utilitas yang dapat digunakan di Tailwind CSS terkait dengan flex wrapping:
      </p>
      
      <ul className="list-disc pl-6 mb-6">
        <li>
          <code className="bg-gray-200 text-gray-700 px-1 rounded">flex-wrap</code>: Membuat elemen dalam kontainer flex untuk membungkus ke baris atau kolom baru ketika ruang tidak cukup.
        </li>
        <li>
          <code className="bg-gray-200 text-gray-700 px-1 rounded">flex-nowrap</code>: Menghindari elemen-elemen membungkus, semua elemen tetap berada dalam satu baris atau kolom, meskipun ruang terbatas.
        </li>
        <li>
          <code className="bg-gray-200 text-gray-700 px-1 rounded">flex-wrap-reverse</code>: Membungkus elemen ke baris atau kolom baru, tetapi dengan urutan terbalik (baris baru akan muncul di atas atau di kanan, tergantung arah flex).
        </li>
      </ul>

      {/* Judul Contoh Kode */}
      <h2 className="text-2xl font-semibold mb-4">Contoh Penggunaan di Tailwind CSS:</h2>

      {/* Kode yang Ditampilkan */}
      <pre className="bg-gray-800 text-gray-300 rounded-lg p-4 mb-6 overflow-auto">
        <code className="text-sm">
          &lt;div class="flex flex-wrap"&gt;<br />
          &nbsp;&nbsp;&lt;div class="w-1/3"&gt;Item 1&lt;/div&gt;<br />
          &nbsp;&nbsp;&lt;div class="w-1/3"&gt;Item 2&lt;/div&gt;<br />
          &nbsp;&nbsp;&lt;div class="w-1/3"&gt;Item 3&lt;/div&gt;<br />
          &lt;/div&gt;
        </code>
      </pre>

      {/* Tampilan Kode Flexbox */}
      <div className="flex flex-wrap gap-4">
        <div className="w-1/3 p-4 bg-gray-200 rounded-md shadow-sm">Item 1</div>
        <div className="w-1/3 p-4 bg-gray-200 rounded-md shadow-sm">Item 2</div>
        <div className="w-1/3 p-4 bg-gray-200 rounded-md shadow-sm">Item 3</div>
      </div>

      {/* Penjelasan tentang flex-wrap */}
      <p className="mt-6 mb-4">
        Pada contoh di atas, jika lebar kontainer terlalu kecil, item-item tersebut akan membungkus ke baris baru.
      </p>

      <p>
        <code className="bg-gray-200 text-gray-700 px-1 rounded">flex-wrap</code> memastikan bahwa item-item tersebut akan dibungkus ke baris baru saat ruang tidak cukup. Sedangkan <code className="bg-gray-200 text-gray-700 px-1 rounded">flex-nowrap</code> (jika digunakan) akan memaksa item tetap berada dalam satu baris meski ruang tidak mencukupi.
      </p>
    </div>
  );
};

export default FlexWrapPadaTailwind;
