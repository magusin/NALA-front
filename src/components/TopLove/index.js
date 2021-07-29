import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

  return (
    <>
      {((topLoveLoaded && topLove != undefined)
      && (
      <div className="topLove">
        <h1>TopLove</h1>
      </div>
      )
      )}
    </>
  );
};

TopLove.propTypes = {
  fetchTopLove: PropTypes.func.isRequired,
  topLove: PropTypes.array.isRequired,
  topLoveLoaded: PropTypes.bool.isRequired,
}

export default TopLove;
