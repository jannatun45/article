import { Icon } from '@iconify/react';
import Section from '../../atoms/Section';
import Code from '../../atoms/Code';
import CommandLineInstructions from '../../atoms/CommandLineInstructions';
import H1 from '../../atoms/H1';
import P from '../../atoms/P';
import H2 from '../../atoms/H2';
import H3 from '../../atoms/H3';

const Multer = () => {
  return (
    <Section>
      {/* Judul Artikel */}
      <H1>Mengenal Multer: Middleware untuk Meng-upload File di Aplikasi Node.js</H1>

      {/* Paragraf Pembuka */}
      <P>
        Dalam pengembangan aplikasi web, sering kali kita perlu menangani pengunggahan (upload) file, baik itu gambar, dokumen, atau jenis file lainnya. Pada aplikasi berbasis Node.js, salah satu library yang populer untuk menangani file upload adalah Multer.
      </P>

      <P>
        Multer adalah middleware yang digunakan untuk menangani multipart/form-data, format yang sering digunakan saat meng-upload file dalam aplikasi web. Multer mempermudah pengolahan file yang di-upload, seperti menyimpannya di server lokal atau di cloud storage.
      </P>

      {/* Apa Itu Multer? */}
      <H2>Apa Itu Multer?</H2>
      <P>
        Multer adalah middleware untuk menangani multipart/form-data, yang umumnya digunakan untuk meng-upload file dalam aplikasi Node.js. Multer berfungsi untuk:
      </P>

      <ul className='list-outside list-decimal mb-4 pl-4'>
        <li>Menangani permintaan HTTP yang berisi file.</li>
        <li>Memproses file yang di-upload dan menyimpannya ke lokasi yang telah ditentukan, seperti folder lokal atau cloud storage.</li>
        <li>Menambahkan informasi file ke objek req, sehingga aplikasi bisa mengakses metadata file yang di-upload.</li>
      </ul>

      <P>
        Secara teknis, Multer menerima request yang berisi file, kemudian memproses file tersebut sesuai dengan pengaturan yang telah ditentukan dalam konfigurasi. Penggunaannya sangat fleksibel, misalnya untuk menyimpan file dengan nama yang unik, memvalidasi jenis file, atau membatasi ukuran file yang di-upload.
      </P>

      {/* Cara Kerja Multer */}
      <H2>Cara Kerja Multer</H2>
      <P>
        Multer bekerja dengan mengubah request yang berisi file menjadi format yang dapat diakses oleh aplikasi. Berikut adalah gambaran umum cara kerja Multer:
      </P>

      <ul className='list-outside list-decimal mb-4 pl-4'>
        <li>
          <H3>Menangani Permintaan HTTP</H3>
          <P>Ketika permintaan HTTP yang mengandung file dikirimkan ke server, Multer akan memproses file tersebut.</P>
        </li>
        <li>
          <H3>Memproses dan Menyimpan File</H3>
          <P>Multer akan menyimpan file-file yang di-upload di lokasi yang sudah ditentukan dalam pengaturan, misalnya di folder uploads/ di server lokal.</P>
        </li>
        <li>
          <H3>Menambahkan Informasi ke Request</H3>
          <P>Setelah file diproses, Multer akan menambahkan informasi tentang file yang di-upload ke dalam objek req. Informasi ini dapat diakses di route handler.</P>
        </li>
      </ul>

      {/* Contoh Penggunaan Multer dalam Express.js */}
      <H2>Contoh Penggunaan Multer dalam Express.js</H2>
      <P>Untuk lebih memahami cara penggunaan Multer, berikut adalah contoh kode untuk meng-upload file di aplikasi yang dibangun menggunakan Express.js dan Multer:</P>

      <CommandLineInstructions code="npm install multer" />

      <P>Setelah menginstal Multer, kamu bisa mengonfigurasi penyimpanan file menggunakan kode berikut:</P>

      <Code>
{`const express = require('express');
const multer = require('multer');
const app = express();

// Setup penyimpanan file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Tentukan folder penyimpanan file
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);  // Beri nama file dengan timestamp agar unik
  }
});

const upload = multer({ storage: storage });

// Route untuk meng-upload file
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File berhasil di-upload');
});

app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});`}
      </Code>

      <P>Penjelasan Kode:</P>
      <ul className="list-outside list-decimal mb-4 pl-4">
        <li><strong>Konfigurasi Penyimpanan File:</strong> Dengan <Code>multer.diskStorage()</Code>, kita mengonfigurasi dimana file akan disimpan (destination) dan bagaimana nama file akan disusun (filename). Di sini, file akan disimpan di folder <Code>uploads/</Code> dan diberi nama unik berdasarkan timestamp.</li>
        <li><strong>Route /upload:</strong> Dalam route ini, kita menggunakan middleware <Code>upload.single('file')</Code> untuk menangani satu file yang di-upload. Nama input file di form HTML adalah <Code>file</Code>. Setelah file berhasil di-upload, server akan merespons dengan pesan "File berhasil di-upload".</li>
        <li><strong>Menjalankan Server:</strong> Server Express akan berjalan di port 3000 dan siap menerima permintaan upload file.</li>
      </ul>

      <H2>Struktur Folder</H2>
      <P>Pastikan kamu memiliki struktur folder seperti berikut:</P>

      <CommandLineInstructions code="/my-app" />
      <CommandLineInstructions code="  /uploads       <-- Folder untuk menyimpan file yang di-upload" />
      <CommandLineInstructions code="  /node_modules" />
      <CommandLineInstructions code="  /public" />
      <CommandLineInstructions code="  /src" />
      <CommandLineInstructions code="  app.js         <-- File aplikasi Express" />
      <CommandLineInstructions code="  package.json" />

      <H2>Fitur Tambahan Multer</H2>
      <P>Multer juga mendukung berbagai pengaturan tambahan yang bisa kamu sesuaikan, seperti:</P>

      <ul className="list-outside list-decimal mb-4 pl-4">
        <li>
          <H3>Validasi Jenis File</H3>
          <P>Kamu bisa menambahkan filter untuk membatasi jenis file yang boleh di-upload. Misalnya hanya mengizinkan gambar dengan ekstensi .jpg, .png, atau .gif.</P>
          <Code>
{`const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Tipe file tidak didukung'), false);
    }
    cb(null, true);
  }
});`}
          </Code>
        </li>
        <li>
          <H3>Membatasi Ukuran File</H3>
          <P>Kamu bisa mengatur batas ukuran file yang boleh di-upload. Misalnya, untuk membatasi ukuran file hingga 5MB:</P>
          <Code>
{`const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }  // 5MB
});`}
          </Code>
        </li>
        <li>
          <H3>Upload Multiple Files</H3>
          <P>Multer juga mendukung pengunggahan beberapa file sekaligus. Untuk itu, kamu bisa menggunakan <Code>upload.array()</Code> atau <Code>upload.fields()</Code>.</P>
          <Code>
{`app.post('/upload', upload.array('files', 3), (req, res) => {
  res.send('Beberapa file berhasil di-upload');
});`}
          </Code>
        </li>
      </ul>

      <P>Semoga artikel ini bisa memberikan pemahaman yang lebih jelas tentang cara menggunakan Multer di aplikasi Node.js kamu!</P>
    </Section>
  );
};

