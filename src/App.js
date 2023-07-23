import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';
import EndPage from './pages/EndPage';
import OpeningPage from './OpeningPage';
import ChooseCharacterPage from './pages/ChooseCharacterPage';

const App = () => {
  const [character, setCharacterString] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/choose-character" element={<ChooseCharacterPage setCharacter={setCharacterString}/>} />
          <Route path="/game/:levelIndex" element={<GamePage character={character}/>} />
          <Route path="/end" element={<EndPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
