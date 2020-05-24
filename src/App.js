import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import MainInput from './components/MainInput';
import RichLink from './components/RichLink';
import UrlTable from './components/UrlTable'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
      <MainInput></MainInput>
      <RichLink></RichLink>
      <UrlTable></UrlTable>
      </Container>
    </div>
  );
}

export default App;
