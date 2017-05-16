import { TILES_UPDATE_RATING, TILES_RESET_RATING, TILES_GENERATE_RATING } from 'constants/ActionTypes';

export const updateRating = (tileKey, rating) => ({ type: TILES_UPDATE_RATING, tileKey, rating });
export const resetRating = () => ({ type: TILES_RESET_RATING });
export const generateRating = () => ({ type: TILES_GENERATE_RATING });
