import React from 'react'

import BurgerMenu from './BurgerMenu'

import styled from 'styled-components'

const Header = styled.header`
//get rid of the blurry text bug when a statically positioned element appears behind a fixedly positioned element
-webkit-transform: translate3d(0,0,0) !important;
transform: translate3d(0,0,0) !important;

position: fixed;
background: var(--material-blue);
width: 100%;
color: white;
padding: 8px 4px;

z-index: 100;

display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: baseline;

box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.5);
`;

export default () => {
  return (
    <Header>
      <BurgerMenu />
      <div className="mr-3" />
      <h4 className="m-0">Gallery</h4>
    </Header>
  )
}