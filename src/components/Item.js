// import React from 'react';

// const Item = ({ title, link_url, completed, onToggle, onDelete }) => {
//   return (
//     <div className="flex items-center gap-2 border-b-2 border-blue-100 pb-2">
//       <input
//         type="checkbox"
//         checked={completed}
//         onChange={onToggle}
//         className="h-4 w-4"
//       />
//       <span className={`flex-1 ${completed ? 'line-through opacity-70' : ''}`}>
//         {title}
//       </span>
//       <a
//         href={link_url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-400 hover:underline"
//       >
//         Link
//       </a>
//       <button
//         onClick={onDelete}
//         className="bg-red-600 hover:bg-red-700 text-white p-1 rounded"
//       >
//         Delete
//       </button>
//     </div>
//   );
// };

// export default Item;

import React, { useState } from 'react';

const Item = ({ index, title, link_url, completed, onToggle, onDelete, onDragStart, onDragOver, onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    setIsDragging(true);
    onDragStart(e);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={`flex items-center gap-2 border-b-2 border-blue-100 pb-2 ${isDragging ? 'bg-gray-700' : ''}`}
    >
      {/* Drag handle */}
      <div className="cursor-move">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 8h16M4 16h16"
          />
        </svg>
      </div>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="h-4 w-4"
      />
      <span className={`flex-1 ${completed ? 'line-through opacity-70' : ''}`}>
        {title}
      </span>
      <a
        href={link_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Link
      </a>
      <button
        onClick={onDelete}
        className="bg-red-600 hover:bg-red-700 text-white p-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default Item;