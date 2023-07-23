import React, { useState } from 'react';
import DialogPopUp from './PopUpService/pop-ups/Dialog';
import TestPopUp from './PopUpService/pop-ups/TestPopUp';
import "./OpeningPage.css"

const OpeningPage = () => {
  const [showDialogPopUp, setShowDialogPopUp] = useState(false);
  const [showTestPopUp, setShowTestPopUp] = useState(false);

  const handleButton1Click = () => {
    setShowTestPopUp(false);
    setShowDialogPopUp(true);
  };

  const handleButton2Click = () => {
    setShowDialogPopUp(false);
    setShowTestPopUp(true);
  };

  return (
    <div className="container"> 
      <h1>Pop-up</h1>
      <div>
        <button onClick={handleButton1Click}>dialog</button>
        <button onClick={handleButton2Click}>Do The test</button>
      </div>
      {showDialogPopUp && <DialogPopUp setShowPopUp={setShowDialogPopUp} levelNumber={3} />}
      {showTestPopUp && <TestPopUp setShowPopUp={setShowTestPopUp} levelNumber={3} />}
    </div>
  );
};

export default OpeningPage;
