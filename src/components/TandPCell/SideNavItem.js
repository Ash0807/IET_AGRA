import React, { useState } from "react";

const SideNavItem = ({ sidebarData }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveItemIndex(index);
  };

  return (
    <div className="flex">
      <div className="bg-gray-200 p-4">
        <ul>
          {sidebarData.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 ${
                activeItemIndex === index ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        {sidebarData[activeItemIndex] && sidebarData[activeItemIndex].component}
      </div>
    </div>
  );
};

export default SideNavItem;