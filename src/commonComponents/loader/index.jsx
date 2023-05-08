import React from 'react';
import './index.scss';
import { InfinitySpin } from 'react-loader-spinner';
function Loader() {
  return (
    <div className="loader_wrapper">
      <InfinitySpin height="150" width="150" color="blue" ariaLabel="loading" />
    </div>
  );
}
export default Loader;
