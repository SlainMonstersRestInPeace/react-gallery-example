import React from 'react'

import NavMenu from './NavMenu'

import styled from 'styled-components'

const Avatar = styled.div`
width: 64px;
height: 64px;
background: #b5b5b5;
border-radius: 100%;
`;

export default () => {
  return (
    <div className="burger-menu-content text-dark">
      <Avatar />
      <div className="mb-3" />
      <h5 className="mb-1">Сергей Стенянский</h5>
      <h6 className="text-secondary">qweartekyl@gmail.com</h6>
      <hr className="mb-2" />
      <NavMenu />
    </div>
  );
}