import React from 'react';
import Section from '../../atoms/Section';
import P from '../../atoms/P';
import H1 from '../../atoms/H1';
import Highlight from '../../atoms/Highlight';
import H2 from '../../atoms/H2';

const Shortcut = () => {
  return (
    <Section>
      {/* Judul Artikel */}
      <H1>
        Daftar Shortcut Visual Studio Code
      </H1>

      {/* Deskripsi Umum */}
      <P>
        shortcut keyboard Visual Studio Code yang sangat berguna untuk mempercepat alur kerja, dibagi berdasarkan kategori. Beberapa shortcut ini berlaku untuk Windows.
      </P>

            {/* Ringkasan Shortcut */}
            <H2>Ringkasan Beberapa Shortcut Penting:</H2>
      <div className="overflow-x-auto mb-6 text-sm">
        <table className="table-auto w-full border-separate border border-gray-800 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Aksi</th>
              <th className="border px-4 py-2 text-left">Windows/Linux</th>
              {/* <th className="border px-4 py-2 text-left">macOS</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Mencari file</td>
              <td className="border px-4 py-2"><Highlight>Ctrl + P</Highlight></td>
              {/* <td className="border px-4 py-2"><Highlight>Cmd + P</Highlight></td> */}
            </tr>
            <tr>
              <td className="border px-4 py-2">Mencari dan mengganti kata</td>
              <td className="border px-4 py-2"><Highlight>Ctrl + F, Ctrl + H</Highlight></td>
              {/* <td className="border px-4 py-2"><Highlight>Cmd + F, Cmd + H</Highlight></td> */}
            </tr>
            <tr>
              <td className="border px-4 py-2">Membuka terminal</td>
              <td className="border px-4 py-2"><Highlight>Ctrl + ~</Highlight></td>
              {/* <td className="border px-4 py-2"><Highlight>Cmd + ~</Highlight></td> */}
            </tr>
            <tr>
              <td className="border px-4 py-2">Komentari baris kode</td>
              <td className="border px-4 py-2"><Highlight>Ctrl + /</Highlight></td>
              {/* <td className="border px-4 py-2"><Highlight>Cmd + /</Highlight></td> */}
            </tr>
            <tr>
              <td className="border px-4 py-2">Pindah antar tab</td>
              <td className="border px-4 py-2"><Highlight>Ctrl + Tab</Highlight></td>
              {/* <td className="border px-4 py-2"><Highlight>Cmd + Tab</Highlight></td> */}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Navigasi */}
      <H2>Navigasi:</H2>
      <ul className="list-none mb-4">
        <li className="mb-2">
          <Highlight>Ctrl + P / Cmd + P (macOS):</Highlight> Quick Open – Mencari dan membuka file dalam proyek.
        </li>
        <li className="mb-2">
          <Highlight>Ctrl + Shift + P / Cmd + Shift + P:</Highlight> Command Palette – Mengakses semua perintah dan command yang ada di VS Code.
        </li>
        <li className="mb-2">
          <Highlight>Ctrl + Tab / Cmd + Tab:</Highlight> Pindah antar tab yang terbuka.
        </li>
        <li className="mb-2">
          <Highlight>Ctrl + Shift + Tab / Cmd + Shift + Tab:</Highlight> Pindah ke tab sebelumnya.
        </li>
        <li className="mb-2">
          <Highlight>Ctrl + B / Cmd + B:</Highlight> Toggle panel Explorer di sisi kiri (menyembunyikan atau menampilkan panel).
        </li>
        <li className="mb-2">
          <Highlight>Ctrl + ` / Cmd + `:</Highlight> Buka atau tutup terminal (integrated terminal).
        </li>
      </ul>

      {/* Editing */}
      <H2>Editing:</H2>
      <ul className="list-none mb-4">
        <li className="mb-2">
          <Highlight>Ctrl + / / Cmd + /:</Highlight> Komentari atau uncomment baris kode yang dipilih (bisa diaktifkan untuk banyak baris).
        </li>
        <li className="mb-2">
          <Highlight>Ctrl + Shift + A / Cmd + Shift + A:</Highlight> Menambahkan komentar blok (/* */) untuk kode.
        </li>
        <li className="mb-2">
          <Highlight>Ctrl + D / Cmd + D:</Highlight> Pilih kata berikutnya yang cocok dengan yang sedang dipilih.
        </li>
        <li className="mb-2">
          <Highlight>Ctrl + Shift + D / Cmd + Shift + D:</Highlight> Pilih semua kemunculan kata yang dipilih.
        </li>
        <li className="mb-2">
          <Highlight>Alt + Up Arrow / Option + Up Arrow:</Highlight> Pindah baris ke atas.
        </li>
        <li className="mb-2">
          <Highlight>Alt + Down Arrow / Option + Down Arrow:</Highlight> Pindah baris ke bawah.
        </li>
        <li className="mb-2">
          <Highlight>Ctrl + Space / Cmd + Space:</Highlight> Autocomplete – Menampilkan saran otomatis berdasarkan kode yang ada.
        </li>
        <li className="mb-2">
          <Highlight>Ctrl + Shift + Space / Cmd + Shift + Space:</Highlight> Menampilkan informasi parameter untuk fungsi (parameter hints).
        </li>
      </ul>

      {/* Tips Tambahan */}
      <H2>Tips Tambahan:</H2>
      <p className="mb-6">
        Kamu bisa melihat dan mengonfigurasi semua shortcut di VSCode dengan membuka Command Palette (<Highlight>Ctrl + Shift + P</Highlight> atau <Highlight>Cmd + Shift + P</Highlight>), lalu mengetikkan <strong>Preferences: Open Keyboard Shortcuts</strong>.
      </p>
      <p className="mb-6">
        Di sana, kamu juga bisa menyesuaikan shortcut sesuai dengan kebutuhanmu.
      </p>

      <p className="text-lg">
        Semoga daftar shortcut ini membantu meningkatkan produktivitas kamu saat bekerja di Visual Studio Code! Let me know if you need more shortcuts or explanations! 😊
      </p>
    </Section>
  );
};

