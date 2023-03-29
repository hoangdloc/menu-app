import styled from '@emotion/styled';
import React from 'react';

const ErrorPageStyles = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dfe6e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  .title {
    font-size: 3.6rem;
  }
  .content {
    font-size: 1.2rem;
  }
  .status {
    font-size: 1rem;
    font-style: italic;
    color: #636e72;
  }
`;

const ErrorPage: React.FC = () => {
  return (
    <ErrorPageStyles>
      <h1 className="title">Oops!</h1>
      <p className="content">Sorry, an unexpected error has occured</p>
      <span className="status">Not found</span>
    </ErrorPageStyles>
  );
};

export default ErrorPage;
