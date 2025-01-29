import CommandLineInstructions from '../../atoms/CommandLineInstructions';
import Section from '../../atoms/Section';
import P from '../../atoms/P';
import H1 from '../../atoms/H1';
import H2 from '../../atoms/H2';

const HydrateFallbackInSSR = () => {
  return (
    <Section>
      {/* Judul Artikel */}
      <H1>Memahami Penggunaan HydrateFallback di React Router dengan SSR</H1>

      {/* Paragraf Pembuka */}
      <P>
        Pada artikel ini, kita akan membahas apa itu `HydrateFallback`, bagaimana cara kerjanya, serta bagaimana komponen ini digunakan dalam aplikasi React Router, khususnya ketika kita menggunakan Server-Side Rendering (SSR). Jika kamu menggunakan SSR untuk aplikasi React, komponen `HydrateFallback` bisa menjadi elemen yang sangat berguna untuk menangani UI yang ditampilkan sebelum aplikasi sepenuhnya dihidrasi di sisi klien.
      </P>

      {/* Penjelasan Lebih Lanjut tentang HydrateFallback */}
      <H2>Apa itu Hidrasi?</H2>
      <P>
        Hidrasi adalah proses di mana aplikasi React yang telah di-render di server (menggunakan SSR) kemudian di-"hidupkan" kembali di sisi klien (browser). Setelah halaman HTML statis diterima di browser, React akan melanjutkan untuk "mengambil alih" dan menjalankan logika aplikasi, menghubungkan event listener, dan menginisialisasi state yang diperlukan agar aplikasi bisa interaktif dan dinamis.
      </P>
 
      <P>
        Proses ini terdiri dari dua bagian:
      </P>
      <ul className="list-disc pl-6">
        <li><strong>SSR (Server-Side Rendering):</strong> Server mengirimkan HTML statis ke browser.</li>
        <li><strong>Hidrasi:</strong> Setelah HTML dimuat di browser, React "mengambil alih" dan menjalankan logika aplikasi di sisi klien.</li>
      </ul>

      <H2>Fungsi dari `HydrateFallback`</H2>
      <P>
        Komponen `HydrateFallback` digunakan untuk menangani UI yang ditampilkan sebelum proses hidrasi selesai. Dalam banyak kasus, kamu mungkin ingin menunjukkan indikator pemuatan (seperti spinner atau placeholder) saat aplikasi sedang dihidrasi di browser. Komponen ini memberikan cara yang mudah untuk menampilkan UI sementara sampai aplikasi sepenuhnya dihidupkan di sisi klien.
      </P>

      <P>
        Secara lebih rinci, fungsi utama `HydrateFallback` adalah sebagai berikut:
      </P>
      <ul className="list-disc pl-6">
        <li><strong>Fallback UI:</strong> Menampilkan UI sementara selama hidrasi, seperti loading spinner atau teks "Loading...".</li>
        <li><strong>SSR & Hidrasi:</strong> Memastikan bahwa aplikasi yang dirender di server tetap konsisten dengan aplikasi yang dijalankan di klien setelah hidrasi selesai.</li>
      </ul>

      <H2>Kapan `HydrateFallback` Digunakan?</H2>
      <P>
        Komponen ini sangat berguna saat kamu menggabungkan React Router dengan server-side rendering (SSR). SSR memungkinkan kamu merender aplikasi di server dan mengirimkan HTML statis ke browser. Namun, setelah halaman dimuat di browser, aplikasi perlu dihidrasi agar dapat bekerja secara interaktif. Selama proses ini, `HydrateFallback` akan menampilkan UI sementara hingga proses hidrasi selesai.
      </P>

      <H2>Contoh Penggunaan `HydrateFallback` dalam Layout</H2>
      <P>
        Berikut adalah contoh penggunaan `HydrateFallback` dalam komponen layout di aplikasi React dengan SSR:
      </P>

      <CommandLineInstructions code={`import { HydrateFallback } from 'react-router-dom';

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <HydrateFallback>Loading...</HydrateFallback> {/* Menunggu hidrasi */}
        {children}
      </body>
    </html>
);`} />

      {/* <P>
        Pada contoh di atas, `HydrateFallback` akan menampilkan teks "Loading..." atau elemen UI lainnya sementara aplikasi sedang dihidrasi. Setelah hidrasi selesai, konten yang ada di dalam `{children}` akan ditampilkan.
      </P> */}

      <H2>Fungsi Utama dari `HydrateFallback`</H2>
      <P>
        Ada beberapa fungsi utama dari komponen `HydrateFallback`:
      </P>
      <ul className="list-disc pl-6">
        <li><strong>Handling UI State sebelum Hidrasi Selesai:</strong> Menampilkan UI sementara seperti loading spinner agar pengguna tidak melihat halaman kosong atau aplikasi yang tidak responsif.</li>
        <li><strong>Pengalaman Pengguna yang Lebih Baik:</strong> Dengan menggunakan `HydrateFallback`, pengguna akan melihat sesuatu yang berguna (misalnya loading indicator) sementara aplikasi dihidupkan sepenuhnya di sisi klien.</li>
      </ul>

      {/* Kesimpulan */}
      <H2>Kesimpulan</H2>
      <P>
        `HydrateFallback` adalah komponen yang sangat berguna ketika bekerja dengan aplikasi React yang menggunakan server-side rendering (SSR). Komponen ini memungkinkan kamu untuk memberikan pengalaman pengguna yang lebih baik dengan menampilkan UI sementara saat proses hidrasi sedang berlangsung. Setelah aplikasi sepenuhnya dihidupkan di sisi klien, UI yang sesungguhnya akan ditampilkan dengan mulus.
      </P>

      <P>
        Semoga penjelasan ini membantu kamu memahami konsep dan penggunaan `HydrateFallback`. Jika kamu memiliki pertanyaan atau membutuhkan penjelasan lebih lanjut, jangan ragu untuk bertanya!
      </P>
    </Section>
  );
};

export default HydrateFallbackInSSR;
