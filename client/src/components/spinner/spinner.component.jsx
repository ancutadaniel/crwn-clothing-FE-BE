import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './spinner.styles';

//High Order Component approach, wrap component is the component passed in
const Spinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default Spinner;
