import { Icon } from '@iconify/react';

const PerbedaanLocalStorageDanSessionStorage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      {/* Judul Artikel */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Perbedaan Antara `localStorage` dan `sessionStorage` di JavaScript</h1>

      {/* Paragraf Pembuka */}
      <p className="mb-4 text-lg">
        Pernahkah Anda mendengar tentang <code>localStorage</code> dan <code>sessionStorage</code>? Keduanya adalah mekanisme penyimpanan web yang digunakan untuk menyimpan data secara lokal di browser. Meskipun keduanya memiliki kesamaan dalam cara mereka menyimpan data, ada beberapa perbedaan penting yang membedakan keduanya. Mari kita bahas perbedaan antara <code>localStorage</code> dan <code>sessionStorage</code>.
      </p>

      {/* Subjudul dan Penjelasan tentang localStorage */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Apa itu <code>localStorage</code>?</h2>
      <p className="mb-4">
        <code>localStorage</code> adalah fitur penyimpanan web yang memungkinkan Anda untuk menyimpan data secara permanen di browser. Data yang disimpan dengan <code>localStorage</code> akan tetap ada meskipun browser ditutup atau perangkat dimatikan. Penyimpanan ini bersifat <strong>persisten</strong>, artinya data akan tetap ada sampai dihapus secara eksplisit oleh pengguna atau melalui kode JavaScript.
      </p>

      {/* Fitur-fitur localStorage */}
      <ul className="list-disc pl-5 mb-6">
        <li><strong>Penyimpanan permanen:</strong> Data disimpan secara permanen di browser, bahkan setelah sesi pengguna berakhir.</li>
        <li><strong>Ukuran penyimpanan yang besar:</strong> <code>localStorage</code> biasanya dapat menyimpan sekitar 5MB data per domain (tergantung browser).</li>
        <li><strong>Tersedia di semua tab:</strong> Data yang disimpan dengan <code>localStorage</code> dapat diakses di semua tab yang terbuka pada domain yang sama.</li>
      </ul>

      {/* Contoh Penggunaan localStorage */}
      <h3 className="text-xl font-semibold mb-3">Contoh Penggunaan <code>localStorage</code>:</h3>
      <pre className="bg-gray-800 text-gray-300 rounded">
        <code className="p-4 mb-5 rounded border-gray-200">
          {`// Menyimpan data\nlocalStorage.setItem('username', 'JohnDoe');\n\n// Mengambil data\nlet username = localStorage.getItem('username');\nconsole.log(username); // Output: JohnDoe\n\n// Menghapus data\nlocalStorage.removeItem('username');\n\n// Menghapus semua data\nlocalStorage.clear();`}
        </code>
      </pre>

      {/* Subjudul dan Penjelasan tentang sessionStorage */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Apa itu <code>sessionStorage</code>?</h2>
      <p className="mb-4">
        <code>sessionStorage</code> juga merupakan penyimpanan web, tetapi berbeda dengan <code>localStorage</code>. Data yang disimpan dengan <code>sessionStorage</code> hanya akan bertahan selama sesi browser terbuka. Ini berarti bahwa data yang disimpan dalam <code>sessionStorage</code> akan hilang ketika tab atau browser ditutup. Penyimpanan ini bersifat <strong>sementara</strong>, artinya data akan hilang segera setelah sesi selesai.
      </p>

      {/* Fitur-fitur sessionStorage */}
      <ul className="list-disc pl-5 mb-6">
        <li><strong>Penyimpanan sementara:</strong> Data hanya tersedia selama sesi aktif (selama tab atau jendela browser terbuka).</li>
        <li><strong>Ukuran penyimpanan lebih kecil:</strong> Biasanya, <code>sessionStorage</code> memiliki kapasitas penyimpanan yang lebih kecil dibandingkan dengan <code>localStorage</code> (sekitar 5MB).</li>
        <li><strong>Tersedia hanya di tab yang sama:</strong> Data yang disimpan dengan <code>sessionStorage</code> hanya dapat diakses pada tab yang sama, tidak tersedia di tab atau jendela browser lain.</li>
      </ul>

      {/* Contoh Penggunaan sessionStorage */}
      <h3 className="text-xl font-semibold mb-3">Contoh Penggunaan <code>sessionStorage</code>:</h3>
      <pre className="bg-gray-800 text-gray-300 rounded">
        <code className="p-4 mb-5 rounded border-gray-200">
          {`// Menyimpan data\nsessionStorage.setItem('sessionID', '12345');\n\n// Mengambil data\nlet sessionID = sessionStorage.getItem('sessionID');\nconsole.log(sessionID); // Output: 12345\n\n// Menghapus data\nsessionStorage.removeItem('sessionID');\n\n// Menghapus semua data\nsessionStorage.clear();`}
        </code>
      </pre>

      {/* Perbandingan antara localStorage dan sessionStorage */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Perbandingan antara <code>localStorage</code> dan <code>sessionStorage</code>:</h2>
      <table className="min-w-full table-auto mb-6">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left bg-gray-200">Fitur</th>
            <th className="px-4 py-2 text-left bg-gray-200"><code>localStorage</code></th>
            <th className="px-4 py-2 text-left bg-gray-200"><code>sessionStorage</code></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Daya tahan</td>
            <td className="px-4 py-2">Data bertahan selamanya (hingga dihapus)</td>
            <td className="px-4 py-2">Data hilang ketika sesi browser ditutup</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Ukuran Penyimpanan</td>
            <td className="px-4 py-2">Biasanya 5MB per domain</td>
            <td className="px-4 py-2">Biasanya 5MB per domain</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Ketersediaan</td>
            <td className="px-4 py-2">Tersedia di semua tab di browser</td>
            <td className="px-4 py-2">Hanya tersedia di tab yang sama</td>
          </tr>
        </tbody>
      </table>

      {/* Ikon Penutup */}
      <div className="text-center mt-8">
        <Icon icon="twemoji:light-bulb" className="text-4xl text-yellow-500" />
      </div>
    </div>
  );
};

export default PerbedaanLocalStorageDanSessionStorage;
