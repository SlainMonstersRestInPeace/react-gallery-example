import React from 'react'

import styled from 'styled-components'

import { useHistory } from 'react-router';

const Photo = styled.img`
width: 150px;
height: 150px;
display: block;
`;

const Card = styled.div`
.btn {
  width: 120px;
  margin: auto;
}
`;

export default ({
  photo
}) => {
  const history = useHistory();

  function handleBack() {
    history.push('/');
  }

  return (
    <div className="row justify-content-center">
      <Card className="card p-3 col-8">
        <div className="mb-3 d-flex flex-row justify-content-start image-info">
          <Photo src={photo.thumbnailUrl} className="mr-2">
          </Photo>
          <ul className="list-group flex-grow-1">
            <li className="list-group-item">
              <strong>albumId:</strong> {photo.albumId}
            </li>
            <li className="list-group-item">
              <strong>id:</strong> {photo.id}
            </li>
            <li className="list-group-item">
              <strong>thumbnailUrl:</strong> {photo.thumbnailUrl}
            </li>
            <li className="list-group-item">
              <strong>title:</strong> {photo.title}
            </li>
            <li className="list-group-item">
              <strong>url:</strong> {photo.url}
            </li>
          </ul>
        </div>
        <button className="btn btn-primary" onClick={handleBack}>Back</button>
      </Card>
    </div>
  )
}