import React from 'react';

const Item = ({ title, link_url, completed, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-2 border-b-2 border-blue-100 pb-2">
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