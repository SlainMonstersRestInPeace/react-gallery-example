import React from 'react'

import { toggleMenu } from '../toggleMenu';

import styled from 'styled-components'

const BurgerMenu = styled.div`
position: relative;

.burger-menu-toggler {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.burger-menu-toggler:hover::after {
  opacity: 1;
}

.burger-menu-toggler::after {
  content: " ";
  position: absolute;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.1);

  transition: all ease-in 0.1s;
  opacity: 0;
}

.burger-menu-toggler::before {
  content: "\f0c9";
  font-family: FontAwesome;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
}

.burger-menu-content {
  top: 0;
  bottom: 0;
  z-index: 350;
  
  left: -250px;
  opacity: 0;
  transition: all 0.1s ease-in;

  width: 250px;
  padding: 12px;
  position: fixed;
  background: white;

  &.open {
    left: 0;
    opacity: 1;
  }

  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
}

.burger-menu-overlay {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  
  z-index: 250;
  opacity: 0;
  transition: all 150ms linear;

  &.show {
    opacity: 1;
  }
}
`;

export default () => {
  return (
    <BurgerMenu className="burger-menu">
      <div className="burger-menu-toggler" onClick={toggleMenu} />
    </BurgerMenu>
  );
}