import React from 'react';

const KPIWidget = ({ title, value, target }) => {
  const percentage = ((value / target) * 100).toFixed(2);

  return (
    <div className="kpi-widget">
      <h3>{title}</h3>
      <p>Value: {value}</p>
      <p>Target: {target}</p>
      <p>Progress: {percentage}%</p>
    </div>
  );
};

export default KPIWidget;
