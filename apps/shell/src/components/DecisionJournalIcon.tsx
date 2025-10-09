import React from 'react';

interface DecisionJournalIconProps {
  isLoggedIn: boolean;
}

const DecisionJournalIcon: React.FC<DecisionJournalIconProps> = ({ isLoggedIn }) => {
  return (
    <>{isLoggedIn && <div>User Icon</div>}</>
  );
};

export default DecisionJournalIcon;
