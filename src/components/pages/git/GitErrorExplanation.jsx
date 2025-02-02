// src/components/Article.jsx
import { Icon } from '@iconify/react';
import Section from '../../atoms/Section';
import Code from '../../atoms/Code';
import H1 from '../../atoms/H1';
import CommandLineInstructions from '../../atoms/CommandLineInstructions';
import P from '../../atoms/P';
import H2 from '../../atoms/H2';
import H3 from '../../atoms/H3';

const GitErrorExplanation = () => {
  return (
    <Section>
      {/* Judul Artikel */}
      <H1>Mengatasi Error Git "Cannot Lock Ref" Saat Membuat Cabang Baru</H1>

      {/* Paragraf Pembuka */}
      <P>
        Pesan error yang kamu terima terjadi karena ada konflik dengan nama cabang yang sedang kamu coba buat di Git. Berikut penjelasan lebih lanjut tentang masalah tersebut:
      </P>

      <CommandLineInstructions code="fatal: cannot lock ref 'refs/heads/feature/add-article/multer'"/>

      {/* Penjelasan Masalah */}
      <H2>Penjelasan Masalah</H2>
      <CommandLineInstructions code="$ git checkout -b feature/add-article/multer" className="mb-4"/>
      <P>Git mencoba untuk membuat cabang baru dengan nama <Code>feature/add-article/multer.</Code> Namun, <span className='underline decoration-gray-600'>Git mengalami masalah karena sudah ada cabang dengan nama feature/add-article yang sudah ada sebelumnya.</span> Di Git, nama cabang tidak bisa dibagi menjadi lebih dari satu level. Jadi, jika ada cabang bernama <Code>feature/add-article</Code>, Git tidak bisa membuat cabang baru <Code>feature/add-article/multer</Code> karena ini bertentangan dengan aturan penamaan.</P>

      {/* Penyebab Error */}
      <H2>Penyebab Error</H2>
      <ul className="list-outside list-disc mb-4 pl-4">
        <li>Git tidak bisa membuat sub-cabang dari cabang yang sudah ada dengan nama yang serupa, seperti yang coba kamu buat, <Code>feature/add-article/multer.</Code> Git menganggap bahwa <Code>feature/add-article</Code> adalah cabang utama, dan Git tidak mengizinkan membuat cabang dengan nama yang memiliki struktur hirarki.</li>
      </ul>

      {/* Solusi */}
      <H2>Solusi</H2>
      <P>Ada beberapa solusi untuk masalah ini:</P>
      <ul className="list-outside list-decimal mb-4 pl-4">
        <li>
          <H3>Gunakan Nama Cabang yang Berbeda</H3>
          <P>Kamu bisa mengganti nama cabang baru agar tidak ada konflik dengan cabang yang sudah ada. Misalnya: </P>
          <CommandLineInstructions code="git checkout -b feature/add-article-multer"/>
        </li>
        <li>
          <H3>Hapus Cabang yang Tidak Diperlukan</H3>
          <P>Jika cabang feature/add-article tidak diperlukan, kamu bisa menghapusnya terlebih dahulu sebelum mencoba membuat cabang baru. Gunakan perintah berikut untuk menghapus cabang yang ada: 
          </P>
          <CommandLineInstructions code="git branch -d feature/add-article"/>
          <P>Setelah itu, coba lagi membuat cabang baru dengan perintah yang sama:</P>
          <CommandLineInstructions code="git checkout -b feature/add-article/multer"/>
        </li>
        <li>
          <H3>Menggunakan Struktur Subfolder di dalam Cabang</H3>
          <P>
            Jika kamu ingin tetap membuat struktur hierarki dalam nama cabang, cara terbaik adalah dengan menggunakan nama cabang yang lebih deskriptif, seperti:
          </P>
          <CommandLineInstructions code="git checkout -b feature/article/multer"/>
        </li>
      </ul>

      {/* Ikon Penutup */}
      <P>Semoga ini bisa membantu kamu mengatasi masalah tersebut! Jika ada lagi yang perlu dibantu, feel free to ask. 😊</P>
    </Section>
  );
};

export default GitErrorExplanation;
