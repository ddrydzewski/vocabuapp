import * as React from 'react';
import Loader from 'react-loader-spinner';
import { StyledContainer } from './style';

export const LoadingSpinner = () => {
  return (
    <StyledContainer>
      <Loader type="Oval" color="#FFF" height={50} width={50} />
    </StyledContainer>
  );
};
