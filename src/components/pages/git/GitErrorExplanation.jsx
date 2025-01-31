// src/components/Article.jsx
import { Icon } from '@iconify/react';
import Section from '../../atoms/Section';

const GitErrorExplanation = () => {
  return (
    <Section>
      {/* Judul Artikel */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Mengatasi Error Git "Cannot Lock Ref" Saat Membuat Cabang Baru</h1>

      {/* Paragraf Pembuka */}
      <p className="mb-4 text-lg">
        Saat bekerja dengan Git, kamu mungkin pernah menemui pesan error yang bisa membuat frustrasi, seperti: 
        <code className="bg-gray-200 p-2 rounded">fatal: cannot lock ref 'refs/heads/feature/add-article/multer'</code>.
        Artikel ini akan menjelaskan mengapa error ini terjadi dan bagaimana cara mengatasinya.
      </p>

      {/* Penjelasan Masalah */}
      <h2 className="text-2xl font-semibold mb-4">Penjelasan Masalah</h2>
      <p className="mb-4">
        Pesan error ini muncul ketika kamu mencoba membuat cabang baru dengan nama <code>feature/add-article/multer </code>, tetapi Git sudah memiliki cabang <code>feature/add-article</code>.
        Git tidak mengizinkan sub-cabang seperti ini, karena struktur nama cabang semacam ini bertentangan dengan aturan penamaan Git.
      </p>

      {/* Penyebab Error */}
      <h2 className="text-2xl font-semibold mb-4">Penyebab Error</h2>
      <p className="mb-4">
        Git tidak dapat membuat cabang dengan struktur sub-folder dalam nama cabang. Ini yang menyebabkan error ketika kamu mencoba membuat cabang seperti <code>feature/add-article/multer</code>.
      </p>

      {/* Solusi */}
      <h2 className="text-2xl font-semibold mb-4">Solusi</h2>
      <p className="mb-4">Ada beberapa solusi untuk masalah ini:</p>
      <ul className="list-inside list-disc mb-4">
        <li>Gunakan nama cabang yang berbeda, misalnya <code>feature/add-article-multer</code>.</li>
        <li>Jika cabang <code>feature/add-article</code> tidak diperlukan, hapus cabang tersebut dengan perintah <code>git branch -d feature/add-article</code>.</li>
        <li>Gunakan struktur nama cabang yang lebih deskriptif, seperti <code>feature/article/multer</code>.</li>
      </ul>

      {/* Ikon Penutup */}
      <div className="text-center mt-8">
        <Icon icon="twemoji:gear" className="text-4xl text-blue-500" />
      </div>
    </Section>
  );
};

export default GitErrorExplanation;
