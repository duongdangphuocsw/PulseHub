import React from 'react';
import DecisionJournalIcon from './DecisionJournalIcon';

const services = {
  HabitTracking: '/habitTracking',
  QuoteGeneration: '/quoteGeneration',
  DecisionJournal: '/decisionJournal',
  Home: '/',
};

const Header: React.FC = () => {
  const isLoggedIn = true; // Mock auth state

  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200 md:px-8">
      <nav>
        <ul className="flex gap-8">
          {Object.entries(services).map(([name, path]) => (
            <li key={name}>
              <a
                href={path}
                className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-6">
        <a href="/quoteGeneration" className="text-gray-700 hover:text-blue-500">
          {/* Replace with a proper cart icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </a>
        <DecisionJournalIcon isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
};

export default Header;
