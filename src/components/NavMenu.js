import React from 'react'

import { Link } from 'react-router-dom'

import { toggleMenu } from '../toggleMenu';

import styled from 'styled-components'

const NavItem = styled.li`
width: 100%;
margin: 4px 0;
`;

const StyledLink = styled(Link)`
font-weight: 600;
display: block;
width: 100%;
padding: 4px 8px;
border-radius: 4px;

text-decoration: none;

color: inherit;
background: transparent;
transition: all ease-in 0.1s;

&:hover {
  text-decoration: none;
  
  color: #1976D2;
  background: #E4EFFA;
}
`;

export default () => {
  return (
    <nav>
      <ul className="list-unstyled mb-0" >
        <NavItem onClick={toggleMenu}>
          <StyledLink to="/">
            Gallery
          </StyledLink>
        </NavItem>
        <NavItem onClick={toggleMenu}>
          <StyledLink to="/about">
            About
          </StyledLink>
        </NavItem>
      </ul>
    </nav>
  );
}