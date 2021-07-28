import React, {useEffect} from 'react';

import './topLove.scss';

const TopLove = ({
  fetchTopLove,
  topLove,
  topLoveLoaded,
}) => {

  useEffect(
    fetchTopLove,
    [],
  );
  
  return(
    <>
      {((topLoveLoaded && topLove != undefined) &&
      <div className="topLove">
        <h1>TopLove</h1>
      </div>
      )}
    </>
  );
};

export default TopLove;
