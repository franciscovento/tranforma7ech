import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ['Costo de adquisición', 'DOMO', 'WooCommerce'],
  [0, 50, 30],
  [1, 1056, 846],
  [2, 1056, 846],
  [3, 1056, 846],
];

export const options = {
  chart: {
    title: 'Costo de adquisición del software a 3 años de uso',
    subtitle: 'En miles de pesos',
  },
};

const EvaluacionEconomica = () => {
  return (
    <div className="py-12">
      <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default EvaluacionEconomica;
