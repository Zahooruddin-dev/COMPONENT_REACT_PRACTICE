import React from 'react';
import './App.css';
import Star from './star';
import Toggle from './Toggle/index';
function App() {



  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Star />
        </Toggle.Button>
				<Toggle.On>
					The toggle is on
				</Toggle.On>
				<Toggle.Off>
					The toggle is off
				</Toggle.Off>
      </Toggle>

    </>

		
  )
}

export default App;
