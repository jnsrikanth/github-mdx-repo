import React from 'react';
import IO from '../io/io.js';
import Title from '../title/title.js';
import { Container } from './io-example.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = () => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <Title tag="span">IntersectionObserver</Title>
      </Container>
    )}
  </IO>
);

export default IOExample;
