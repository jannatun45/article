import { Icon } from '@iconify/react';
import Section from '../../atoms/Section';
import H1 from '../../atoms/H1';
import P from '../../atoms/P';
import unicode from '../../../assets/databases/unicode';
import Highlight from '../../atoms/Highlight';

const UnicodeArticle = () => {


  return (
    <Section>
      {/* Judul Artikel */}
      <H1>Unicode</H1>

      {/* Paragraf Pembuka */}
      <P className="text-lg">
      Berikut adalah beberapa contoh Unicode dan HTML Entity untuk karakter-karakter khusus yang sering digunakan, termasuk beberapa panah dan simbol lainnya
      </P>

      {
        Object.keys(unicode).map((u, index)=> (
          <div key={index} className='overflow-x-auto mb-6 text-sm'>
            <table className='table-auto w-full border-separate border border-gray-800 rounded-lg'>
              <thead>
                <tr className='bg-gray-100'>
                  <th className='border px-4 py-2 text-left'>Nama</th>
                  <th className='border px-4 py-2 text-left'>Karakter</th>
                  <th className='border px-4 py-2 text-left'>HTML Entity</th>
                  <th className='border px-4 py-2 text-left'>Unicode Escape</th>
                </tr>
              </thead>
              <tbody>
              {
                unicode[u].map((item, index) => (
                <tr key={index}>
                  <td className='border px-4 py-2'>{item.nama}</td>
                  <td className='border px-4 py-2'>{item.karakter}</td>
                  <td className='border px-4 py-2'><Highlight>{item.htmlEntity}</Highlight></td>
                  <td className='border px-4 py-2'><Highlight>{item.unicodeEscape}</Highlight></td>
                </tr>          
                ))
              }
              </tbody>
            </table>
          </div>
        ))
      }
      
      {/* Kutipan Pertama */}
      <blockquote className="italic text-gray-600 border-l-4 pl-4 mb-6 border-gray-400">
        "Unicode memungkinkan komputer untuk memahami dan menampilkan teks dalam hampir semua bahasa dunia."
      </blockquote>

      {/* Penjelasan Tentang Kutipan */}
      <p className="mb-6">
        Unicode dirancang untuk menggantikan pengkodean karakter sebelumnya, seperti ASCII, yang hanya mendukung karakter-karakter dalam bahasa Inggris. Dengan adanya Unicode, karakter dari hampir semua bahasa di dunia bisa digunakan dalam aplikasi perangkat lunak tanpa khawatir tentang masalah pengkodean atau kerusakan teks.
      </p>

      {/* Kutipan Tambahan */}
      <blockquote className="italic text-gray-600 border-l-4 pl-4 mb-6 border-gray-400">
        "Menciptakan aplikasi yang mendukung Unicode memastikan bahwa aplikasi Anda akan bekerja di seluruh dunia dengan berbagai bahasa." 
      </blockquote>
      
      <p className="mb-6">
        Dengan mengimplementasikan Unicode, pengembang dapat membuat aplikasi yang dapat diakses oleh lebih banyak orang di berbagai belahan dunia tanpa hambatan bahasa atau simbol.
      </p>

      {/* Contoh Unicode */}
      <h2 className="text-2xl font-semibold mb-4">Contoh Karakter Unicode</h2>
      <p className="mb-6">
        Berikut adalah beberapa contoh karakter Unicode yang dapat digunakan dalam aplikasi Anda:
      </p>

      <div className="mb-6 space-y-4">
        <p>🌍 Dunia - <span className="text-xl">U+1F30D</span></p>
        <p>😊 Senyum - <span className="text-xl">U+1F60A</span></p>
        <p>💻 Komputer - <span className="text-xl">U+1F4BB</span></p>
        <p>❤️ Hati - <span className="text-xl">U+2764</span></p>
        <p>🎉 Perayaan - <span className="text-xl">U+1F389</span></p>
        <p>🚀 Roket - <span className="text-xl">U+1F680</span></p>
        <p>🍕 Pizza - <span className="text-xl">U+1F355</span></p>
        <p>📚 Buku - <span className="text-xl">U+1F4DA</span></p>
        <p>🌟 Bintang - <span className="text-xl">U+1F31F</span></p>
        <p>👨‍💻 Pria dengan Komputer - <span className="text-xl">U+1F468 U+200D U+1F4BB</span></p>
      </div>

      {/* Ikon Penutup */}
      <div className="text-center mt-8">
        <Icon icon="twemoji:globe-with-meridians" className="text-4xl text-blue-500" />
      </div>
    </Section>
  );
};

export default UnicodeArticle;
