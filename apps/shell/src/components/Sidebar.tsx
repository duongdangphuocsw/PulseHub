import React, { useState } from 'react';

const mfeList = [
  { id: 'habitTracking', name: 'Habit Tracker', icon: ' H ' },
  { id: 'quoteGeneration', name: 'Quote Generation', icon: ' Q ' },
  { id: 'decisionJournal', name: 'Decision Journal', icon: ' D ' },
];

const NavItem = ({ id, name, icon, activeMFE, setActiveMFE }) => (
  <button
    onClick={() => setActiveMFE(id)}
    className={`w-full text-left flex items-center p-3 rounded-xl transition duration-150 ${
      activeMFE === id
        ? 'bg-indigo-600 text-white shadow-lg'
        : 'text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700'
    }`}
  >
    <span className="text-xl mr-3">{icon}</span>
    <span className="font-medium text-sm md:text-base">{name}</span>
  </button>
);

const Sidebar = () => {
  const [activeMFE, setActiveMFE] = useState('habitTracking');

  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Navigation</h2>
      <ul>
        {mfeList.map((mfe) => (
          <li key={mfe.id}>
            <NavItem
              id={mfe.id}
              name={mfe.name}
              icon={mfe.icon}
              activeMFE={activeMFE}
              setActiveMFE={setActiveMFE}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;