export default Shortcut;


// import React from 'react';
// import Section from '../../atoms/Section'; // Pastikan ada Section component untuk membungkus konten

// const Shortcut = () => {
//   return (
//     <Section>
//       {/* Judul Artikel */}
//       <h1 className="text-3xl font-semibold mb-6 text-center">
//         Daftar Shortcut Keyboard di Visual Studio Code
//       </h1>

//       {/* Navigasi */}
//       <H2>Navigasi:</H2>
//       <ul className="list-disc ml-6 mb-4">
//         <li><strong>Ctrl + P / Cmd + P (macOS):</strong> Quick Open – Mencari dan membuka file dalam proyek.</li>
//         <li><strong>Ctrl + Shift + P / Cmd + Shift + P:</strong> Command Palette – Mengakses semua perintah dan command yang ada di VS Code.</li>
//         <li><strong>Ctrl + Tab / Cmd + Tab:</strong> Pindah antar tab yang terbuka.</li>
//         <li><strong>Ctrl + Shift + Tab / Cmd + Shift + Tab:</strong> Pindah ke tab sebelumnya.</li>
//         <li><strong>Ctrl + B / Cmd + B:</strong> Toggle panel Explorer di sisi kiri (menyembunyikan atau menampilkan panel).</li>
//         <li><strong>Ctrl + ` / Cmd + `:</strong> Buka atau tutup terminal (integrated terminal).</li>
//       </ul>