export default Multer;


// import React from 'react'
// import Section from '../../atoms/Section'
// import H1 from '../../atoms/H1'
// import P from '../../atoms/P'
// import H2 from '../../atoms/H2'
// import H3 from '../../atoms/H3'

// const Multer = () => {
//   return (
//     <Section>
//       <H1>Mengenal Multer: Middleware untuk Meng-upload File di Aplikasi Node.js</H1>

//       <P>Dalam pengembangan aplikasi web, sering kali kita perlu menangani pengunggahan (upload) file, baik itu gambar, dokumen, atau jenis file lainnya. Pada aplikasi berbasis Node.js, salah satu library yang populer untuk menangani file upload adalah Multer.</P>

//       <P>Multer adalah middleware yang digunakan untuk menangani multipart/form-data, format yang sering digunakan saat meng-upload file dalam aplikasi web. Multer mempermudah pengolahan file yang di-upload, seperti menyimpannya di server lokal atau di cloud storage.</P>

//       <H2>Apa Itu Multer?</H2>

//       <P>Multer adalah middleware untuk menangani multipart/form-data, yang umumnya digunakan untuk meng-upload file dalam aplikasi Node.js. Multer berfungsi untuk:</P>

//       <ul className='list-outside list-decimal mb-4 pl-4'>
//         <li>Menangani permintaan HTTP yang berisi file.</li>
//         <li>Memproses file yang di-upload dan menyimpannya ke lokasi yang telah ditentukan, seperti folder lokal atau cloud storage.</li>
//         <li>Menambahkan informasi file ke objek req, sehingga aplikasi bisa mengakses metadata file yang di-upload.
// </li>
//       </ul>

//       <P>Secara teknis, Multer menerima request yang berisi file, kemudian memproses file tersebut sesuai dengan pengaturan yang telah ditentukan dalam konfigurasi. Penggunaannya sangat fleksibel, misalnya untuk menyimpan file dengan nama yang unik, memvalidasi jenis file, atau membatasi ukuran file yang di-upload.</P>

