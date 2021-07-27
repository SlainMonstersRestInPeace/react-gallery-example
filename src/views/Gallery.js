import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { v4 as uuid } from 'uuid'

import useCancelToken from '../hooks/useCancelToken'

import { fetchPhotos } from '../redux/reducers/app'

import PhotoCategory from '../components/PhotoCategory'
import Spinner from '../components/Spinner'

import styled from 'styled-components'

const Content = styled.div`
.gallery {
  animation: fade-in ease-in 0.1s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
  }
}
`;

const Blank = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 800px;
`;

export default () => {
  const photos = useSelector(state => state.app.photos);
  const dispatch = useDispatch();
  
  const [loaded, setLoaded] = useState(false);

  const source = useCancelToken();

  async function getPhotos() {
    const url = 'https://jsonplaceholder.typicode.com/photos/';

    const cancelToken = source.token;
    const options = { cancelToken };

    await dispatch(fetchPhotos(url, options));

    setTimeout(function() {
      if (!source.isCancelled()) {
        setLoaded(true);
      }
    }, 1000);
  }

  function mounted() {
    getPhotos();
  }

  useEffect(() => {
    mounted();

    return function() {
      source.cancel();
    }
  }, []);

  const items = loaded ? photos : [];

  const categories = [];

  const MAX_CATEGORIES = 4;
  const CATEGORY_MAX = 6;

  for (let i = 0; i < MAX_CATEGORIES; i++) {
    const idx = i*CATEGORY_MAX;

    const category = items.slice(idx, idx + CATEGORY_MAX);

    if (category.length > 0) {
      categories.push(category);
    }
  }

  const catList = categories.map((category, idx) => {
    return (
      <PhotoCategory key={uuid()} photos={category} label={`Category ${idx + 1}`}/>
    )
  });

  return (
    <Choose>
      <When condition={loaded}>
        <Content>
          <div className="gallery">
            {catList}
          </div>
        </Content>
      </When>
      <Otherwise>
        <Blank>
          <Spinner />
        </Blank>
      </Otherwise>
    </Choose>
  );
}