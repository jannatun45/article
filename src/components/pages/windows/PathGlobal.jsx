import { Icon } from '@iconify/react';

const PathGlobal = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      {/* Judul Artikel */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Menyiapkan fnm di Windows untuk Instalasi Node.js</h1>

      {/* Paragraf Pembuka */}
      <p className="mb-4 text-lg">
        Saat bekerja dengan Node.js, menggunakan alat manajemen versi seperti <strong>fnm</strong> dapat sangat mempermudah kita dalam mengelola beberapa versi Node.js secara bersamaan. Namun, terkadang kita perlu melakukan beberapa konfigurasi agar perintah seperti <code>fnm</code> dapat dikenali di terminal. Berikut adalah langkah-langkah untuk memastikan bahwa <strong>fnm</strong> terinstal dan berfungsi dengan baik di Windows.
      </p>

      {/* Langkah-langkah */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Langkah-langkah untuk Menyiapkan fnm di Windows</h2>

      <h3 className="text-xl font-semibold mb-2">1. Pastikan PATH untuk npm global sudah benar</h3>
      <p className="mb-4">
        Ketika kamu menginstal paket global menggunakan npm, paket tersebut biasanya terinstal di direktori tertentu. Direktori ini perlu ditambahkan ke <strong>PATH</strong> agar perintah <code>fnm</code> bisa dikenali.
      </p>
      <h4 className="text-lg font-semibold mb-2">Langkah 1: Temukan lokasi instalasi npm global</h4>
      <p className="mb-4">
        Kamu bisa memeriksa di mana npm menginstal paket global dengan menjalankan perintah berikut:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        npm config get prefix
      </pre>
      <p className="mb-4">
        Outputnya akan menunjukkan lokasi folder tempat npm menginstal paket global, misalnya:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        C:\Users\Lenovo\AppData\Roaming\npm
      </pre>

      <h4 className="text-lg font-semibold mb-2">Langkah 2: Tambahkan direktori bin npm ke PATH</h4>
      <p className="mb-4">
        Jika direktori yang dihasilkan adalah <code>C:\Users\Lenovo\AppData\Roaming\npm</code>, maka kamu perlu menambahkan direktori tersebut ke PATH.
      </p>
      <p className="mb-4">
        Ikuti langkah-langkah berikut untuk menambahkannya di Windows:
      </p>
      <ol className="list-decimal pl-6 mb-4">
        <li>Buka Control Panel → System and Security → System → Advanced system settings → Environment Variables.</li>
        <li>Di bagian <strong>User variables</strong>, pilih <code>Path</code>, lalu klik <code>Edit</code>.</li>
        <li>Klik <code>New</code>, dan masukkan path yang sesuai dengan output dari <code>npm config get prefix</code> (misalnya: <code>C:\Users\Lenovo\AppData\Roaming\npm</code>).</li>
        <li>Klik <code>OK</code> untuk menyimpan perubahan.</li>
      </ol>

      <h4 className="text-lg font-semibold mb-2">Langkah 3: Restart terminal</h4>
      <p className="mb-4">
        Setelah menambahkan path ke <strong>PATH</strong> dan menyimpan perubahan, tutup terminal dan buka kembali terminal baru, kemudian coba perintah berikut:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        fnm --version
      </pre>

      <h3 className="text-xl font-semibold mb-2">2. Coba jalankan kembali perintah fnm setelah memperbarui PATH</h3>
      <p className="mb-4">
        Jika sudah menambahkan path ke PATH, perintah <code>fnm</code> seharusnya bisa dikenali. Coba jalankan kembali perintah untuk menginstal Node.js versi tertentu:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        fnm install 22
      </pre>

      <h3 className="text-xl font-semibold mb-2">3. Jika Masih Tidak Berfungsi</h3>
      <p className="mb-4">
        Jika masalah masih belum teratasi setelah memperbarui PATH, coba lakukan langkah-langkah berikut:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Install <code>fnm</code> menggunakan cara lain: Jika menggunakan npm tidak berhasil, coba pasang <code>fnm</code> menggunakan winget atau Homebrew (jika menggunakan Windows Subsystem for Linux atau Git Bash):</li>
        <pre className="bg-gray-100 p-4 mb-6 rounded">
          winget install Schniz.fnm
        </pre>
        <li>Jika langkah-langkah ini belum berhasil atau ada pesan kesalahan lain, beri tahu kami dan kita bisa coba solusi lainnya.</li>
      </ul>

      {/* Ikon Penutup */}
      <div className="text-center mt-8">
        <Icon icon="twemoji:package" className="text-4xl text-blue-500" />
      </div>
    </div>
  );
};

export default PathGlobal;