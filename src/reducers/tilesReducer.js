import { getInitialTilesData } from 'utils/TilesUtils';
import { insertionSort, randomNumber } from 'utils/DataHandling';

import { MIN_RATING, MAX_RATING } from 'constants/Rating';
import { TILES_UPDATE_RATING, TILES_RESET_RATING, TILES_GENERATE_RATING } from 'constants/ActionTypes';

const ACTION_HANDLERS = {
  [TILES_UPDATE_RATING]: (state, action) => {
    const tile = state.find(tile => tile.tileKey === action.tileKey);
    tile.rating = action.rating;

    return [
      ...insertionSort(state, (firstTile, secondTile) => secondTile.rating - firstTile.rating)
    ];
  },
  [TILES_RESET_RATING]: () => getInitialTilesData(),
  [TILES_GENERATE_RATING]: (state) => {
    state.forEach(tile => tile.rating = randomNumber(MIN_RATING, MAX_RATING));
    return [
      ...state.sort((firstTile, secondTile) => secondTile.rating - firstTile.rating)
    ];
  }
};

const initialState = [
  ...getInitialTilesData()
];

export default function tilesReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
