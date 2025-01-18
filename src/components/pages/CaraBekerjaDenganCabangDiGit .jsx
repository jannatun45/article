import { Icon } from '@iconify/react';

const CaraBekerjaDenganCabangDiGit = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      {/* Judul Artikel */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Cara Bekerja dengan Cabang di Git: Membuat dan Berpindah Cabang untuk Fitur Baru</h1>

      {/* Paragraf Pembuka */}
      <p className="mb-4 text-lg">
        Dalam pengembangan perangkat lunak, terutama ketika bekerja dalam tim, penggunaan sistem kontrol versi seperti <strong>Git</strong> sangat penting. Salah satu konsep dasar yang perlu dipahami adalah bagaimana cara membuat dan berpindah antar cabang (branch) untuk mengelola berbagai fitur dan pengembangan secara terpisah. Berikut adalah langkah-langkah lengkap untuk membuat dan berpindah cabang di Git, serta mengintegrasikan perubahan dari cabang fitur ke cabang utama.
      </p>

      {/* Langkah-langkah */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Langkah-langkah untuk Bekerja dengan Cabang di Git</h2>

      <h3 className="text-xl font-semibold mb-2">1. Buat dan Pindah ke Cabang <code>dev</code></h3>
      <p className="mb-4">
        Langkah pertama adalah memastikan kamu berada di cabang pengembangan utama, yaitu <code>dev</code>. Jika kamu belum berada di cabang tersebut, kamu bisa membuat dan langsung berpindah ke cabang <code>dev</code> dengan perintah berikut:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        git checkout -b dev
      </pre>
      <p className="mb-4">
        Perintah di atas akan membuat cabang baru dengan nama <code>dev</code> dan langsung berpindah ke cabang tersebut.
      </p>

      <h3 className="text-xl font-semibold mb-2">2. Buat Cabang untuk Fitur Tertentu (Misalnya, <code>fitur-a</code>)</h3>
      <p className="mb-4">
        Setelah berada di cabang <code>dev</code>, langkah selanjutnya adalah membuat cabang baru untuk mengerjakan fitur tertentu, misalnya <code>fitur-a</code>. Gunakan perintah berikut:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        git checkout -b fitur-a
      </pre>
      <p className="mb-4">
        Perintah ini akan membuat cabang baru dengan nama <code>fitur-a</code> dan langsung berpindah ke cabang tersebut. Sekarang, kamu bisa mulai bekerja pada fitur A tanpa mengganggu kode di cabang <code>dev</code>.
      </p>

      <h3 className="text-xl font-semibold mb-2">3. Mulai Bekerja pada Fitur A</h3>
      <p className="mb-4">
        Setelah berada di cabang <code>fitur-a</code>, lakukan perubahan yang diperlukan untuk fitur tersebut. Jika sudah selesai melakukan perubahan, jangan lupa untuk menyimpan perubahan dengan cara melakukan commit:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        git add .
        git commit -m "Menambahkan fitur A"
      </pre>
      <p className="mb-4">
        Perintah di atas akan menambahkan perubahan yang telah dilakukan dan membuat commit dengan pesan "Menambahkan fitur A".
      </p>

      <h3 className="text-xl font-semibold mb-2">4. Push Cabang <code>fitur-a</code> ke Remote</h3>
      <p className="mb-4">
        Jika kamu ingin membagikan cabang <code>fitur-a</code> ke server Git (seperti GitHub, GitLab, atau Bitbucket), lakukan push untuk mengirimkan cabang ini ke remote repository:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        git push origin fitur-a
      </pre>
      <p className="mb-4">
        Dengan perintah ini, cabang <code>fitur-a</code> beserta perubahan yang sudah dilakukan akan dikirimkan ke repository remote.
      </p>

      <h3 className="text-xl font-semibold mb-2">5. Kembali ke Cabang <code>dev</code></h3>
      <p className="mb-4">
        Setelah selesai mengerjakan fitur A, kamu perlu kembali ke cabang <code>dev</code> untuk melakukan integrasi atau melanjutkan pengembangan pada cabang utama:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        git checkout dev
      </pre>
      <p className="mb-4">
        Dengan perintah ini, kamu akan berpindah kembali ke cabang <code>dev</code>.
      </p>

      <h3 className="text-xl font-semibold mb-2">6. Menggabungkan Cabang <code>fitur-a</code> ke <code>dev</code></h3>
      <p className="mb-4">
        Setelah fitur A selesai dan siap digabungkan, kamu bisa menggabungkan (merge) cabang <code>fitur-a</code> ke dalam cabang <code>dev</code>. Gunakan perintah berikut untuk menggabungkan perubahan dari <code>fitur-a</code> ke cabang <code>dev</code>:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        git merge fitur-a
      </pre>
      <p className="mb-4">
        Perintah ini akan mengintegrasikan perubahan yang ada di cabang <code>fitur-a</code> ke cabang <code>dev</code>, memastikan bahwa fitur yang telah dikerjakan sekarang menjadi bagian dari cabang utama pengembangan.
      </p>

      <h3 className="text-xl font-semibold mb-2">7. Push Perubahan ke Remote di Cabang <code>dev</code></h3>
      <p className="mb-4">
        Langkah terakhir adalah mengirimkan perubahan yang sudah digabungkan ke cabang <code>dev</code> ke remote repository agar dapat diakses oleh tim lain:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        git push origin dev
      </pre>
      <p className="mb-4">
        Dengan perintah ini, semua perubahan yang telah digabungkan ke dalam cabang <code>dev</code> akan dikirimkan ke remote repository.
      </p>

      {/* Ikon Penutup */}
      <div className="text-center mt-8">
        <Icon icon="twemoji:package" className="text-4xl text-blue-500" />
      </div>
    </div>
  );
};

export default CaraBekerjaDenganCabangDiGit;
