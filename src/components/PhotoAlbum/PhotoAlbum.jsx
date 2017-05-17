import React from 'react';
import PropTypes from 'prop-types';

import Motion from 'components/Animation/Motion';
import PhotoTile from 'components/PhotoTile';

import 'assets/css/photoalbum.css';

const PhotoAlbum = (props) => {
  const { tilesData, actions } = props;

  const getTiles = () => {
    return tilesData.map(tile => <PhotoTile key={tile.tileKey} data={tile} updateRating={actions.updateRating} />);
  };

  return (
    <div className='photo-album'>
      <h3>Mouse left click to increase rating, mouse right click to decrease</h3>
      <div className='photo-album-buttons'>
        <button type='button' onClick={actions.resetRating}>RESET</button>
        <button type='button' onClick={actions.generateRating}>RANDOM</button>
      </div>
      <Motion>
        {getTiles()}
      </Motion>
    </div>
  );
};

PhotoAlbum.propTypes = {
  tilesData: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default PhotoAlbum;
