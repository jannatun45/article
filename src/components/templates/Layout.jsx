import RouterView from "../../router/RouterView";
import Section from "../atoms/Section";
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
          {/* <Section> */}
          <RouterView />

          {/* </Section> */}
        </section>
      </main>
    </div>
  )
}

export default Layout;