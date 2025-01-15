import SidebarItem from '../molecules/SidebarItem';

const Sidebar = () => {
  return (
    <div className="navigation">
      <ul>
        <SidebarItem icon="home-outline" label="Home" />
        <SidebarItem icon="person-outline" label="Profile" />
        <SidebarItem icon="chatbubble-outline" label="Messages" />
        <SidebarItem icon="camera-outline" label="Photos" />
        <SidebarItem icon="settings-outline" label="Settings" />
      </ul>
    </div>
  );
};

export default Sidebar;
