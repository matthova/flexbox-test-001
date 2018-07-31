import React, { Component } from 'react';

import {
  AppWrapper,
  Body,
  Footer,
  Header
} from './design-system';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header/>
        <Body/>
        <Footer/>
      </AppWrapper>
    );
  }
}

export default App;
