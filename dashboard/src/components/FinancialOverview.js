import React from 'react';

const FinancialOverview = ({ data }) => {
  return (
    <div className="financial-overview">
      <h3>Financial Overview</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialOverview;
