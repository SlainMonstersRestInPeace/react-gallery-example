import React from 'react'

import PhotoCard from './PhotoCard'

import { v4 as uuid } from 'uuid'

export default ({
  photos,
  label
}) => {
  const photoList = photos.map(photo => {
    return (
      <PhotoCard key={uuid()} photo={photo}/>
    );
  });

  return (
    <div className="photo-category mb-3">
      <h4>{label}</h4>
      <div className="d-flex flex-wrap justify-content-start" >
        {photoList}
      </div>
    </div>
  );
}