//       {/* Editing */}
//       <H2>Editing:</H2>
//       <ul className="list-disc ml-6 mb-4">
//         <li><strong>Ctrl + / / Cmd + /:</strong> Komentari atau uncomment baris kode yang dipilih (bisa diaktifkan untuk banyak baris).</li>
//         <li><strong>Ctrl + Shift + A / Cmd + Shift + A:</strong> Menambahkan komentar blok (/* */) untuk kode.</li>
//         <li><strong>Ctrl + D / Cmd + D:</strong> Pilih kata berikutnya yang cocok dengan yang sedang dipilih.</li>
//         <li><strong>Ctrl + Shift + D / Cmd + Shift + D:</strong> Pilih semua kemunculan kata yang dipilih.</li>
//         <li><strong>Alt + Up Arrow / Option + Up Arrow:</strong> Pindah baris ke atas.</li>
//         <li><strong>Alt + Down Arrow / Option + Down Arrow:</strong> Pindah baris ke bawah.</li>
//         <li><strong>Ctrl + Space / Cmd + Space:</strong> Autocomplete – Menampilkan saran otomatis berdasarkan kode yang ada.</li>
//         <li><strong>Ctrl + Shift + Space / Cmd + Shift + Space:</strong> Menampilkan informasi parameter untuk fungsi (parameter hints).</li>
//       </ul>

//       {/* File Management */}
//       <H2>File Management:</H2>
//       <ul className="list-disc ml-6 mb-4">
//         <li><strong>Ctrl + N / Cmd + N:</strong> Buka file baru.</li>
//         <li><strong>Ctrl + S / Cmd + S:</strong> Simpan file yang sedang dibuka.</li>
//         <li><strong>Ctrl + Shift + S / Cmd + Shift + S:</strong> Simpan file dengan nama baru.</li>
//         <li><strong>Ctrl + W / Cmd + W:</strong> Tutup file yang sedang dibuka.</li>
//         <li><strong>Ctrl + Shift + T / Cmd + Shift + T:</strong> Buka tab terakhir yang ditutup kembali.</li>
//         <li><strong>Ctrl + Shift + N / Cmd + Shift + N:</strong> Buka jendela baru VS Code.</li>
//       </ul>

//       {/* Search and Replace */}
//       <H2>Search and Replace:</H2>
//       <ul className="list-disc ml-6 mb-4">
//         <li><strong>Ctrl + F / Cmd + F:</strong> Find – Mencari kata di file yang sedang dibuka.</li>
//         <li><strong>Ctrl + H / Cmd + H:</strong> Replace – Mencari dan mengganti kata di file yang sedang dibuka.</li>
//         <li><strong>Ctrl + Shift + F / Cmd + Shift + F:</strong> Find in Files – Mencari kata di seluruh proyek.</li>
//         <li><strong>Ctrl + Shift + H / Cmd + Shift + H:</strong> Replace in Files – Mencari dan mengganti kata di seluruh proyek.</li>
//       </ul>

//       {/* Code Navigation */}
//       <H2>Code Navigation:</H2>
//       <ul className="list-disc ml-6 mb-4">
//         <li><strong>F12:</strong> Go to Definition – Pergi ke definisi suatu fungsi, variabel, atau kelas.</li>
//         <li><strong>Alt + F12 / Option + F12:</strong> Peek Definition – Lihat definisi tanpa meninggalkan posisi saat ini.</li>
//         <li><strong>Ctrl + Shift + O / Cmd + Shift + O:</strong> Go to Symbol – Navigasi ke simbol tertentu dalam file.</li>
//         <li><strong>Ctrl + Shift + M / Cmd + Shift + M:</strong> Problems – Menampilkan daftar masalah atau error dalam proyek.</li>
//         <li><strong>Ctrl + T / Cmd + T:</strong> Go to Type – Menampilkan daftar semua tipe simbol di dalam proyek.</li>
//       </ul>

