import React, { useRef, RefObject, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SafeModal } from './SafeModal';

function App() {

  const ref = useRef<HTMLDivElement>(null);
  const [isModaled, setModaled] = useState(false);

  return (
    <div className="App">
        <div 
        onClick={()=>{
          setModaled(!isModaled);
        }}
        ref={ref}
        style={{
          height : "100px",
          width : "100px",
          background : "pink"
        }}>

        </div>
        <SafeModal
        itemRef={ref}
        isDisplayed={isModaled}
        >
          <div style={{
            border : "1px solid blue"
          }}>
            Hello
          </div>
        </SafeModal>
    </div>
  );
}

export default App;
