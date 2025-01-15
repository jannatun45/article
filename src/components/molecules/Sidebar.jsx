import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import SidebarItem from "../atoms/SidebarItem";
import { useLocation } from "react-router-dom";
import data from "../../db/db"

function Sidebar() {
  const [activeItem, setActiveItem] = useState('Home');
  const location = useLocation();

  const categories = [...new Set(data.map(item => item.category))]

  console.log('categories =>', categories)

  const items = data.map(item => ({
    name: item.title,
    path: item.path
  }))

  useEffect(() => {
    const currentPath = (location.pathname);
    console.log("Current Path:", currentPath); // Log path saat ini
    // const active = items.find(item => console.log("item path => ", item.path,"current path => ", currentPath));
    const active = items.find(item => item.path === currentPath)?.name;
    console.log("Normalized Current Path:", currentPath);
    console.log("Active Item:", active); // Log item yang aktif
    if (active) {
      setActiveItem(active);
    } else {
      setActiveItem('Home');
    }
  }, [location.pathname]);

  return (
    <div className="fixed w-60 ml-4 my-4 z-10 inset-y-0 flex-wrap items-center justify-between overflow-hidden rounded-lg border-0 p-0 antialiased shadow-none">
      <div className="p-4 bg-gray-800">
        <a href="#" className="block text-end whitespace-nowrap text-slate-700">
          <h2 className="font-semibold text-xl text-gray-100">React Vite</h2>
        </a>
      </div>
      <div className="h-full mt-1 bg-gray-300">
        <ul className="rounded py-2">
          {items.map(item => (
            <RouterLink to={item.path} key={item.name} aria-current={activeItem === item.name ? "page" : undefined}>
              <SidebarItem isActive={activeItem === item.name}>
                {item.name}
              </SidebarItem>
            </RouterLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
 