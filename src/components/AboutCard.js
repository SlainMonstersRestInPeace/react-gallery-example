import React from 'react'

import styled from 'styled-components'

const ProfilePicture = styled.div`
width: 100px;
height: 100px;
border-radius: 100%;
background: #b5b5b5;
`;

export default () => {
  return (
    <div className="row no-gutters justify-content-center">
      <div className="card col-4">
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title mb-3">Сергей Стенянский</h5>
          <ProfilePicture className="pfp mb-3">
          </ProfilePicture>
          <h6 className="card-subtitle">Front-End Developer</h6>
          <p className="card-text mb-2">
            Javascript, HTML, CSS, React.js, Vue.js
          </p>
          <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}