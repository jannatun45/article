import { Icon } from '@iconify/react';
import FileTree from '../../atoms/FileTree';
import CommandLineInstructions from '../../atoms/CommandLineInstructions';
import { Link } from 'react-router-dom';
import Section from '../../atoms/Section';

const SetupAndConfigurasi = () => {

  const structurFolder = [
    'pos-app/',
    '├── bin/',
    '│   └── www               # File untuk menjalankan server',
    '├── node_modules/         # Folder berisi dependency',
    '├── public/               # Folder untuk file statis seperti CSS, gambar, JS',
    '├── views/                # Folder untuk template views',
    '│   └── index.jade        # File view utama',
    '├── app.js                # File konfigurasi utama aplikasi Express',
    '├── app.js                # File konfigurasi utama aplikasi Express',
    '├── package.json          # File konfigurasi proyek Node.js',
    '└── .gitignore            # Daftar file/folder yang akan diabaikan oleh git'
  ];
  return (
    <>
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
      <CommandLineInstructions code='npm install -g express-generator'/>

      {/* Langkah 2: Install Dependency */}
      <h2 className="text-2xl font-semibold mb-4">Langkah 2: Install Dependency</h2>
      <p className="mb-4">
        Setelah Express Generator terinstal, buat proyek baru dan install semua dependency yang dibutuhkan dengan menjalankan perintah berikut:
      </p>

      <CommandLineInstructions code='express --view=pug myapp' />
      <CommandLineInstructions code='cd my-app'/>
      <CommandLineInstructions code='npm install'/>

      <p className="mb-4">
        Perintah ini akan membuat folder baru bernama <code>pos-app</code> dan menginstal semua dependency yang tercantum di dalam file <code>package.json</code>.
      </p>

      {/* Langkah 3: Menyesuaikan Struktur Folder */}
      <h2 className="text-2xl font-semibold mb-4">Langkah 3: Menyesuaikan Struktur Folder</h2>
      <p className="mb-4">
        Setelah aplikasi dasar dibuat, Anda mungkin ingin menyesuaikan struktur folder agar lebih sesuai dengan kebutuhan aplikasi POS. Berikut adalah struktur folder yang umum digunakan:
      </p>
      <FileTree fileStructure={structurFolder}/>
      <p className="mb-4">
        Anda bisa menambah folder seperti <code>models</code> dan <code>controllers</code> untuk memisahkan logika aplikasi POS lebih baik. dan untuk file app-nya anda bisa lihat <Link to="/setup-and-configurasi/app" className='hover:underline text-blue-800'>disini.</Link> 
      </p>

      {/* Langkah 4: Menjalankan Express dalam Mode Debug */}
      <h2 className="text-2xl font-semibold mb-4">Langkah 4: Menjalankan Express dalam Mode Debug</h2>
      <p className="mb-4">
        Untuk memudahkan pengembangan, kita dapat menjalankan aplikasi Express dalam mode debug. Hal ini memungkinkan kita untuk melihat informasi lebih mendetail tentang apa yang terjadi di dalam aplikasi. Gunakan perintah berikut untuk menjalankan aplikasi dengan mode debug:
      </p>
      
      <CommandLineInstructions code='set DEBUG=express:* && nodemon start'/>

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
    </>
  );
};

export default SetupAndConfigurasi;