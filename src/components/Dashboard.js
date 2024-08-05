import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Панель руководителя отдела</h1>
      </header>
      <div className="kpis">
        <div className="kpi">
          <h2>Выполненные задачи</h2>
          <p>80%</p>
        </div>
        <div className="kpi">
          <h2>Текущие проекты</h2>
          <p>7</p>
        </div>
        <div className="kpi">
          <h2>Просроченные задачи</h2>
          <p>3</p>
        </div>
        <div className="kpi">
          <h2>Сотрудники в команде</h2>
          <p>12</p>
        </div>
        <div className="kpi">
          <h2>Общая производительность</h2>
          <p>85%</p>
        </div>
        <div className="kpi">
          <h2>Бюджет проекта</h2>
          <p>45%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