//       <H2>Cara Kerja Multer</H2>
//       <P>Multer bekerja dengan mengubah request yang berisi file menjadi format yang dapat diakses oleh aplikasi. Berikut adalah gambaran umum cara kerja Multer:</P>
//       <ul className='list-outside list-decimal mb-4 pl-4'>
//         <li>
//           <H3>Menangani Permintaan HTTP</H3>
//           <P>Ketika permintaan HTTP yang mengandung file dikirimkan ke server, Multer akan memproses file tersebut.</P>
//         </li>
//         <li>
//           <H3>Memproses dan Menyimpan File</H3>
//           <P>Multer akan menyimpan file-file yang di-upload di lokasi yang sudah ditentukan dalam pengaturan, misalnya di folder uploads/ di server lokal.</P>
//         </li>
//         <li>
//           <H3>Menambahkan Informasi ke Request</H3>
//           <P>Setelah file diproses, Multer akan menambahkan informasi tentang file yang di-upload ke dalam objek req. Informasi ini dapat diakses di route handler.</P>
//         </li>
//         <li>
//           <H3>Contoh Penggunaan Multer dalam Express.js</H3>
//           <P>Untuk lebih memahami cara penggunaan Multer, berikut adalah contoh kode untuk meng-upload file di aplikasi yang dibangun menggunakan Express.js dan Multer.</P>
//         </li>
//       </ul>










// 1. Instalasi Multer
// Untuk menggunakan Multer, pertama-tama kamu harus menginstalnya melalui npm:

// bash
// Salin
// npm install multer
// 2. Setup Express.js dan Multer
// Berikut adalah contoh penerapan Multer dalam aplikasi Express.js:

// javascript
// Salin
// const express = require('express');
// const multer = require('multer');
// const app = express();

// // Setup penyimpanan file
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');  // Tentukan folder penyimpanan file
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);  // Beri nama file dengan timestamp agar unik
//   }
// });

// const upload = multer({ storage: storage });

// // Route untuk meng-upload file
// app.post('/upload', upload.single('file'), (req, res) => {
//   res.send('File berhasil di-upload');
// });

// app.listen(3000, () => {
//   console.log('Server berjalan di port 3000');
// });
// Penjelasan Kode:
// Konfigurasi Penyimpanan File:
// Dengan multer.diskStorage(), kita mengonfigurasi dimana file akan disimpan (destination) dan bagaimana nama file akan disusun (filename). Di sini, file akan disimpan di folder uploads/ dan diberi nama unik berdasarkan timestamp.

// Route /upload:
// Dalam route ini, kita menggunakan middleware upload.single('file') untuk menangani satu file yang di-upload. Nama input file di form HTML adalah file. Setelah file berhasil di-upload, server akan merespons dengan pesan "File berhasil di-upload".

// Menjalankan Server:
// Server Express akan berjalan di port 3000 dan siap menerima permintaan upload file.

// 3. Struktur Folder
// Pastikan kamu memiliki struktur folder seperti berikut:

// bash
// Salin
// /my-app
//   /uploads       <-- Folder untuk menyimpan file yang di-upload
//   /node_modules
//   /public
//   /src
//   app.js         <-- File aplikasi Express
//   package.json
// Fitur Tambahan Multer
// Multer juga mendukung berbagai pengaturan tambahan yang bisa kamu sesuaikan, seperti:

// Validasi Jenis File
// Kamu bisa menambahkan filter untuk membatasi jenis file yang boleh di-upload. Misalnya hanya mengizinkan gambar dengan ekstensi .jpg, .png, atau .gif.
// javascript
// Salin
// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
//     if (!allowedTypes.includes(file.mimetype)) {
//       return cb(new Error('Tipe file tidak didukung'), false);
//     }
//     cb(null, true);
//   }
// });
// Membatasi Ukuran File
// Kamu bisa mengatur batas ukuran file yang boleh di-upload. Misalnya, untuk membatasi ukuran file hingga 5MB:
// javascript
// Salin
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5 * 1024 * 1024 }  // 5MB
// });
// Upload Multiple Files
// Multer juga mendukung pengunggahan beberapa file sekaligus. Untuk itu, kamu bisa menggunakan upload.array() atau upload.fields().
// javascript
// Salin
// app.post('/upload', upload.array('files', 3), (req, res) => {
//   res.send('Beberapa file berhasil di-upload');
// });
// Kesimpulan
// Multer adalah middleware yang sangat berguna untuk menangani pengunggahan file dalam aplikasi Node.js, terutama untuk aplikasi yang menggunakan Express.js. Dengan Multer, kamu bisa menangani berbagai jenis file, memvalidasi file yang di-upload, serta menentukan lokasi penyimpanan yang diinginkan. Selain itu, Multer juga mendukung berbagai pengaturan tambahan seperti membatasi ukuran file atau mengizinkan beberapa file untuk di-upload sekaligus.

// Dengan menggunakan Multer, pengolahan file dalam aplikasi web kamu akan menjadi lebih mudah dan efisien.

// Semoga artikel ini bisa memberikan pemahaman yang lebih jelas tentang cara menggunakan Multer di aplikasi Node.js kamu!




//     </Section>
//   )
// }

// export default Multer
