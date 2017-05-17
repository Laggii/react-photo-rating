import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { getAnimationTransition, setNodeStyle } from 'utils/DomUtils';
import { ANIMATION_INITIAL_TRANSITION } from 'constants/Animation';

export default class Motion extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  };

  componentWillReceiveProps() {
    const domChildren = ReactDOM.findDOMNode(this).children;
    const { children } = this.props;

    Array.from(domChildren).forEach((child, index) => {
      const domNode = ReactDOM.findDOMNode(child);
      const boundingBox = domNode.getBoundingClientRect();
      this.setState({
        [children[index].key]: boundingBox
      });
    });
  }

  componentDidUpdate() {
    const domChildren = ReactDOM.findDOMNode(this).children;
    const { children } = this.props;

    Array.from(domChildren).forEach((child, index) => {
      const domNode = ReactDOM.findDOMNode(child);

      const newBox = domNode.getBoundingClientRect();
      const oldBox = this.state[children[index].key];

      const deltaX = oldBox.left - newBox.left;
      const deltaY = oldBox.top - newBox.top;

      const cleanUp = () => {
        setNodeStyle(domNode, { transition: '' });
        domNode.removeEventListener('transitionend', cleanUp);
      };

      if (deltaY !== 0 || deltaX !== 0) {
        setNodeStyle(domNode, getAnimationTransition(deltaX, deltaY));

        requestAnimationFrame(() => {
          setNodeStyle(domNode, ANIMATION_INITIAL_TRANSITION);
        });

        domNode.addEventListener('transitionend', cleanUp);
      }
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div>{children}</div>
    );
  }
}
