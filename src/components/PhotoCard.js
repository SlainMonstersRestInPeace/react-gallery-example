import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const PhotoCard = styled.div`
height: 150px;
width: 150px;
position: relative;

a {
  text-decoration: none;
}
`;

const Photo = styled.img`
height: 100%;
width: 100%;
`;

const StyledLink = styled(Link)`
top: 0;
height: 100%;
width: 100%;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
z-index: 1;

& .button-more {
  opacity: 0;
  transition: all 0.1s ease-in;
}

&:hover .button-more {
  opacity: 1;
}
`;

export default ({
  photo
}) => {
  return (
    <PhotoCard className="photo-card mb-3" >
      <Photo src={photo.thumbnailUrl} />
      <StyledLink to={`/image/${photo.id}`} >
        <button className="btn btn-light button-more">More</button>
      </StyledLink>
    </PhotoCard>
  );
}