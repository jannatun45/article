import CommandLineInstructions from '../../atoms/CommandLineInstructions';
import FileTree from '../../atoms/FileTree';
import { Icon } from '@iconify/react/dist/iconify.js';

const GitBranchSwitching = () => {

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      {/* Judul Artikel */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Mengatasi Peringatan LF dan CRLF dalam Git</h1>

      {/* Paragraf Pembuka */}
      <p className="mb-4 text-lg">
        Pada artikel ini, kita akan membahas cara menangani peringatan terkait perbedaan karakter baris akhir LF dan CRLF dalam Git. Pesan peringatan ini sering muncul ketika bekerja dengan Git di berbagai sistem operasi, seperti Windows dan Linux.
      </p>

      {/* Langkah 1: Memahami Peringatan LF dan CRLF */}
      <h2 className="text-2xl font-semibold mb-4">Langkah 1: Memahami Peringatan LF dan CRLF</h2>
      <p className="mb-4">
        Git menggunakan dua jenis karakter pemisah baris: LF (Line Feed) untuk sistem berbasis Unix (seperti Linux dan macOS) dan CRLF (Carriage Return + Line Feed) untuk Windows. Peringatan yang muncul menunjukkan bahwa Git akan mengganti karakter LF dengan CRLF di file kamu saat diproses di Windows.
      </p>

      {/* Langkah 2: Mengubah Pengaturan Git untuk LF dan CRLF */}
      <h2 className="text-2xl font-semibold mb-4">Langkah 2: Mengubah Pengaturan Git untuk LF dan CRLF</h2>
      <p className="mb-4">
        Untuk menghindari peringatan ini, kamu bisa mengonfigurasi Git untuk menangani LF dan CRLF sesuai kebutuhan proyek. Berikut adalah dua pilihan pengaturan Git:
      </p>

      <p className="mb-4">
        1. **Tetap Menggunakan LF**: Jika kamu ingin menjaga format LF di semua sistem, gunakan perintah berikut:
      </p>
      <CommandLineInstructions code="git config --global core.autocrlf input" />

      <p className="mb-4">
        2. **Mengizinkan Git Menggunakan CRLF di Windows**: Jika kamu ingin Git mengganti LF menjadi CRLF di Windows, gunakan perintah berikut:
      </p>
      <CommandLineInstructions code="git config --global core.autocrlf true" />
    </div>
  );
};
export default GitBranchSwitching
