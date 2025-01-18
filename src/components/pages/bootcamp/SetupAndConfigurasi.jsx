import { Icon } from '@iconify/react';

const SetupAndConfigurasi = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      {/* Judul Artikel */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Membangun Aplikasi POS (Point of Sales) dengan Express.js</h1>

      {/* Paragraf Pembuka */}
      <p className="mb-4 text-lg">
        Pada artikel ini, kita akan membahas cara membangun aplikasi Point of Sales (POS) sederhana menggunakan framework Express.js. Aplikasi POS ini akan mencatat transaksi penjualan dan menyediakan sistem untuk manajemen produk dan pembayaran.
      </p>

      {/* Langkah 1: Install Express Generator */}
      <h2 className="text-2xl font-semibold mb-4">Langkah 1: Install Express Generator</h2>
      <p className="mb-4">
        Langkah pertama adalah menginstal Express Generator, sebuah alat bantu yang memungkinkan Anda membuat aplikasi Express dengan struktur folder yang sudah siap digunakan. Jalankan perintah berikut untuk menginstalnya secara global:
      </p>
      <pre className="bg-gray-100 p-4 mb-4">
        <code>npm install -g express-generator</code>
      </pre>

      {/* Langkah 2: Install Dependency */}
      <h2 className="text-2xl font-semibold mb-4">Langkah 2: Install Dependency</h2>
      <p className="mb-4">
        Setelah Express Generator terinstal, buat proyek baru dan install semua dependency yang dibutuhkan dengan menjalankan perintah berikut:
      </p>
      <pre className="bg-gray-100 p-4 mb-4">
        <code>express pos-app</code>
        <code>cd pos-app</code>
        <code>npm install</code>
      </pre>
      <p className="mb-4">
        Perintah ini akan membuat folder baru bernama <code>pos-app</code> dan menginstal semua dependency yang tercantum di dalam file <code>package.json</code>.
      </p>

      {/* Langkah 3: Menyesuaikan Struktur Folder */}
      <h2 className="text-2xl font-semibold mb-4">Langkah 3: Menyesuaikan Struktur Folder</h2>
      <p className="mb-4">
        Setelah aplikasi dasar dibuat, Anda mungkin ingin menyesuaikan struktur folder agar lebih sesuai dengan kebutuhan aplikasi POS. Berikut adalah struktur folder yang umum digunakan:
      </p>
      <pre className="bg-gray-100 p-4 mb-4">
        <code>pos-app/</code>
        <code>├── bin/</code>
        <code>│   └── www               # File untuk menjalankan server</code>
        <code>├── node_modules/         # Folder berisi dependency</code>
        <code>├── public/               # Folder untuk file statis seperti CSS, gambar, JS</code>
        <code>├── routes/               # Folder untuk routing aplikasi</code>
        <code>│   └── index.js          # File routing utama</code>
        <code>├── views/                # Folder untuk template views</code>
        <code>│   └── index.jade        # File view utama</code>
        <code>├── app.js                # File konfigurasi utama aplikasi Express</code>
        <code>├── package.json          # File konfigurasi proyek Node.js</code>
        <code>└── .gitignore            # Daftar file/folder yang akan diabaikan oleh git</code>
      </pre>
      <p className="mb-4">
        Anda bisa menambah folder seperti <code>models</code> dan <code>controllers</code> untuk memisahkan logika aplikasi POS lebih baik.
      </p>

      {/* Langkah 4: Menjalankan Express dalam Mode Debug */}
      <h2 className="text-2xl font-semibold mb-4">Langkah 4: Menjalankan Express dalam Mode Debug</h2>
      <p className="mb-4">
        Untuk memudahkan pengembangan, kita dapat menjalankan aplikasi Express dalam mode debug. Hal ini memungkinkan kita untuk melihat informasi lebih mendetail tentang apa yang terjadi di dalam aplikasi. Gunakan perintah berikut untuk menjalankan aplikasi dengan mode debug:
      </p>
      <pre className="bg-gray-100 p-4 mb-4">
        <code>DEBUG=pos-app:* npm start</code>
      </pre>
      <p className="mb-4">
        Anda juga dapat menambahkan skrip di <code>package.json</code> agar lebih mudah menjalankan aplikasi dalam mode debug:
      </p>
      <pre className="bg-gray-100 p-4 mb-4">
        <code>
          {`"scripts": {
  "start": "DEBUG=pos-app:* node ./bin/www",
  "dev": "nodemon ./bin/www"
}`}
        </code>
      </pre>
      <p className="mb-4">
        Dengan ini, Anda bisa cukup menjalankan perintah <code>npm start</code> untuk melihat output debug di terminal.
      </p>

      {/* Ikon Penutup */}
      <div className="text-center mt-8">
        <Icon icon="twemoji:computer" className="text-4xl text-blue-500" />
      </div>
    </div>
  );
};

export default SetupAndConfigurasi;
