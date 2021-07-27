import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useCancelToken from '../hooks/useCancelToken';

import { fetchPhoto } from '../redux/reducers/app';

import Spinner from '../components/Spinner'

import ImageInfoCard from '../components/ImageInfoCard';

import styled from 'styled-components'

const Blank = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 300px;
`;

const Content = styled.div`
& {
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

export default ({
  id
}) => {
  const photo = useSelector(state => state.app.photo);
  const dispatch = useDispatch();

  const source = useCancelToken();

  const [loaded, setLoaded] = useState(false);

  async function mounted() {
    const cancelToken = source.token;
    const options = { cancelToken };

    await dispatch(fetchPhoto(id, options));

    setTimeout(function() {
      if (!source.isCancelled()) {
        setLoaded(true);
      }
    }, 1000);
  }

  useEffect(() => {
    mounted();

    return function () {
      source.cancel();
    }
  }, []);

  return (
    <Choose>
      <When condition={loaded}>
        <Content>
          <ImageInfoCard photo={photo}/>
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