import React from 'react'

import styled from 'styled-components'

const Spinner = styled.div`
display: flex;
align-items: center;
justify-content: center;

.spinner div {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin-right: 16px;
  background: var(--material-blue);

  animation: scale-up linear 0.8s infinite both;
}

.spinner div:nth-child(1) {
  animation-delay: 0s;
}

.spinner div:nth-child(2) {
  animation-delay: -0.3s;
}

.spinner div:nth-child(3) {
  animation-delay: -0.6s;
}

@keyframes scale-up {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
`;

export default () => {
  return (
    <Spinner>
      <div className="spinner">
        <div />
        <div />
        <div />
      </div>
    </Spinner>
  );
}