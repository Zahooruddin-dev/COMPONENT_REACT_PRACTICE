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
      </Toggle>

    </>

		
  )
}

export default App;
