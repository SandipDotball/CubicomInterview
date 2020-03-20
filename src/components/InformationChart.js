import React from 'react';

import PieChart from 'react-simple-pie-chart';

function InformationChart() {
  return (
    <div className='informationChart'>
      <PieChart
        slices={[
          { color: '#86D5A2', value: 50 },
          { color: '#FAD37B', value: 10 },
          { color: '#EA8A72', value: 20 }
        ]}
      />
    </div>
  );
}

export default InformationChart;
