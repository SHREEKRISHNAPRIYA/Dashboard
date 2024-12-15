import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import KPIWidget from './components/KPIWidget';
import TaskManager from './components/TaskManager';
import FinancialOverview from './components/FinancialOverview';
import CRMInsights from './components/CRMInsights';
import './App.css';

import { fetchKPIs, fetchTasks, fetchFinancials, fetchCRMInsights } from './services/api';

const App = () => {
  const [kpis, setKPIs] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [financialData, setFinancialData] = useState([]);
  const [crmInsights, setCRMInsights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [kpiData, taskData, financialData, crmData] = await Promise.all([
        fetchKPIs(),
        fetchTasks(),
        fetchFinancials(),
        fetchCRMInsights(),
      ]);
      setKPIs(kpiData);
      setTasks(taskData);
      setFinancialData(financialData);
      setCRMInsights(crmData);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="dashboard">
        <div className="kpi-section">
          {kpis.map((kpi) => (
            <KPIWidget key={kpi.id} title={kpi.title} value={kpi.value} target={kpi.target} />
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
