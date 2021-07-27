import React from 'react'

import {
  Switch, Route, useRouteMatch
} from 'react-router-dom'

import styled from 'styled-components'

import Gallery from './Gallery'
import About from './About'
import ImageInfo from './ImageInfo'

import Header from '../components/Header'
import BurgerMenuContent from '../components/BurgerMenuContent'

const ImgInfo = () => {
  const match = useRouteMatch();
  const id = match.params.id || 1;

  return (
    <ImageInfo id={id} />
  );
};

const Main = styled.main`
margin-top: 78px;
`;

export default () => {
  return (
    <div className="wrapper d-flex flex-column container-fluid p-0">
      <Header />
      <Main className="container">
        <Switch>
          <Route exact path="/" component={Gallery}/>
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/image/:id" component={ImgInfo} />
        </Switch>
      </Main>
      <BurgerMenuContent />
    </div>
  );
}