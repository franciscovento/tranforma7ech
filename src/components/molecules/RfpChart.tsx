import React from 'react';
import { Chart } from 'react-google-charts';
const RfpChart = () => {
  const dataEconomics = [
    ['Aspecto Económico', 'Porcentaje', { role: 'style' }],
    ['DOMO', 22.05, '#43466f'],
    ['WooCommerce', 22.8, '#f2c56a'],
  ];

  const optionsEconomics = {
    title: 'Aspecto Económico - 30%',
    legend: { position: 'none' },
    hAxis: {
      title: 'Porcentaje',
      minValue: 0,
      maxValue: 30,
    },
  };

  const dataProveedores = [
    ['Aspecto Proveedores', 'Porcentaje', { role: 'style' }],
    ['DOMO', 22.05, '#43466f'],
    ['WooCommerce', 22.8, '#f2c56a'],
  ];

  const optionsProveedores = {
    title: 'Aspecto Proveedores - 35%',
    legend: { position: 'none' },
    hAxis: {
      title: 'Porcentaje',
      minValue: 0,
      maxValue: 35,
    },
  };

  const dataTecnico = [
    ['Aspecto Técnico', 'Porcentaje', { role: 'style' }],
    ['DOMO', 13.33, '#43466f'],
    ['WooCommerce', 14.6, '#f2c56a'],
  ];

  const optionsTecnico = {
    title: 'Aspecto Técnico - 15%',
    legend: { position: 'none' },
    hAxis: {
      title: 'Porcentaje',
      minValue: 0,
      maxValue: 15,
    },
  };
  const dataFuncional = [
    ['Aspecto Funcional', 'Porcentaje', { role: 'style' }],
    ['DOMO', 14.04, '#43466f'],
    ['WooCommerce', 17.42, '#f2c56a'],
  ];

  const optionsFuncional = {
    title: 'Aspecto Funcional - 20%',
    legend: { position: 'none' },
    hAxis: {
      title: 'Porcentaje',
      minValue: 0,
      maxValue: 20,
    },
  };
  return (
    <div className="grid gap-8 py-12">
      <Chart
        chartType="BarChart"
        data={dataEconomics}
        options={optionsEconomics}
        width="100%"
        height="300px"
      />
      <Chart
        chartType="BarChart"
        data={dataProveedores}
        options={optionsProveedores}
        width="100%"
        height="300px"
      />
      <Chart
        chartType="BarChart"
        data={dataTecnico}
        options={optionsTecnico}
        width="100%"
        height="300px"
      />
      <Chart
        chartType="BarChart"
        data={dataFuncional}
        options={optionsFuncional}
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default RfpChart;
