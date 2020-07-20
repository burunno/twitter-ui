import React from 'react';

import Tweet from '../Tweet';

import { Container, Tabs, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>Tweets</Tabs>
        <Tweets>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </Tweets>
    </Container>
  );
}

export default Feed;