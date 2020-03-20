import React from 'react';

function PerformanceHeader() {
  return (
    <div className='performanceHeader'>
      <div className='performanceHeader__col performanceHeader__col--name'>
        FE NAME
      </div>
      <div className='performanceHeader__col performanceHeader__col--del'>
        DEL
      </div>
      <div className='performanceHeader__col performanceHeader__col--undel'>
        UNDEL
      </div>
      <div className='performanceHeader__col performanceHeader__col--na'>
        NA
      </div>
      <div className='performanceHeader__col performanceHeader__col--pcen'>
        DELIVERY IN %
      </div>
    </div>
  );
}

export default PerformanceHeader;
