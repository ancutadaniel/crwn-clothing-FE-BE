import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      error: false,
      imageUrl: 'https://i.imgur.com/lKJiT77.png',
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    return this.state.error ? (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl={this.state.imageUrl} />
        <ErrorImageText>Something went wrong</ErrorImageText>
      </ErrorImageOverlay>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
