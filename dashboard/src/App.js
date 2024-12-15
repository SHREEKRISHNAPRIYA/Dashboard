import React from 'react';
import Navbar from './components/Navbar';
import KPIWidget from './components/KPIWidget';
import TaskManager from './components/TaskManager';
import FinancialOverview from './components/FinancialOverview';
import CRMInsights from './components/CRMInsights';
import './App.css';

const App = () => {
  const kpis = [
    { title: 'Revenue', value: 100000, target: 150000 },
    { title: 'Customer Retention', value: 85, target: 90 },
    { title: 'Lead Conversion Rate', value: 12, target: 15 },
  ];

  const tasks = [
    { name: 'Launch Campaign', status: 'In Progress' },
    { name: 'Update CRM Data', status: 'Completed' },
  ];

  const financialData = [
    { name: 'Budget', value: '$500,000' },
    { name: 'Expenditure', value: '$350,000' },
  ];

  const crmInsights = [
    { metric: 'New Leads', value: 120 },
    { metric: 'Conversions', value: 45 },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="dashboard">
        <div className="kpi-section">
          {kpis.map((kpi, index) => (
            <KPIWidget key={index} title={kpi.title} value={kpi.value} target={kpi.target} />
          ))}
        </div>
        <TaskManager tasks={tasks} />
        <FinancialOverview data={financialData} />
        <CRMInsights insights={crmInsights} />
      </div>
    </div>
  );
};

export default App;
