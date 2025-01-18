import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import SidebarItem from "../atoms/SidebarItem";
import data from "../../db/db";  // Mengambil data dari db

function Sidebar() {
  const [activeItem, setActiveItem] = useState('All');  // State untuk menyimpan item yang aktif
  const location = useLocation();  // Untuk mendapatkan informasi lokasi URL
  const categories = [...new Set(data.map(item => item.category))];  // Ambil kategori unik

  useEffect(() => {
    // Update active item jika path berubah
    const currentCategory = location.pathname.split('/')[2] || 'All';  // Ambil kategori dari URL
    
    // Periksa jika path adalah "/category/all"
    if (currentCategory === 'all') {
      setActiveItem('All');  // Jika path adalah "all", set active item ke "All"
    } else {
      setActiveItem(currentCategory);  // Set active item sesuai kategori lain
    }
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
          {/* Menampilkan kategori "All" dan kategori unik */}
          <RouterLink to="/category/all" key="all" aria-current={activeItem === 'All' ? "page" : undefined}>
            <SidebarItem isActive={activeItem === 'All'}>
              All
            </SidebarItem>
          </RouterLink>
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





// >>>>> Type 2

// import { useEffect, useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import data from "../../db/db"; // Pastikan data ini terimport dengan benar

// function Sidebar() {
//   const [activeCategory, setActiveCategory] = useState(null);
//   const location = useLocation();

//   // Kelompokkan item berdasarkan kategori
//   const categories = [...new Set(data.map(item => item.category))];

//   // Menangani perubahan kategori saat klik
//   const handleCategoryClick = (category) => {
//     setActiveCategory(category);
//   };

//   useEffect(() => {
//     // Update kategori yang aktif berdasarkan path yang dikunjungi
//     const currentCategory = location.pathname.split("/").pop(); // Ambil kategori dari URL
//     setActiveCategory(currentCategory);
//   }, [location.pathname]);

//   return (
//     <div className="fixed w-60 ml-4 my-4 z-10 inset-y-0 flex-wrap items-center justify-between overflow-hidden rounded-lg border-0 p-0 antialiased shadow-none">
//       <div className="p-4 bg-gray-800">
//         <a href="#" className="block text-end whitespace-nowrap text-slate-700">
//           <h2 className="font-semibold text-xl text-gray-100">React Vite</h2>
//         </a>
//       </div>
//       <div className="h-full mt-1 bg-gray-300">
//         <ul className="rounded py-2">
//           {categories.map(category => (
//             <li key={category}>
//               <RouterLink
//                 to={`/category/${category}`}
//                 className={`block px-4 py-2 rounded hover:bg-gray-600 ${activeCategory === category ? 'bg-gray-700' : ''}`}
//                 onClick={() => handleCategoryClick(category)}
//               >
//                 {category}
//               </RouterLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

// >>>>> type 1

// import { useEffect, useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import SidebarItem from "../atoms/SidebarItem";
// import { useLocation } from "react-router-dom";
// import data from "../../db/db"

// function Sidebar() {
//   const [activeItem, setActiveItem] = useState('Home');
//   const location = useLocation();

//    // Kelompokkan item berdasarkan kategori
//   const categories = [...new Set(data.map(item => item.category))]

//   console.log('categories =>', categories)

//   // menangani perubahan category pada saat di click

//   const items = data.map(item => ({
//     category: item.category,
//     name: item.title,
//     path: item.path
//   }))

//   useEffect(() => {
//     const currentPath = (location.pathname);
//     console.log("Current Path:", currentPath); // Log path saat ini
//     // const active = items.find(item => console.log("item path => ", item.path,"current path => ", currentPath));
//     const active = items.find(item => item.path === currentPath)?.name;
//     console.log("Normalized Current Path:", currentPath);
//     console.log("Active Item:", active); // Log item yang aktif
//     if (active) {
//       setActiveItem(active);
//     } else {
//       setActiveItem('Home');
//     }
//   }, [location.pathname]);

//   return (
//     <div className="fixed w-60 ml-4 my-4 z-10 inset-y-0 flex-wrap items-center justify-between overflow-hidden rounded-lg border-0 p-0 antialiased shadow-none">
//       <div className="p-4 bg-gray-800">
//         <a href="#" className="block text-end whitespace-nowrap text-slate-700">
//           <h2 className="font-semibold text-xl text-gray-100">React Vite</h2>
//         </a>
//       </div>
//       <div className="h-full mt-1 bg-gray-300">
//         <ul className="rounded py-2">
//           {items.map(item => (
//             <RouterLink to={item.path} key={item.name} aria-current={activeItem === item.name ? "page" : undefined}>
//               <SidebarItem isActive={activeItem === item.name}>
//                 {item.name}
//               </SidebarItem>
//             </RouterLink>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
 