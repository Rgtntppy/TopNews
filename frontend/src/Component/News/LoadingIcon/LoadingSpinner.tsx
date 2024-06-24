import 'src/Component/News/LoadingIcon/Loading.scss';
import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <TailSpin
        height={80}
        width={80}
        color="#00BFFF"
        ariaLabel="loading"
      />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
