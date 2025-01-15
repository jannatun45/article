import Sidebar from '../molecules/Sidebar';
import RouterView from '../../router/RouterView';

const Layout = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <main className="ml-[265px] flex-1 m-4 flex flex-col">
        {/* Header tetap di tempat */}
        <header className="text-white p-4 bg-gray-800 rounded-t-lg">
          <h1 className="text-xl">Dashboard</h1>
        </header>

        {/* Konten scrollable dengan rounded bottom dan margin */}
        <section className="mt-1 px-3 py-1 flex-1 overflow-auto bg-gray-300 rounded-b-lg">
          <RouterView />
        </section>
      </main>
    </div>
  );
}

export default Layout;
