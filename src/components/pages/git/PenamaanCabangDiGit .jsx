import { Icon } from '@iconify/react';

const PenamaanCabangDiGit = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      {/* Judul Artikel */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Cara Penamaan Cabang di Git</h1>

      {/* Paragraf Pembuka */}
      <p className="mb-4 text-lg">
        Penamaan cabang (branch) di Git adalah salah satu hal penting yang perlu diperhatikan dalam pengembangan perangkat lunak. Penamaan yang jelas dan konsisten akan memudahkan kolaborasi dalam tim serta membantu dalam melacak tujuan atau konteks dari perubahan yang sedang dikerjakan. Berikut adalah beberapa konvensi penamaan cabang yang sering digunakan dalam proyek perangkat lunak.
      </p>

      {/* Subjudul dan Penjelasan */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Cabang Fitur</h2>
      <p className="mb-4">
        Jika kamu membuat cabang untuk mengerjakan fitur baru atau task tertentu, penamaan cabang yang jelas akan membantu dalam memahami fitur yang sedang dikerjakan. Berikut adalah contoh format penamaannya:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        feature/nama-fitur
      </pre>
      <p className="mb-4">
        Contoh cabang fitur:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        feature/auth-login
        feature/user-profile
      </pre>

      {/* Cabang Perbaikan Bug */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cabang Perbaikan Bug</h2>
      <p className="mb-4">
        Jika cabang dibuat untuk memperbaiki bug atau masalah tertentu, biasanya penamaannya menggunakan kata "bugfix" atau "hotfix". Berikut adalah format penamaannya:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        bugfix/nama-issue
        hotfix/nama-perbaikan
      </pre>
      <p className="mb-4">
        Contoh cabang perbaikan bug:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        bugfix/login-error
        hotfix/navbar-typo
      </pre>

      {/* Cabang Pengembangan */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cabang Pengembangan (Development)</h2>
      <p className="mb-4">
        Untuk cabang pengembangan utama atau cabang pengujian, penamaan bisa menggunakan kata "dev" atau "development":
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        dev
        development
      </pre>
      <p className="mb-4">
        Contoh cabang pengembangan:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        dev
        development
      </pre>

      {/* Cabang Rilis */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cabang Rilis (Release)</h2>
      <p className="mb-4">
        Jika cabang dibuat untuk menyiapkan versi rilis atau persiapan untuk produksi, penamaan cabang biasanya menggunakan kata "release" dan nomor versi:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        release/v1.0
        release/2.1.3
      </pre>
      <p className="mb-4">
        Contoh cabang rilis:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        release/v1.0
        release/v2.0.0
      </pre>

      {/* Cabang Pengujian */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cabang Uji Coba (Testing)</h2>
      <p className="mb-4">
        Jika cabang dibuat untuk keperluan pengujian atau eksperimen, gunakan nama cabang yang sesuai, seperti:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        testing
        experiment
      </pre>
      <p className="mb-4">
        Contoh cabang pengujian:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        testing
        experiment/ui-improvement
      </pre>

      {/* Cabang Hotfix */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cabang Hotfix</h2>
      <p className="mb-4">
        Untuk perbaikan mendesak pada produksi, cabang hotfix digunakan untuk menangani masalah dengan cepat:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        hotfix/nama-fix
      </pre>
      <p className="mb-4">
        Contoh cabang hotfix:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        hotfix/urgent-security-fix
      </pre>

      {/* Cabang Dokumentasi */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cabang Dokumentasi</h2>
      <p className="mb-4">
        Jika cabang dibuat untuk menambahkan atau memperbarui dokumentasi, gunakan nama seperti:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        docs/update-readme
        docs/api-docs
      </pre>
      <p className="mb-4">
        Contoh cabang dokumentasi:
      </p>
      <pre className="bg-gray-100 p-4 mb-6 rounded">
        docs/update-readme
        docs/add-api-examples
      </pre>

      {/* Ikon Penutup */}
      <div className="text-center mt-8">
        <Icon icon="twemoji:package" className="text-4xl text-blue-500" />
      </div>
    </div>
  );
};

export default PenamaanCabangDiGit;
