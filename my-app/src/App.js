import React from 'react';
import Main from './components/Main';
import images from './assets/images';

const App = () => (
  <React.Fragment>
    <Main cards={images}>
    </Main>
  </React.Fragment>
);

export default App;
