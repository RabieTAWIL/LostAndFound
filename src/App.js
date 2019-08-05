import React from 'react';
import Container from '@material-ui/core/Container';
import SuccessStory from './components/Success';
import ButtonAppBar from './components/header';
import ImageGridList from './components/slider'
import FormDialog from './components/dialogs'


function App() {
  return (
    <Container>
      <SuccessStory/>

      <ButtonAppBar />
    
     <ImageGridList />
    </Container>
  );
}

export default App;
