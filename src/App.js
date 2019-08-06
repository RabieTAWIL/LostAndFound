import React from 'react';
import SuccessStory from './components/Success';
import ButtonAppBar from './components/header';
import ImageGridList from './components/slider';
import FooterPage from './components/Footer';
import FormDialog from './components/dialogs'





function App() {
  return (
    <div>
      <ButtonAppBar />
      <ImageGridList/>
      <SuccessStory/>
      <FooterPage/>
    </div>
  );
}

export default App;