//       {/* Multi-Cursor and Selection */}
//       <H2>Multi-Cursor and Selection:</H2>
//       <ul className="list-disc ml-6 mb-4">
//         <li><strong>Alt + Click / Option + Click:</strong> Tambah kursor baru di tempat lain dalam file.</li>
//         <li><strong>Ctrl + Alt + Down Arrow / Cmd + Option + Down Arrow:</strong> Tambah kursor di bawah baris yang sedang dipilih.</li>
//         <li><strong>Ctrl + Alt + Up Arrow / Cmd + Option + Up Arrow:</strong> Tambah kursor di atas baris yang sedang dipilih.</li>
//         <li><strong>Ctrl + D / Cmd + D:</strong> Pilih kata berikutnya untuk pengeditan bersamaan (multi-cursor).</li>
//         <li><strong>Ctrl + Shift + L / Cmd + Shift + L:</strong> Pilih semua kemunculan kata yang dipilih.</li>
//       </ul>

//       {/* Integrated Terminal */}
//       <H2>Integrated Terminal:</H2>
//       <ul className="list-disc ml-6 mb-4">
//         <li><strong>Ctrl + ~ / Cmd + ~:</strong> Buka atau tutup integrated terminal.</li>
//         <li><strong>Ctrl + Shift + `:</strong> Buka terminal baru.</li>
//         <li><strong>Ctrl + C:</strong> Stop running process di terminal.</li>
//         <li><strong>Ctrl + Shift + C:</strong> Copy path file yang sedang dibuka ke clipboard.</li>
//         <li><strong>Ctrl + Shift + V:</strong> Paste ke terminal.</li>
//       </ul>

//       {/* Version Control (Git) */}
//       <H2>Version Control (Git):</H2>
//       <ul className="list-disc ml-6 mb-4">
//         <li><strong>Ctrl + Shift + G / Cmd + Shift + G:</strong> Git Source Control – Buka panel Git untuk commit dan perubahan file.</li>
//         <li><strong>Ctrl + Enter / Cmd + Enter:</strong> Commit perubahan di Git (di dalam panel Source Control).</li>
//         <li><strong>Ctrl + Shift + P / Cmd + Shift + P:</strong> Push Changes atau Pull Changes dari Git.</li>
//       </ul>

//       {/* Window and Editor Management */}
//       <H2>Window and Editor Management:</H2>
//       <ul className="list-disc ml-6 mb-4">
//         <li><strong>Ctrl + Shift + E / Cmd + Shift + E:</strong> Explorer – Menampilkan panel Explorer untuk melihat file.</li>
//         <li><strong>Ctrl + Shift + F / Cmd + Shift + F:</strong> Search – Menampilkan pencarian global di proyek.</li>
//         <li><strong>Ctrl + Shift + P / Cmd + Shift + P:</strong> Command Palette – Akses ke semua perintah dan konfigurasi.</li>
//       </ul>

//       {/* Ringkasan */}
//       <H2>Ringkasan Beberapa Shortcut Penting:</H2>
//       <ul className="list-disc ml-6 mb-4">
//         <li><strong>Mencari file:</strong> Ctrl + P / Cmd + P</li>
//         <li><strong>Mencari dan mengganti kata:</strong> Ctrl + F, Ctrl + H / Cmd + F, Cmd + H</li>
//         <li><strong>Membuka terminal:</strong> Ctrl + ~ / Cmd + ~</li>
//         <li><strong>Komentari baris kode:</strong> Ctrl + / / Cmd + /</li>
//         <li><strong>Navigasi ke baris tertentu:</strong> Ctrl + G / Cmd + G</li>
//         <li><strong>Buka panel Source Control:</strong> Ctrl + Shift + G / Cmd + Shift + G</li>
//         <li><strong>Buka Command Palette:</strong> Ctrl + Shift + P / Cmd + Shift + P</li>
//         <li><strong>Pindah antar tab:</strong> Ctrl + Tab / Cmd + Tab</li>
//         <li><strong>Buka file baru:</strong> Ctrl + N / Cmd + N</li>
//       </ul>
//     </Section>
//   );
// };

// export default Shortcut;


// import React from 'react'
// import Section from '../../atoms/Section'
// import H1 from '../../atoms/H1'

// const Shortcut = () => {
//   return (
//     <Section>
//       <H1>Shortcut In Visual Studio Code</H1>
//     </Section>
//   )
// }

// export default Shortcut
