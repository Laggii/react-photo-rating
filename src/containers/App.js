import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CoreLayout from 'layouts/Core';
import PhotoAlbum from 'components/PhotoAlbum';

import * as Actions from 'actions/tiles';

const App = ({ tilesData, actions }) => (
  <CoreLayout>
    <PhotoAlbum tilesData={tilesData} actions={actions} />
  </CoreLayout>
);

App.propTypes = {
  tilesData: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tilesData: state.tilesReducer
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
