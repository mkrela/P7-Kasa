import React from 'react';
import './Loading.scss';

function Loading() {
  return (
    <div className="loading">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
