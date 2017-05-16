import React from 'react';
import PropTypes from 'prop-types';

import * as Rating from 'constants/Rating';
import { MOUSE_LEFT_BUTTON } from 'constants/Buttons';

import 'styles/phototiles.css';

const PhotoTile = (props) => {
  const { data, updateRating } = props;

  const onMouseDown = (event) => {
    const newRating = data.rating + (event.button === MOUSE_LEFT_BUTTON ? 1 : -1);

    if (newRating <= Rating.MAX_RATING && newRating >= Rating.MIN_RATING) {
      updateRating(data.tileKey, newRating);
    }
  };

  const onContextMenu = (event) => {
    event.preventDefault();
    return false;
  };

  return (
    <div className='photo-tile'>
      <div className='photo-tile-content' onMouseDown={onMouseDown} onContextMenu={onContextMenu}>
        <span className='rating-label'>
          {data.rating}
        </span>
        <img src={data.url} alt='' />
      </div>
    </div>
  );
};

PhotoTile.propTypes = {
  data: PropTypes.object.isRequired,
  updateRating: PropTypes.func.isRequired
};

export default PhotoTile;
