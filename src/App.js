import React from 'react';
import FooterPage from './components/Footer';
import Logoes from './logos';
import SuccessStory from "./components/Success";
import ImageGridList from "./components/slider";
import SimpleCard from "./components/SimpleCard";


function App() {
  return (
    <div>

      <ImageGridList />
      <SimpleCard />
      <SuccessStory />
      <Logoes/>

    </div>
  );
}

export default App;
