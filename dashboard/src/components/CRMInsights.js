import React from 'react';

const CRMInsights = ({ insights }) => {
  return (
    <div className="crm-insights">
      <h3>CRM Insights</h3>
      <ul>
        {insights.map((insight, index) => (
          <li key={index}>
            {insight.metric}: {insight.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRMInsights;
