import RouterView from "../../router/RouterView";
import Sidebar from "../molecules/Sidebar";


function Layout() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <main className="ml-[265px] flex-1 m-4 flex flex-col">
        <header className="text-white p-4 bg-gray-800 rounded-t-lg">
          <h1 className="text-xl">Dashboard</h1>
        </header>

        <section className="mt-1 px-3 py-1 flex-1 overflow-auto bg-gray-300 rounded-b-lg">
          <RouterView />
        </section>
      </main>
    </div>
  )
}

export default Layout;

// >>> Layout 2

// import { Route, Routes } from "react-router-dom";
// import Sidebar from "../molecules/Sidebar";
// import PageContent from "../molecules/PageContents";

// function Layout() {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 ml-64">
//         <Routes>
//           {/* Rute untuk menampilkan artikel berdasarkan kategori */}
//           <Route path="/category/:category" element={<PageContent />} />
//           {/* Rute default */}
//           <Route path="/" element={
//             <div className="p-4">
//               <h2 className="text-2xl">Selamat datang di halaman utama!</h2>
//             </div>
//           } />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default Layout;


// >>> Layout 1

// import Sidebar from '../molecules/Sidebar';
// import RouterView from '../../router/RouterView';

// const Layout = () => {
//   return (
//     <div className="h-screen flex">
//       <Sidebar />
//       <main className="ml-[265px] flex-1 m-4 flex flex-col">
//         {/* Header tetap di tempat */}
//         <header className="text-white p-4 bg-gray-800 rounded-t-lg">
//           <h1 className="text-xl">Dashboard</h1>
//         </header>

//         {/* Konten scrollable dengan rounded bottom dan margin */}
//         <section className="mt-1 px-3 py-1 flex-1 overflow-auto bg-gray-300 rounded-b-lg">
//           <RouterView />
//         </section>
//       </main>
//     </div>
//   );
// }

// export default Layout;
