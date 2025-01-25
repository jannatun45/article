import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import SidebarItem from "../atoms/SidebarItem";
import data from "../../db/db";  // Mengambil data dari db

function Sidebar() {
  const [activeItem, setActiveItem] = useState('');  // State untuk menyimpan item yang aktif
  const location = useLocation();  // Untuk mendapatkan informasi lokasi URL
  // Ambil kategori unik dan urutkan secara alfabet tanpa memperhatikan kapital
  const categories = [...new Set(data.map(item => item.category))].sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLowerCase()));  // Ambil kategori unik

  useEffect(() => {
    // Update active item jika path berubah
    const currentCategory = location.pathname.split('/')[2] || '';  // Ambil kategori dari URL
    
    // Set active item sesuai kategori lain
    setActiveItem(currentCategory);
  }, [location.pathname]);  // Hanya jalankan effect saat pathname berubah

  return (
    <div className="fixed w-60 ml-4 my-4 z-10 inset-y-0 flex-wrap items-center justify-between overflow-hidden rounded-lg border-0 p-0 antialiased shadow-none">
      <div className="p-4 bg-gray-800">
        <a href="#" className="block text-end whitespace-nowrap text-slate-700">
          <h2 className="font-semibold text-xl text-gray-100">React Vite</h2>
        </a>
      </div>
      <div className="h-full mt-1 bg-gray-300">
        <ul className="rounded py-2">
          {categories.map(category => (
            <RouterLink to={`/category/${category}`} key={category} aria-current={activeItem === category ? "page" : undefined}>
              <SidebarItem isActive={activeItem === category}>
                {category}
              </SidebarItem>
            </RouterLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
