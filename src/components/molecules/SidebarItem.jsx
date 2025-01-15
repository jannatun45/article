import React from 'react';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

const SidebarItem = ({ icon, label }) => {
  return (
    <li className="list-item">
      <a href="#">
        <Icon name={icon} />
        <Text>{label}</Text>
      </a>
    </li>
  );
};

export default SidebarItem;
