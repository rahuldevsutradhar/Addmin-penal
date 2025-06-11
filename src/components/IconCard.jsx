// import React from "react";
// import { Link } from "react-router-dom";

// const IconCard = ({ title, icon,to }) => {
//   return (
//     <Link to={to}>
//     <div className="px-4 py-2 mx-2 rounded-lg shadow bg-white hover:bg-gray-100 gap-x-3 flex items-center">
//       <div className="w-[25px] h-[30px] text-[18px] text-black hover:text-[#367DFF]
//       flex items-center justify-center">
//         {icon}
//     </div>
//       <h3 className="font-open text-[14px] text-[#9A9A9A]">{title}</h3>

      
//     </div>
//     </Link>
//   );
// };

// export default IconCard;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const IconCard = ({ title, icon, to, subItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = subItems.length > 0;

  return (
    <div className="w-full">
      {/* Main Link or Button */}
      {to && !hasSubItems ? (
        <Link to={to}>
          <div className="px-4 py-2 mx-2 rounded-lg shadow bg-white hover:bg-gray-100 gap-x-3 flex items-center">
            <div className="w-[25px] h-[30px] text-[18px] text-black hover:text-[#367DFF] flex items-center justify-center">
              {icon}
            </div>
            <h3 className="font-open text-[14px] text-[#9A9A9A]">{title}</h3>
          </div>
        </Link>
      ) : (
        <div
          onClick={() => hasSubItems && setIsOpen(!isOpen)}
          className="px-4 py-2 mx-2 rounded-lg shadow bg-white hover:bg-gray-100 gap-x-3 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-x-3">
            <div className="w-[25px] h-[30px] text-[18px] text-black hover:text-[#367DFF] flex items-center justify-center">
              {icon}
            </div>
            <h3 className="font-open text-[14px] text-[#9A9A9A]">{title}</h3>
          </div>
          {hasSubItems && (
            <span className="text-gray-500 text-xs">
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          )}
        </div>
      )}

      {/* Sub-items */}
      {isOpen && hasSubItems && (
        <ul className="ml-12 mt-4 space-y-4 text-sm text-gray-400">
          {subItems.map((item, index) => (
            <li key={index} className="list-disc hover:text-blue-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IconCard;
