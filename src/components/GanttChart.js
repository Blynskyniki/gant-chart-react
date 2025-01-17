import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsGantt from 'highcharts/modules/gantt';
import HighchartsReact from 'highcharts-react-official';

// Инициализация модуля Gantt
HighchartsGantt(Highcharts);
const GanttChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const day = 24 * 36e5;
    const today = Math.floor(Date.now() / day) * day;

    const options = {
      chart: {
        type: 'gantt',
        plotBackgroundColor: 'rgba(128,128,128,0.02)',
        plotBorderColor: 'rgba(128,128,128,0.1)',
        plotBorderWidth: 1
      },
      title: {
        text: 'Gantt Project Management'
      },
      series: [{
        name: 'Offices',
        data: [{
          name: 'New offices',
          id: 'new_offices',
          owner: 'Peter'
        }, {
          name: 'Prepare office building',
          id: 'prepare_building',
          parent: 'new_offices',
          start: today - (2 * day),
          end: today + (6 * day),
          completed: {
            amount: 0.2
          },
          owner: 'Linda'
        }, {
          name: 'Inspect building',
          id: 'inspect_building',
          dependency: 'prepare_building',
          parent: 'new_offices',
          start: today + 6 * day,
          end: today + 8 * day,
          owner: 'Ivy'
        }, {
          name: 'Passed inspection',
          id: 'passed_inspection',
          dependency: 'inspect_building',
          parent: 'new_offices',
          start: today + 9.5 * day,
          milestone: true,
          owner: 'Peter'
        }, {
          name: 'Relocate',
          id: 'relocate',
          dependency: 'passed_inspection',
          parent: 'new_offices',
          owner: 'Josh'
        }, {
          name: 'Relocate staff',
          id: 'relocate_staff',
          parent: 'relocate',
          start: today + 10 * day,
          end: today + 11 * day,
          owner: 'Mark'
        }, {
          name: 'Relocate test facility',
          dependency: 'relocate_staff',
          parent: 'relocate',
          start: today + 11 * day,
          end: today + 13 * day,
          owner: 'Anne'
        }, {
          name: 'Relocate cantina',
          dependency: 'relocate_staff',
          parent: 'relocate',
          start: today + 11 * day,
          end: today + 14 * day
        }]
      }, {
        name: 'Product',
        data: [{
          name: 'New product launch',
          id: 'new_product',
          owner: 'Peter'
        }, {
          name: 'Development',
          id: 'development',
          parent: 'new_product',
          start: today - day,
          end: today + (11 * day),
          completed: {
            amount: 0.6,
            fill: '#e80'
          },
          owner: 'Susan'
        }, {
          name: 'Beta',
          id: 'beta',
          dependency: 'development',
          parent: 'new_product',
          start: today + 12.5 * day,
          milestone: true,
          owner: 'Peter'
        }, {
          name: 'Final development',
          id: 'finalize',
          dependency: 'beta',
          parent: 'new_product',
          start: today + 13 * day,
          end: today + 17 * day
        }, {
          name: 'Launch',
          dependency: 'finalize',
          parent: 'new_product',
          start: today + 17.5 * day,
          milestone: true,
          owner: 'Peter'
        }]
      }]
    };

    // Инициализируем график Highcharts Gantt
    Highcharts.ganttChart(chartRef.current, options);
  }, []);

  return <div ref={chartRef}></div>;
};

export default GanttChart;
