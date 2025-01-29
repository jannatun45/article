import { Icon } from '@iconify/react';
import FileTree from '../../atoms/FileTree';
import CommandLineInstructions from '../../atoms/CommandLineInstructions';
import { Link } from 'react-router-dom';
import Section from '../../atoms/Section';

const MusicalScale = () => {

  const structurFolder = [
    'Tangga Nada Mayor: T-T-S-T-T-T-S',
    'Tangga Nada Minor: T-S-T-T-S-T-T',
    'Tangga Nada Pentatonik Mayor: C - D - E - G - A',
    'Tangga Nada Blues: A - C - D - D# - E - G',
    'Tangga Nada Chromatic: C - C# - D - D# - E - F - F# - G - G# - A - A# - B - C'
  ];

  return (
    <Section>
      {/* Judul Artikel */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Pengenalan Tangga Nada dalam Musik</h1>

      {/* Paragraf Pembuka */}
      <p className="mb-4 text-lg">
        Tangga nada adalah urutan nada-nada dalam satu oktaf yang disusun secara teratur. Setiap tangga nada memiliki pola interval yang unik dan menciptakan nuansa musik yang berbeda. Artikel ini akan membahas beberapa jenis tangga nada yang sering digunakan dalam musik, seperti tangga nada mayor, minor, pentatonik, blues, dan kromatik.
      </p>

      {/* Tangga Nada Mayor */}
      <h2 className="text-2xl font-semibold mb-4">Tangga Nada Mayor (Major Scale)</h2>
      <p className="mb-4">
        Tangga nada mayor adalah tangga nada yang terdengar ceria dan terang. Pola interval pada tangga nada mayor adalah <strong>T-T-S-T-T-T-S</strong>, dimana T berarti satu langkah dan S berarti setengah langkah.
      </p>
      <p className="mb-4">
        Contoh tangga nada mayor adalah C mayor yang terdiri dari: <code>C - D - E - F - G - A - B - C</code>.
      </p>

      {/* Tangga Nada Minor */}
      <h2 className="text-2xl font-semibold mb-4">Tangga Nada Minor (Minor Scale)</h2>
      <p className="mb-4">
        Tangga nada minor terdengar lebih gelap atau sedih dibandingkan mayor. Pola intervalnya adalah <strong>T-S-T-T-S-T-T</strong>.
      </p>
      <p className="mb-4">
        Contoh tangga nada minor adalah A minor yang terdiri dari: <code>A - B - C - D - E - F - G - A</code>.
      </p>

      {/* Tangga Nada Pentatonik */}
      <h2 className="text-2xl font-semibold mb-4">Tangga Nada Pentatonik</h2>
      <p className="mb-4">
        Tangga nada pentatonik adalah tangga nada dengan hanya lima nada. Ada dua jenis utama: pentatonik mayor dan pentatonik minor.
      </p>
      <FileTree fileStructure={structurFolder} />

      {/* Tangga Nada Blues */}
      <h2 className="text-2xl font-semibold mb-4">Tangga Nada Blues</h2>
      <p className="mb-4">
        Tangga nada blues adalah variasi dari tangga nada pentatonik minor dengan tambahan "blue note". Berikut adalah contoh tangga nada blues di A:
      </p>
      <p className="mb-4">A - C - D - D# - E - G</p>

      {/* Tangga Nada Chromatic */}
      <h2 className="text-2xl font-semibold mb-4">Tangga Nada Chromatic</h2>
      <p className="mb-4">
        Tangga nada kromatik mencakup semua 12 nada dalam satu oktaf. Pola intervalnya adalah setengah langkah di antara setiap nada.
      </p>
      <p className="mb-4">Contoh tangga nada kromatik dimulai dari C: C - C# - D - D# - E - F - F# - G - G# - A - A# - B - C</p>

      {/* Ikon Penutup */}
      <div className="text-center mt-8">
        <Icon icon="twemoji:musical_score" className="text-4xl text-blue-500" />
      </div>
    </Section>
  );
};

export default MusicalScale;
