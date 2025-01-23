import { Icon } from '@iconify/react';
import Section from '../../atoms/Section';

const Vocabulary = () => {
  return (
    <Section>
      {/* Judul Artikel */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Vocabulary List: Bahasa Indonesia - English</h1>

      {/* Daftar Kosakata */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Language = Bahasa</h2>
      <p className="mb-4">
        "Language" dalam bahasa Inggris berarti "Bahasa" dalam bahasa Indonesia. Contoh kalimat: "She speaks three languages."
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Book = Buku</h2>
      <p className="mb-4">
        "Book" berarti "Buku". Contoh kalimat: "I love reading books in my free time."
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Computer = Komputer</h2>
      <p className="mb-4">
        "Computer" berarti "Komputer". Contoh kalimat: "The computer is on the desk."
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Teacher = Guru</h2>
      <p className="mb-4">
        "Teacher" berarti "Guru". Contoh kalimat: "My teacher is very kind."
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. School = Sekolah</h2>
      <p className="mb-4">
        "School" berarti "Sekolah". Contoh kalimat: "She goes to school every day."
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Car = Mobil</h2>
      <p className="mb-4">
        "Car" berarti "Mobil". Contoh kalimat: "I drive my car to work."
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Food = Makanan</h2>
      <p className="mb-4">
        "Food" berarti "Makanan". Contoh kalimat: "I like to eat Italian food."
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Happy = Bahagia</h2>
      <p className="mb-4">
        "Happy" berarti "Bahagia". Contoh kalimat: "She is happy to see her friends."
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Work = Pekerjaan</h2>
      <p className="mb-4">
        "Work" berarti "Pekerjaan". Contoh kalimat: "He works at a bank."
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">10. House = Rumah</h2>
      <p className="mb-4">
        "House" berarti "Rumah". Contoh kalimat: "My house is near the park."
      </p>

      {/* Ikon Penutup */}
      <div className="text-center mt-8">
        <Icon icon="twemoji:book" className="text-4xl text-blue-500" />
      </div>
    </Section>
  );
};

export default Vocabulary;
